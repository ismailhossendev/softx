import React from 'react';
import PositionCard from './PositionCard';

const OpenPositions = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>Open Positions</h1>
            <h3 className='font-semibold text-gray-600 text-center'>3 Position Opens</h3>
            <div className="py-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    <PositionCard />
                    <PositionCard />
                    <PositionCard />
                    <PositionCard />
                </div>
            </div>
        </div>
    );
};

export default OpenPositions;