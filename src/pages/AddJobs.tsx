import React from 'react';
import ApplicantDetails from '../components/Add-Jobs/ApplicantDetails';
import HiringDetails from '../components/Add-Jobs/HiringDetails';

const AddJobs = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    return (
        <div>
            <h1 className='text-2xl font-semibold font-serif'>Add Job</h1>
            <form
                onSubmit={handleSubmit}
            >
                <HiringDetails />
                <ApplicantDetails />
                <button className='btn my-3'>Add Job</button>
            </form>
        </div>
    );
};

export default AddJobs;