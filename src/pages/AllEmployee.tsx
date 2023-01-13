import React from 'react';
import EmployeeRow from '../components/Employee/EmployeeRow';

const Employee = () => {
    return (
        <div className="overflow-x-auto w-full border-2 rounded p-5">
            <h1 className='text-[20px] font-bold pb-3'>Employees</h1>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow />

                </tbody>
            </table>
        </div>
    );
};

export default Employee;