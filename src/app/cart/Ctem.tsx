import Image from 'next/image';
import React from 'react';

const Item = ({ image }: { image: string }) => {
    return (
        <div className='flex p-1 flex-col items-center gap-5 justify-start md:flex-row'>
            <Image src={image} width={80} height={85} alt='image' className='object-cover rounded-md' />
            <div className='flex flex-col'>
                <h2>Ut diam consequat</h2>
                <div className='flex items-center justify-start'>
                    <p className='hidden text-gray-400 md:block'>Color: </p>
                    <span className='font-semibold text-gray-400' title='color'>BLACK</span>
                </div>
                <div className='flex items-center justify-start'>
                    <p className='hidden text-gray-400 md:block'>Size: </p>
                    <span className='font-semibold text-gray-400' title='size'>XL</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
