
import { FaFacebookF, FaTwitter ,FaInstagram, FaPenNib} from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import Sidebar from '../Sidebar'
import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
import React from 'react'
import PRDesignSimple from '@/components/mini/PRDesignSimple'
import NavigationAhmed from './NavigationAhmed'
import POSTBAR from './POSTBAR'
import Comment from './Comment'
import CompaniesSlider from '@/components/CompaniesSlider'

const SingleBlog = () => {
    return (
        <div className='w-full'>
            <MainHeader title='Single Blog' prev='Home . Pages . ' current='Single Blog' />
            <div className='gap-10 w-full px-5 py-20 lg:px-40 grid md:grid-cols-7'>
                <div className='col-span-full lg:col-span-5'>
                    <Image src={"/blog4thpicture.png"} width={870} height={543} alt='blog' className='rounded-md object-cover' />
                    <div className='gap-3 px-2 py-4 flex flex-col items-start'>
                        <div className='gap-4 flex justify-start'>
                            <div className="flex gap-1 items-center justify-start">
                                <FaPenNib className='size-2 text-pinkcolor' />
                                <p className='font-poppins text-navyBlue text-sm bg-pinkcolor/20'>Surf Auxion</p>
                            </div>
                            <div className="flex gap-1 items-center justify-start">
                                <SlCalender className='size-2 text-[#FFA454]' />
                                <p className='font-poppins text-navyBlue text-sm bg-pinkcolor/20'>August-09-2024</p>
                            </div>
                        </div>

                        <h4 className='text-3xl font-bold text-navyBlue font-poppins'>Top essential Trends in 2024</h4>
                        <div className='font-normal font-lato text-[#8A8FB9]'>
                            <p>More off this less hello samlande lied much over tightly circa horse taped mightly Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod necessitatibus aliquam obcaecati consequatur! Repellat odio unde natus possimus enim quibusdam perferendis, temporibus numquam, sapiente suscipit dolorem blanditiis quidem dicta vel dolor laborum nesciunt necessitatibus ipsa soluta hic molestias impedit facilis libero? Laborum vitae eius obcaecati.</p>
                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam impedit cupiditate! Porro praesentium ipsam modi impedit consequatur laboriosam nobis culpa repellendus et? Aut nobis numquam, sed dolorum amet deleniti.</p>
                            <blockquote className='p-2 my-5 bg-[#FAFAFB] border-l-2 border-red text-gray-500 leading-8'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo iusto sapiente voluptates minima quaerat ipsum aut earum maxime amet deserunt obcaecati cum id reiciendis.
                            </blockquote>
                            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam necessitatibus sapiente ducimus labore tenetur quasi harum, sed rem quidem perspiciatis exercitationem in ab aliquid? Praesentium totam beatae molestiae consequuntur.</p>

                            <div className='grid items-center gap-1 md:grid-cols-3 lg:grid-cols-4'>
                                <PRDesignSimple image='/prchair1.png' version={2} />
                                <PRDesignSimple image='/prchair2.png' version={2} />
                                <PRDesignSimple image='/prchair3.png' version={2} />
                                <PRDesignSimple image='/prchair4.png' version={2} />
                            </div>

                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam impedit cupiditate! Porro praesentium ipsam modi impedit consequatur laboriosam nobis culpa repellendus et? Aut nobis numquam, sed dolorum amet deleniti.</p>
                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam impedit cupiditate! Porro praesentium ipsam modi impedit consequatur laboriosam nobis culpa repellendus et? Aut nobis numquam, sed dolorum amet deleniti.</p>
                        </div>
                        <div className='gap-2 flex justify-center w-full py-20 items-center'>
                            <div className='size-7 flex items-center justify-center bg-navyBlue rounded-full text-white'>
                                <FaFacebookF />
                            </div>
                            <div className='size-7 flex items-center justify-center bg-pinkcolor rounded-full text-white'>
                                <FaInstagram />
                            </div>
                            <div className='size-7 flex items-center justify-center bg-[#37DAF3] rounded-full text-white'>
                                <FaTwitter />
                            </div>
                        </div>
                    </div>

                    <NavigationAhmed />

                    <div className='flex flex-col gap-4 my-20 w-full'>
                        <POSTBAR />
                        <POSTBAR />
                    </div>
                    <Comment />
                </div>
                <Sidebar />
            </div>
            <CompaniesSlider />
        </div>
    )
}

export default SingleBlog