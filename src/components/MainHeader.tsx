import React from 'react'

const MainHeader = ({ title, prev, current }: { title: string, prev: string, current: string }) => {
    return (
        <div className='w-full h-[286px] px-8 lg:px-40 flex justify-start items-center bg-skyBlue'>
            <div className='flex flex-col items-start'>
                <h1 className='font-bold font-poppins text-4xl text-officeblue'>{title}</h1>
                <p className='font-lato font-medium text-black'>{prev}<span className='text-pinkcolor'>{current}</span></p>
            </div>
        </div>
    )
}

export default MainHeader
