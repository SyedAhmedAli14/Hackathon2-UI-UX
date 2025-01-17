import CompaniesSlider from '@/components/CompaniesSlider'
import MainHeader from '@/components/MainHeader'
import { FaArrowRight, FaCircle, FaHeart, FaStar } from 'react-icons/fa'
import PRDesignSimple from '@/components/mini/PRDesignSimple'
import Image from 'next/image'
import React from 'react'

const ProductDetail = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <MainHeader title="Product Details" current="Product Details" prev="Home . Pages . " />

      {/* Product Details Section */}
      <div className="w-full px-5 py-20 lg:px-56">
        <div className="grid gap-3 rounded-md shadow-lg shadow-gray-200 grid-cols-3 md:grid-cols-7">
          {/* Product Thumbnails */}
          <div className="flex flex-col gap-2">
            <Image src="/productMain39.png" width={149} height={153} alt="product1" />
            <Image src="/productMain40.png" width={149} height={153} alt="product2" />
            <Image src="/productMain41.png" width={149} height={153} alt="product3" />
          </div>

          {/* Main Product Image */}
          <div className="flex items-center justify-center col-span-2 bg-skyBlue">
            <Image src="/productMain38.png" width={370} height={483} alt="product1" />
          </div>

          {/* Product Information */}
          <div className="flex flex-col gap-3 p-5 col-span-4">
            <h2 className="text-4xl font-semibold capitalize text-[#0D134E] font-poppins">Playwood Arm Chair</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#FFC416]" />
                ))}
                <p className="text-sm text-black font-poppins">(22)</p>
              </div>
            </div>
            <p className="flex items-center gap-3 text-navyBlue font-poppins">
              $32.00 <span className="line-through text-red">$34.00</span>
            </p>
            <p className="text-navyBlue font-semibold font-poppins">Color:</p>
            <p className="text-gray-400 font-semibold font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2 font-semibold text-navyBlue bg-white rounded-md hover:bg-navyBlue hover:text-white">
                Add to Cart
              </button>
              <button className="px-6 py-2 font-semibold text-navyBlue bg-white rounded-md hover:bg-pinkcolor hover:text-white">
                <FaHeart />
              </button>
            </div>
            <p className="font-semibold text-navyBlue font-poppins">Categories:</p>
            <p className="font-semibold text-navyBlue font-poppins">Tags:</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full px-5 py-10 bg-skyBlue md:px-10 lg:px-40">
        <div className="flex flex-wrap items-center gap-3 md:gap-7 lg:gap-20">
          {["Description", "Additional Info", "Reviews", "Video"].map((item, index) => (
            <h3
              key={index}
              className={`text-2xl font-semibold font-poppins ${
                item === "Description" ? "underline" : ""
              } text-[#0D134E]`}
            >
              {item}
            </h3>
          ))}
        </div>
        <div className="py-5">
          <h2 className="py-3 text-2xl font-semibold text-[#0D134E] font-poppins">Lorem, ipsum.</h2>
          <p className="text-gray-500">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
            habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
            elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
            justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.
          </p>
          <h2 className="py-3 text-2xl font-semibold text-[#0D134E] font-poppins">More Details</h2>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <FaArrowRight size={15} className="text-gray-700 hover:text-navyBlue" />
              <p className="text-gray-400">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="w-full px-5 py-10 bg-white lg:px-40">
        <h1 className="py-10 pb-20 text-4xl font-semibold text-navyBlue font-poppins">Related Products</h1>
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {["/imagestylishboy.png", "/imageofgirlthinking.png", "/imagegirl1.png", "/imagegirl2.png"].map((img, index) => (
            <PRDesignSimple key={index} image={img} />
          ))}
        </div>
      </div>

      {/* Companies Slider */}
      <CompaniesSlider />
    </div>
  )
}

export default ProductDetail
