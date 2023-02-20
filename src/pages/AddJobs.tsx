import React from 'react';
import CreatableInput from '../components/Add-Jobs/CreatableInput';
import HiringDetails from '../components/Add-Jobs/HiringDetails';

const AddJobs = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold font-serif'>Add Job</h1>
            <form>
                <HiringDetails />
                <CreatableInput />
            </form>
        </div>
    );
};

export default AddJobs;