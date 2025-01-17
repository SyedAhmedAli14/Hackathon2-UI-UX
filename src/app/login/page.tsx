import MainHeader from '@/components/MainHeader'
import CompaniesSlider from '@/components/CompaniesSlider'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full">
      <MainHeader title="My Account" prev="Home . Pages . " current="My Account" />
      <div className="w-full flex justify-center items-center">
        <div className="my-28 p-10 md:w-[545px] flex flex-col shadow-sm shadow-gray-300 rounded-md">
          <div>
            <h3 className="text-center text-4xl font-bold text-black font-poppins">Login</h3>
            <p className="text-center text-gray-300 font-lato">Please login using account detail below.</p>
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 my-2 mt-4 border border-[#C2C5E1] text-navyBlue bg-transparent placeholder:text-[#C2C5E1] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 my-2 border border-[#C2C5E1] text-navyBlue bg-transparent placeholder:text-[#C2C5E1] outline-none"
          />
          <p className="text-left text-gray-400 font-lato">Forgot your password?</p>
          <button className="px-8 py-3 my-4 text-xl text-white bg-pinkcolor rounded-md font-poppins">Sign In</button>
          <p className="mt-5 text-center text-gray-300 font-lato">Don&apos;t have an account? Create One</p>
        </div>
      </div>
      <CompaniesSlider />
    </div>
  )
}

export default Login
