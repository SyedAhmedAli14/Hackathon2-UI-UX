import MainHeader from '@/components/MainHeader';
import { MdContacts, MdLocationCity, MdSupportAgent } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import Input from '../payment/Input';
import Heading from '@/components/mini/Heading';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="w-full">
            {/* Page Header */}
            <MainHeader title="Contact Us" prev="Home . Pages . " current="Contact Us" />

            {/* Information and Contact Way Section */}
            <div className="grid items-start justify-between gap-10 py-10 px-5 md:px-10 lg:px-36 lg:grid-cols-2">
                {/* Information About Us */}
                <div className="flex flex-col items-start gap-4">
                    <Heading text="Information About Us" />
                    <p className="text-[#8A8FB9] font-lato">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. 
                        Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                    </p>
                    <div className="flex items-center justify-start gap-3 text-2xl">
                        <FaCircle color="#5625DF" />
                        <FaCircle color="#FF27B7" />
                        <FaCircle color="#37DAF3" />
                    </div>
                </div>

                {/* Contact Way */}
                <div className="flex flex-col items-start gap-4">
                    <Heading text="Contact Way" />
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Contact Options */}
                        <div className="flex items-center justify-start gap-3">
                            <div className="flex items-center justify-center text-white bg-[#5726DF] rounded-full text-2xl size-11">
                                <MdContacts />
                            </div>
                            <div className="flex flex-col gap-1 text-[#8A8FB9] font-lato">
                                <p>Tel: 877-67-88-99</p>
                                <p>Email: shop@store.com</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                            <div className="flex items-center justify-center text-white bg-pinkcolor rounded-full text-2xl size-11">
                                <MdSupportAgent />
                            </div>
                            <div className="flex flex-col gap-1 text-[#8A8FB9] font-lato">
                                <p>Support Forum</p>
                                <p>Over for 24 hours</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                            <div className="flex items-center justify-center text-[#a86f37] bg-[#FFB265] rounded-full text-2xl size-11">
                                <MdLocationCity />
                            </div>
                            <div className="flex flex-col gap-1 text-[#8A8FB9] font-lato">
                                <p>20 Margaret st, London</p>
                                <p>Great Britain, 3NM98-LK</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-3">
                            <div className="flex items-center justify-center text-white bg-[#1BE982] rounded-full text-2xl size-11">
                                <TbTruckDelivery />
                            </div>
                            <div className="flex flex-col gap-1 text-[#8A8FB9] font-lato">
                                <p>Free Standard Shipping</p>
                                <p>on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get in Touch Section */}
            <div className="grid items-center justify-between gap-10 py-10 px-5 md:px-10 lg:px-36 lg:grid-cols-2">
                <div className="flex flex-col items-start gap-4">
                    <Heading text="Get in Touch" />
                    <p className="text-[#8A8FB9] font-lato">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor 
                        los vitae lobortis quis bibendum quam.
                    </p>
                    <div className="grid grid-cols-2 gap-5 py-5">
                        <Input placeholder="Your Name" v={2} />
                        <Input placeholder="Your Email" v={2} />
                        <Input placeholder="Subject" span="2" v={2} />
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Type Your Message"
                            className="col-span-2 w-full px-3 py-2 text-gray-700 bg-transparent border border-[#C5CBE3] outline-none placeholder:text-[#C5CBE3]"
                        ></textarea>
                    </div>
                    <button className="px-8 py-3 text-white bg-pinkcolor rounded-sm font-poppins">
                        Send Message
                    </button>
                </div>
                <Image 
                    src="/contactdesktop.png" 
                    width={725} 
                    height={695} 
                    alt="Contact" 
                    className="hidden lg:w-full"
                />
            </div>
        </div>
    );
};

export default Contact;
