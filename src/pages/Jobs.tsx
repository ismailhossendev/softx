import React from 'react';
import OpenPositions from '../components/jobs/OpenPositions';

const Jobs = () => {
    return (
        <div className='bg-white px-40 md:px-20 p-0'>
            <div className="grid md:grid-cols-2 mt-20">
                <div className="md:p-10">
                    <h1 className='text-2xl font-bold'>SoftX, The Fastest Growing Software Company With 15 Years of Experience</h1>
                    <p className='my-2'>SoftX – Intelligent Business Operating System, the Leading Software Development Company in Bangladesh, is focused on bringing in the finest business solutions of the country that will make business automation more manageable than ever. We believe in young minds too who know how to put innovation and efficiency on the same page</p>
                </div>
                <div className="px-2  mb-2 md:p-10 max-h-[400px]">
                    <img className='h-full w-full object-cover rounded-md' src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            <OpenPositions />
        </div>
    );
};

export default Jobs;