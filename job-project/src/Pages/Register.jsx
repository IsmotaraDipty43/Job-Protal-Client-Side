import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registeranimation from '../assets/register.json';
import AuthContext from '../Context/AuthContext';

const Register = () => {
  const [passwordError, setPasswordError] = useState('');
  const { user, createUser } = useContext(AuthContext);

  const HandleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const pass = from.password.value;
    console.log(name, email, pass);

    // password validation 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (passwordRegex.test(pass)) {
      console.log('Valid password');
      setPasswordError(''); // Clear any previous errors
    } else {
      console.log('Invalid password');
      setPasswordError('Password must be at least 6 characters long, with at least one uppercase letter, one lowercase letter, and one digit.');
    }

    // Only proceed if password is valid
    if (passwordRegex.test(pass)) {
      createUser(email, pass)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error.message);  // Corrected the typo here
        });
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-90">
            <Lottie animationData={registeranimation} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="mt-10 ml-8 text-5xl font-bold">Register now!</h1>
            <form className="card-body" onSubmit={HandleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
