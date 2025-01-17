import CompaniesSlider from '@/components/CompaniesSlider'
import MainHeader from '@/components/MainHeader'
import ProductCard, { ProductType } from '@/components/mini/ProductCard'
import Datahandler from '@/components/mini/Datahandler'
import React from 'react'


const ShopList = () => {
    const products: ProductType[] = [
        {
            title: "sit amet consectetur",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair31.png"
          },
          {
            title: "sit amet consectr",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair33.png"
          },
          {
            title: "vel elit eusim",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair32.png"
          },
          {
            title: "sed do eiusmod",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair34.png"
          },
          {
            title: "labore et dolore",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair36.png"
          },
          {
            title: "magna aliqua ut",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair37.png"
          },
          {
            title: "tempor incididunt ut",
            price: 26.00,
            discountPrice: 52.00,
            image: "/prchair35.png"
          },
    ]
    return (
        <>
            <MainHeader title='Shop List' prev='Home . Pages . Shop . ' current='Shop List' />

            <Datahandler/>
            <div className="px-5 md:px-10 lg:px-41 w-full py-10">
                {products.map((product, index) => (<ProductCard key={index} data={product} designType='BAR' showDots={true} />))}

            </div>
            <CompaniesSlider/>
        </>
    )
}

export default ShopList
