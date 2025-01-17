import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPenNib } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';

export interface BlogContent {
    title: string;
    image: string;
    content: string;
    date: string;
}

const BlogDisplay = ({ size = 'MINI', data }: { size?: 'MINI' | 'LARGE'; data: BlogContent }) => {
    return (
        <div className='w-full flex flex-col rounded-md group'>
            <Image
                src={data.image}
                width={size === 'MINI' ? 375 : 872}
                height={size === 'MINI' ? 256 : 542}
                alt={`Blog image for ${data.title}`}
                className={`rounded-md object-cover ${size === 'MINI' ? 'h-1/2' : 'h-2/3'}`}
            />
            <div className='flex flex-col py-4 px-2 items-start gap-3'>
                <div className='flex justify-start gap-4'>
                    <div className='flex items-center gap-1'>
                        <FaPenNib className='text-pinkcolor size-3' />
                        <p className={`font-poppins text-navyBlue text-sm ${size === 'MINI' ? 'bg-white' : 'bg-pinkcolor/20'}`}>
                            Saber Ali
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <SlCalender className='text-[#FFA454] size-3' />
                        <p className={`font-poppins text-navyBlue text-sm ${size === 'MINI' ? 'bg-white' : 'bg-pinkcolor/20'}`}>
                            {data.date}
                        </p>
                    </div>
                </div>
                <h4
                    className={`font-poppins font-bold text-navyBlue ${
                        size === 'MINI' ? 'group-hover:text-red text-lg' : 'text-3xl'
                    }`}
                >
                    {data.title}
                </h4>
                <p className='font-normal font-lato text-[#72718F] '>{data.content}</p>
                <Link href='/blog/1'>
                    <button className='bg-white text-navyBlue underline font-lato font-normal hover:text-black group-hover:text-pinkcolor'>
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogDisplay;
