import Heading from '@/components/mini/Heading'
import Image from 'next/image'
import React from 'react'
import ServiceCard from '@/components/mini/ServiceCard'
import MainHeader from '@/components/MainHeader'
const AboutPage = () => {
    return (
        <div className='w-full'>
            <MainHeader title='About Us' prev='Home . Pages . ' current='About Us' />
            <div className='w-full py-20 px-5 md:px-10 lg:px-40'>
                <div className='flex flex-col items-center justify-center lg:flex-row gap-5'>
                    <div className='hidden h-[370px] w-[570px] lg:block bg-navyBlue border border-gray-300 rounded-md relative'>
                        <Image src={"/showcast.png"} width={540} height={370} className='absolute w-1/2 lg:w-full rounded-md -top-1 -right-4' alt='about' />
                    </div>
                    <Image src={"/showcast.png"} width={540} height={370} className='block lg:hidden rounded-md' alt='about' />
                    <div className='w-full md:w-[550px] flex flex-col md:pl-10 items-start justify-start'>
                        <h1 className='py-3 font-bold text-3xl text-navyBlue font-poppins'>Know about our Ecommerce Business History!</h1>
                        <p className='font-lato text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <div className='flex items-center py-10 justify-start'>
                            <button className='py-3 font-poppins bg-pinkcolor text-white rounded-sm px-8'>Contact Us</button>
                        </div>
                    </div>
                </div>

                <div className='py-20'>
                    <Heading text='Our Features' color={{ primary: false, value: 'black' }} />
                    <div className='py-10 grid gap-10 md:grid-cols-3 lg:grid-cols-4'>
                        <ServiceCard title='Free Delivery' image='/free-delivery.png' />
                        <ServiceCard title='Return & Refund' image='/cashbacklogo.png' />
                        <ServiceCard title='Premium Quality' image='/quality.png' />
                        <ServiceCard title='24/7 Support' image='/support.png' />
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#FBFBFF] py-20 px-5 lg:px-40'>
                <Heading text='Our Client Say!' color={{ primary: false, value: 'black' }} />
                <div className='py-10 flex flex-col items-center justify-center'>
                    <div className='flex items-center gap-2 justify-center'>
                        <Image src={'/holo.png'} width={45} height={52} className='rounded-md' alt='user' />
                        <Image src={'/client2.png'} width={50} height={56} className='rounded-md mb-1' alt='user' />
                        <Image src={'/client3.png'} width={45} height={52} className='rounded-md' alt='user' />
                    </div>
                    <div className='py-5'>
                        <p className='text-2xl text-black font-lato font-semibold'>Selina Gomezi</p>
                        <p className='text-center text-gray-400 text-[10px]'>CEO at Webaccy Digital</p>
                    </div>
                    <p className='w-full md:w-[690px] text-center font-lato font-bold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <div className='w-5 bg-pinkcolor h-1 rounded-md'></div>
                    <div className='w-7 bg-pinkcolor h-1 rounded-md'></div>
                    <div className='w-5 bg-pinkcolor h-1 rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
