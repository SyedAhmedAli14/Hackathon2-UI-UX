import CompaniesSlider from '@/components/CompaniesSlider'
import MainHeader from '@/components/MainHeader'
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import Datahandler from '@/components/mini/Datahandler'
import React from 'react'

const ShopGrid = () => {
  const products: ProductType[] = [
    {
      title: "sit amet consectetur",
      price: 31.00,
      discountPrice: 52.00,
      image: "/prchair18.png"
    },
    {
      title: "vel elit eusim",
      price: 26.00,
      discountPrice: 42.00,
      image: "/prchair19.png"
    },
    {
      title: "sit amet consectetur",
      price: 31.00,
      discountPrice: 52.00,
      image: "/prchair20.png"
    },
    {
      title: "sed do eiusmod",
      price: 23.00,
      discountPrice: 39.00,
      image: "/prchair21.png"
    },
    {
      title: "tempor incididunt ut",
      price: 28.00,
      discountPrice: 49.00,
      image: "/prchair22.png"
    },
    {
      title: "labore et dolore",
      price: 32.00,
      discountPrice: 55.00,
      image: "/prchair23.png"
    },
    {
      title: "magna aliqua ut",
      price: 29.00,
      discountPrice: 53.00,
      image: "/prchair24.png"
    },
    {
      title: "enim ad minim",
      price: 22.00,
      discountPrice: 37.00,
      image: "/prchair25.png"
    },
    {
      title: "veniam quis nostrud",
      price: 30.00,
      discountPrice: 57.00,
      image: "/prchair26.png"
    },
    {
      title: "exercitation ullamco laboris",
      price: 24.00,
      discountPrice: 40.00,
      image: "/prchair27.png"
    },
    {
      title: "nisi ut aliquip",
      price: 27.00,
      discountPrice: 48.00,
      image: "/prchair28.png"
    },
    {
      title: "ex ea commodo",
      price: 25.00,
      discountPrice: 44.00,
      image: "/prchair29.png"
    }
  ]
  return (
    <>
      <MainHeader title='Shop Grid Default' prev='Home . Pages . ' current='Shop Grid Default' />
       <Datahandler />

      <div className="px-5 md:px-10 lg:px-40 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-10 py-10">
        {products.map((product, index) => (<ProductCard key={index} data={product} designType='normalby1' />))}
      </div>
        <CompaniesSlider/>
    </>
  )
}

export default ShopGrid
