import React from 'react';

const EmployeeRow = () => {
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">Bangladesh</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold'>
                Marketing
            </td>
            <td>
                <select className='select -ml-4'>
                    <option value="1">
                        <span className="badge badge-ghost badge-lg">Intern</span>
                    </option>
                    <option value="2">
                        <span className="badge badge-ghost badge-lg">Contract</span>
                    </option>
                    <option value="3">
                        <span className="badge badge-ghost badge-lg">Permanent</span>
                    </option>
                </select>

            </td>
            <td>
                <button className='btn btn-sm -ml-1'>Remove</button>
            </td>
        </tr>
    );
};

export default EmployeeRow;