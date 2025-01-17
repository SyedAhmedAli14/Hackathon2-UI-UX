import React from 'react'
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { ProductType } from '@/components/mini/ProductCard';

const Sidebar = () => {
    const products: ProductType[] = [
        {
            title: "sit amet consectetur",
            price: 30.00,
            discountPrice: 50.00,
            image: "/prchair30.png"
        },
        {
            title: "vel elit eusim",
            price: 36.00,
            discountPrice: 40.00,
            image: "/prchair31.png"
        },
        {
            title: "sit amet consectetur",
            price: 30.00,
            discountPrice: 50.00,
            image: "/prchair34.png"
        },
        {
            title: "vel elit eusim",
            price: 42.00,
            discountPrice: 12.00,
            image: "/prchair33.png"
        }
    ]
    return (
        <div className='p-5 flex flex-col gap-5 md:col-span-3 lg:col-span-2'>
            <div>
                <h2 className='text-2xl py-4 text-navyBlue font-poppins font-semibold'>Search</h2>
                <div className='flex items-center justify-between px-3 py-2 rounded-sm border border-[#BDBDD8]'>
                    <input type="text" className='outline-none w-4/6 bg-transparent border-none placeholder:text-gray-300' placeholder='Search Posts' />
                    <button className='text-xl text-gray-300 bg-transparent'><BiSearch /></button>
                </div>
            </div>
            <div>
                <h2 className='text-2xl py-4 text-navyBlue font-semibold font-poppins'>Categories</h2>
                <div className='gap-2 grid grid-cols-2'>
                    {[0, 1, 2, 3, 4, 5].map((val) => {
                        return (
                            <span key={val} className='hover:text-white bg-white text-officeblue text-sm px-3 py-2 rounded-sm font-poppins hover:bg-pinkcolor'>Women (21)</span>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='py-4 text-2xl font-poppins font-semibold text-navyBlue'>Recent Posts</h2>
                <div className='flex flex-col gap-5'>
                    {['/blog1stpicture.png', '/blog1stpicture.png', '/blog2stpicture.png', '/blog3rdpicture.png'].map((val, index) => {
                        return (
                            <div key={index} className='w-full gap-4 flex items-center justify-start'>
                                <Image src={val} width={67} height={49} alt='blogg' />
                                <div className='flex flex-col'>
                                    <h3 className='text-sm text-navyBlue font-poppins'>It is a long established fact</h3>
                                    <p className='font-lato text-gray-400 text-[11px]'>Aug 09 2020</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='py-4 text-2xl font-poppins text-navyBlue font-semibold'>Sale Product</h2>
                <div className='flex flex-col gap-5'>
                    {products.slice(0, 3).map((product, index) => {
                        return (
                            <div key={index} className='w-full gap-4 flex items-center justify-start'>
                                <Image src={product.image} width={70} height={51} alt='product' />
                                <div className='flex flex-col'>
                                    <h3 className='text-sm text-navyBlue font-poppins'>{product.title}</h3>
                                    <p className='text-[11px] font-lato text-gray-400'>${product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='text-2xl py-4 font-poppins text-navyBlue font-semibold'>Offer Product</h2>
                <div className='gap-5 grid grid-cols-2'>
                    {products.slice(0, 7).map((product, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-2 justify-start items-center'>
                                <Image src={product.image} width={70} height={51} alt='product' />
                                <div className='flex flex-col'>
                                    <h3 className='text-navyBlue font-poppins'>{product.title}</h3>
                                    <p className='text-center font-lato text-sm text-gray-400'>${product.price} - ${product.discountPrice}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='py-4 text-2xl font-poppins font-semibold text-navyBlue'>Follow</h2>
                <div className='gap-2 flex items-center justify-start'>
                    <div className='size-6 text-white rounded-full bg-navyBlue flex items-center justify-center'>
                        <FaFacebookF />
                    </div>
                    <div className='size-6 text-white rounded-full bg-pinkcolor flex items-center justify-center'>
                        <FaInstagram />
                    </div>
                    <div className='size-6 text-white rounded-full bg-[#37DAF3] flex items-center justify-center'>
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='py-4 text-2xl font-poppins text-navyBlue font-semibold'>Tags</h2>
                <div className='grid grid-cols-3 gap-2'>
                    {[0, 1, 2, 3, 4, 5, 6].map((val) => {
                        return (
                            <span key={val} className='underline text-sm text-officeblue hover:text-pinkcolor font-poppins bg-white'>General</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
