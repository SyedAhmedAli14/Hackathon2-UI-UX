import Image from 'next/image';
import CompaniesSlider from '@/components/CompaniesSlider';
import MainHeader from '@/components/MainHeader';
import React from 'react';

const NotFound = () => {
    return (
        <div className="w-full">
            {/* Page Header */}
            <MainHeader title="404 Not Found" current="404 Not Found" prev="Home . Pages . " />

            {/* Content Section */}
            <div className="w-full h-full px-5 md:px-20 lg:px-40 py-20 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-y-5 text-center">
                    {/* Not Found Image */}
                    <Image 
                        src="/inprogress.png" 
                        width={900} 
                        height={620} 
                        alt="Not Found Image" 
                        className="max-w-full h-auto"
                    />

                    {/* Error Message */}
                    <p className="font-poppins font-bold text-officeblue text-xl md:text-2xl">
                        Oops! The page you requested was not found!
                    </p>

                    {/* Back to Home Button */}
                    <button className="bg-pinkcolor rounded-sm font-poppins px-6 py-2 md:px-8 md:py-3 text-white">
                        Back to Home
                    </button>
                </div>
            </div>

            {/* Companies Slider */}
            <CompaniesSlider />
        </div>
    );
};

export default NotFound;