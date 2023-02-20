import React from 'react';

const HiringDetails = () => {
    return (
        <fieldset className='border-2 border-gray-400 px-5 py-2 rounded-md'>
            <legend className='font-serif'>Hiring Details</legend>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job Title*</span>
                    </label>
                    <input type="text" placeholder="ex. Jr fronted dev" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job Location*</span>
                    </label>
                    <input type="text" placeholder="ex. Remote,Hybrid,Onsite" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Experience Requirements*</span>
                    </label>
                    <input type="text" placeholder="Experience Requirements" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <input type="text" placeholder="Job Type" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Office Hour</span>
                    </label>
                    <input type="text" placeholder="9 AM to 5PM" className="input input-bordered w-full" />
                </div>
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Job Details*</span>
                </label>
                <textarea className='textarea textarea-bordered w-full '
                    placeholder='Job Details'
                ></textarea>
            </div>
        </fieldset>
    );
};

export default HiringDetails;