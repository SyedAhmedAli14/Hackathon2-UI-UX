import Image from 'next/image'
import React from 'react'

const CompaniesSlider= () => {
  return (
    <div className=" lg:px-20 py-20 flex justify-center items-center w-full px-5">
      <Image src={"/companiesslider.png"} width={903} height={92} alt="companies" className='w-full' />
    </div>
  )
}

export default CompaniesSlider
