import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CreatableInput = () => {
    return (
        <div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Responsibilities *You Can Select Multiple*</span>
                </label>
                <CreatableSelect
                    isMulti
                    placeholder='Responsibilities'
                />
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Requirements *You Can Select Multiple*</span>
                </label>
                <CreatableSelect
                    placeholder='Requirements'
                    isMulti
                />
            </div>
            <div className="form-control w-full mt-3">
                <label className="label">
                    <span className="label-text">Other facilities and benefits *You Can Select Multiple*</span>
                </label>
                <CreatableSelect
                    placeholder='Other facilities and benefits'
                    isMulti
                />
            </div>
        </div>
    );
};

export default CreatableInput;