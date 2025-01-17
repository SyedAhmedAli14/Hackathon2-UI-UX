import React from 'react'
import { BiComment, BiUser } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

const Comment = () => {
    return (
        <div className='my-10 w-full px-5'>
            <div className='gap-7 grid md:grid-cols-2'>
                <div className='py-2 px-3 flex gap-3 items-center border rounded-sm border-[#8A8FB9] justify-start'>
                    <BiUser className='text-gray-500' />
                    <input type="text" className='outline-none bg-transparent placeholder:text-[#8A8FB9] border-none' placeholder='Full Name' />
                </div>
                <div className='flex px-3 gap-3 py-2 items-center justify-start border border-[#8A8FB9] rounded-sm'>
                    <MdEmail className='text-gray-500' />
                    <input type="text" className='placeholder:text-[#8A8FB9] outline-none bg-transparent border-none' placeholder='Write your Email' />
                </div>
            </div>
            <div className='border mt-8 mb-4 py-3 px-3 flex gap-3 items-start justify-start border-[#8A8FB9] rounded-sm'>
                <BiComment className='text-gray-500' />
                <textarea className='resize-none w-full placeholder:text-[#8A8FB9] bg-transparent border-none outline-none' rows={5} placeholder='Write your Message' />
            </div>
            <button className='w-full my-10 text-lg bg-pinkcolor rounded-sm font-poppins text-white px-8 py-3'>Post Comment</button>
        </div>
    )
}

export default Comment
