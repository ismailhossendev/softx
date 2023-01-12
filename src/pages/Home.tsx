import React from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  bg-[#F8FAFB] p-4">
                    <Outlet />


                </div>
                <div className="drawer-side shadow-lg ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <Aside />

                </div>
            </div>
        </div>
    );
};

export default Home;