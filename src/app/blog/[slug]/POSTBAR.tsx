import Image from 'next/image'
import React from 'react'

const POSTBAR = () => {
    return (
        <div className='w-full p-5 rounded-md shadow-md shadow-gray-300 flex flex-col md:flex-row justify-start items-center gap-2'>
            <Image src={"/girl.png"} width={93} height={100} alt='blog-user' className='rounded-md w-full md:w-auto' />
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between md:justify-start items-center gap-3'>
                    <h1 className='font-semibold text-lg font-poppins'>Sapian ac</h1>
                    <p className='text-[#8A8FB9] text-sm font-lato'>Jan 09 2021</p>
                </div>
                <p className='text-[#8A8FB9] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
            </div>
        </div>
    )
}

export default POSTBAR
