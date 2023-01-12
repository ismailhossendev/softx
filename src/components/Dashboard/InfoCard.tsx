import React from 'react';

const InfoCard = ({ title, count, text }: { title: string, count: string, text: string }) => {
    return (
        <div className="card justify-center p-[33px] rounded bg-base-100 border-2 border-[#ECEEF7] h-[139px]">

            <h2 className="text-[16px] text-[#343434] font-bold">{title}</h2>
            <h2 className="text-[28px] text-[#232323] font-bold">{count}</h2>
            <p className='text-[#949494]'>{text}</p>
        </div>
    );
};

export default InfoCard;