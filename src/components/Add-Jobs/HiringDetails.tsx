import React from 'react';
import CreatableInput from './CreatableInput';

const HiringDetails = () => {
    return (
        <fieldset className='border-2 border-gray-400 px-5 py-2 rounded-md'>
            <legend className='font-serif'>Hiring Details</legend>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job Title*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="ex. Jr fronted dev"
                        className="input input-bordered w-full"
                        name='jobTitle'
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job Location*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="ex. Remote,Hybrid,Onsite"
                        className="input input-bordered w-full"
                        name='jobLocation'
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Experience Requirements*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Experience Requirements"
                        className="input input-bordered w-full"
                        name='experienceRequirements'
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <input type="text" placeholder="Job Type" className="input input-bordered w-full"
                        name='jobType'
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Office Hour</span>
                    </label>
                    <input type="text" placeholder="9 AM to 5PM" className="input input-bordered w-full"
                        name='officeHour'
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input type="text" placeholder="Salary Range" className="input input-bordered w-full"
                        name='salaryRange'
                    />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Job DeadLine</span>
                    </label>
                    <input type="text" placeholder="15th February, 2050" className="input input-bordered w-full"
                        name='jobDeadLine'
                    />
                </div>
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Job Details*</span>
                </label>
                <textarea className='textarea textarea-bordered w-full '
                    placeholder='Job Details'
                    name='jobDetails'
                ></textarea>
            </div>
            <CreatableInput />
        </fieldset>
    );
};

export default HiringDetails;