import React from 'react';
import CreatableSelect from 'react-select/creatable';

const ApplicantDetails = () => {
    return (
        <fieldset
            className='border-2 border-gray-400 rounded-md p-4 mt-4'
        >
            <legend>Applicant Details</legend>

            <div className="">
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Required Applicant details </span>
                        <span>Ex- Name,Education and other required information</span>
                    </label>
                    <CreatableSelect
                        placeholder='Required Applicant details'
                        isMulti
                        name='requiredApplicantDetails'
                    />
                </div>
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Optional Applicant details </span>
                    </label>
                    <CreatableSelect
                        placeholder='Optional Applicant details'
                        isMulti
                        name='optionalApplicantDetails'
                    />
                </div>
            </div>
        </fieldset>
    );
};

export default ApplicantDetails;