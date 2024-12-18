import React, { useContext } from 'react';
import { Link, NavLink, useInRouterContext } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const links = (
    <>

      <li className='mr-5'><NavLink to='/'>Home</NavLink></li>
      <li className='mr-5'><NavLink to='/myApplication'>Application</NavLink></li>
      <li className='mr-5'><NavLink to='/postjob'>Add Job</NavLink></li>
      <li className='mr-5'><NavLink to='/mypostjob'>My posted Jobs</NavLink></li>
    </>
  );
const handleSignOut =()=>{
  logout()
  .then(result=>{
    console.log('signout');
  })
  .catch(error=>{
    console.log(error);
})
}
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
    <div className='flex justify-center items-center'>
    <img src={logo} className="w-10 h-10" alt="" />
    <a className="btn btn-ghost text-xl">Job Protal</a>
    </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-5 flex">
          {
            user ?<> <button className="btn" onClick={handleSignOut}> Logout</button></>:<><Link to='/reg' className="text-black">Register</Link>
          <Link to='/login' className="btn">Sign In</Link></>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
