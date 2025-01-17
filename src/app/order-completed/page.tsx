import Image from 'next/image'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import CompaniesSlider from '@/components/CompaniesSlider'
import MainHeader from '@/components/MainHeader'

const Ordercompletedhecto = () => {
  return (
    <>
      <div className="relative w-full">
        <MainHeader title="Order Completed" current="Order Completed" prev="Home . Pages . " />
        <div className="flex items-center justify-center w-full px-10 py-20 lg:px-40">
          <div className="flex flex-col items-center justify-center w-[625px] gap-8">
            <div className="flex items-center justify-center bg-[url('/tick.png')] rounded-full size-16">
              <GiCheckMark size={36} className="text-pinkcolor" />
            </div>
            <h1 className="text-4xl font-bold capitalize text-center text-navyBlue font-poppins">
              Your order is completed!
            </h1>
            <p className="text-center text-[#8D92A7] font-lato">
              Thank you for your order! Your order is being processed and will be completed within 3-6
              hours. You will receive an email confirmation when your order is completed.
            </p>
            <button className="px-8 py-3 text-white bg-pinkcolor rounded-md font-poppins">
              Continue Shopping
            </button>
          </div>
        </div>
        <Image
          src="/clocklogo.png"
          alt="clock"
          width={97}
          height={97}
          className="absolute hidden md:block md:scale-75 lg:scale-100 md:top-[350px] lg:top-[400px] md:left-[70px] left-[150px]"
        />
        <Image
          src="/checklistlogo.png"
          alt="checklist"
          width={72}
          height={72}
          className="absolute hidden md:block md:bottom-10 md:right-28 lg:right-47"
        />
      </div>
      <CompaniesSlider />
    </>
  )
}

export default Ordercompletedhecto
