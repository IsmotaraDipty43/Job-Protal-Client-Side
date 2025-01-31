import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'https://server-wheat-iota.vercel.app',
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Add a response interceptor
    const interceptor = axiosInstance.interceptors.response.use(
      response => {
        return response; // Return the response if no errors
      },
      async error => {
        console.error('Error caught in interceptor:', error);

        // Check if the error has a response and status
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          console.log('Unauthorized or forbidden error. Logging out...');
          try {
            await logout(); // Log the user out
            console.log('User logged out successfully');
            navigate('/login'); // Redirect to login page
          } catch (logoutError) {
            console.error('Error during logout:', logoutError);
          }
        }

        return Promise.reject(error); // Pass the error to the calling function
      }
    );

    // Cleanup the interceptor on component unmount
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [logout, navigate]);

  return axiosInstance;
};

export default UseAxiosSecure;
