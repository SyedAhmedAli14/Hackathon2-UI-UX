import React from 'react';
import Input from '../payment/Input';
import MainHeader from '@/components/MainHeader';
import Heading from '@/components/mini/Heading';
import CompaniesSlider from '@/components/CompaniesSlider';

const FAQs = () => {
    return (
        <div className="w-full">
            <MainHeader title="FAQs" prev="Home . Pages . " current="FAQ" />
            <div className="w-full px-5 md:px-12 lg:px-40 grid gap-10 md:grid-cols-2">
                {/* General Information Section */}
                <div>
                    <Heading text="General Information" />
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                title: 'Eu dictumst cum at sed euismood condimentum?',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
                            },
                            {
                                title: 'Magna Bibendum est fermentum eros.',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
                            },
                            {
                                title: 'Elit id blandit sabara oboi velit gua maa.',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
                            },
                            {
                                title: 'Odio muskana hak eris conseekin sceleton',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
                            },
                        ].map(({ title, text }, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <h3 className="font-poppins text-xl font-semibold">{title}</h3>
                                <p className="font-poppins text-[#A1ABCC]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ask a Question Section */}
                <div className="flex flex-col gap-4 p-2 bg-[#F8F8FD] lg:p-14">
                    <h2 className="text-2xl font-bold text-center text-navyBlue font-poppins py-2">
                        Ask a Question
                    </h2>
                    <div className="grid w-full gap-5 py-5 grid-cols-2">
                        <Input placeholder="Your Name" span="2" v={2} />
                        <Input placeholder="Subject" span="2" v={2} />
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            className="w-full col-span-2 px-3 py-2 text-gray-700 bg-transparent border border-[#C5CBE3] placeholder:text-[#C5CBE3] outline-none"
                            placeholder="Type Your Message"
                        ></textarea>
                    </div>
                    <button className="px-8 py-3 text-white rounded-sm bg-pinkcolor font-poppins">
                        Send Message
                    </button>
                </div>
            </div>
            <CompaniesSlider />
        </div>
    );
};

export default FAQs;
