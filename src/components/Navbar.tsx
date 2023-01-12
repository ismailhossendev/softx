import React from 'react';
import { AiOutlineMenu, AiOutlineBell } from 'react-icons/ai'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border-b">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">SoftX</a>
                </div>

                <div className="navbar-end">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><AiOutlineMenu /></label>
                    <AiOutlineBell className='bg-[#E8E8E8] text-[30px] p-1 rounded text-[#898A8D] cursor-pointer lg:block hidden' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;