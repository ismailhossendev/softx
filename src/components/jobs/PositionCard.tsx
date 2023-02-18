import React from 'react';
import { Link } from 'react-router-dom';

const PositionCard = () => {
    return (
        <div className='h-[400px] rounded-3xl shadow-lg relative'>
            <div className="flex justify-center items-center flex-col h-1/2 bg-blue-400 rounded-3xl rounded-br-none">
                <div className="avatar mb-4">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='position logo' />
                    </div>
                </div>
                <h1 className='text-xl font-bold text-white'>Junior Front-end Developer</h1>
            </div>
            <div className="absolute h-20 w-20 bg-blue-400 right-0 z-10"></div>
            <div className="rounded-3xl z-50 h-1/2 bg-white absolute w-full p-5 flex justify-between flex-col">
                <div className="">
                    <p className='text-gray-600'>Location: Remote</p>
                    <p className='text-gray-600'>Job Description:
                        <span className='overflow-hidden'>
                            SoftX is looking for a Sr. Dot Net Developer to build software using languages ....
                        </span>
                    </p>
                </div>
                <Link to="/public/job/1" className='btn btn-primary bg-blue-400 border-0'>Apply</Link>
            </div>
        </div>
    );
};

export default PositionCard;