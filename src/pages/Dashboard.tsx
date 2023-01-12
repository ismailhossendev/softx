
import React from 'react';
import Employee from '../components/Dashboard/Employee';
import InfoCard from '../components/Dashboard/InfoCard';

const Dashboard = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-4">
                <InfoCard
                    title="Total Employees"
                    count="100"
                    text="Employees"
                />
                <InfoCard
                    title="Job View"
                    count="5"
                    text="Jobs"
                />
                <InfoCard
                    title="Applicants Candidates"
                    count="100"
                    text="Applicants"
                />
                <InfoCard
                    title="Total Employees"
                    count="100"
                    text="Employees"
                />

            </div>
            <div className=" mt-5">
                <Employee />
            </div>
        </div>
    );
};

export default Dashboard;