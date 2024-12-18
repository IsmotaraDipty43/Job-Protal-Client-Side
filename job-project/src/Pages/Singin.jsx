import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import Lottie from 'lottie-react';
import login from '../assets/login.json'
import axios from 'axios'; // Ensure axios is imported
import { useLocation, useNavigate } from 'react-router-dom';
const Singin = () => {
    const [passwordError, setPasswordError] = useState('');
    const location = useLocation()
  const { Signin  } = useContext(AuthContext);
      const navigate = useNavigate()
const fromm = location.state || '/';


  const HandleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
   
    const email = from.email.value;
    const pass = from.password.value;
    console.log( email, pass);

    Signin(email,pass)
    .then(result=>{
      console.log('sign in', result.user);
      const user = {email: email}
      axios .post('http://localhost:5000/jwt',user, {withCredentials:true})
      .then(res=>{
        console.log(res.data);
      })
      // navigate(fromm)
    })
    .catch(error=>{
      console.log(error);
    })
  };
    return (
        <div>
              <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-90">
            <Lottie animationData={login} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="mt-10 ml-8 text-5xl font-bold">login now!</h1>
            <form className="card-body" onSubmit={HandleRegister}>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>  // Show error message
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>

              </div>
            </form>
          </div>
        </div>
      </div>   
        </div>
    );
};

export default Singin;