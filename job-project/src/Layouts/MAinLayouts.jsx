import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber';
import Footer from '../Pages/Shared/Footer';

const MAinLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
       <div className='min-h-screen'>
       <Outlet></Outlet>
       </div>
            <Footer></Footer>
        </div>
    );
};

export default MAinLayouts;