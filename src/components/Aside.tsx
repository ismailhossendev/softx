import React from 'react';
import { RxDashboard, RxIdCard, RxEnvelopeOpen, RxPlusCircled, RxExit } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Aside = () => {
    const normalClass = "text-[29px] border p-1 rounded"

    return (
        <ul className="menu p-4 w-56 bg-base-100  text-gray-800">
            <div className="flex gap-4 items-center pl-3 mb-4">
                <div className="avatar online">
                    <div className="w-11 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt='' />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-500">
                        <span className="">HR Manager</span>
                    </p>
                </div>
            </div>
            <li><NavLink to="/" className='flex items-center'><RxDashboard className={normalClass} />Dashboard</NavLink></li>
            <li><NavLink to="/employee" className='flex items-center'><RxIdCard className={normalClass} />Employee</NavLink></li>
            <li><NavLink to="/application" className='flex items-center'><RxEnvelopeOpen className={normalClass} />Application</NavLink></li>
            <li><NavLink to="add-employee" className='flex items-center mb-5'><RxPlusCircled className={normalClass} />Add Employee</NavLink></li>
            <li className='border-t pt-5'><button className='btn btn-info'><RxExit className="text-[20px]" /> Log out</button></li>
        </ul>
    );
};

export default Aside;