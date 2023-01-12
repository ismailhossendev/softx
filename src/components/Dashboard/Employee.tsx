import React from 'react';
import EmployeeTd from './EmployeeTd';

const Employee = () => {
    return (
        <div className="overflow-x-auto w-full border-2 rounded p-5">
            <h1 className='text-[20px] font-bold pb-3'>Employee Status</h1>

            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeTd />
                    <EmployeeTd />
                    <EmployeeTd />

                </tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Employee;