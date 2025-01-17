import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'

const FeaturedPAhmed = () => {
  const products: ProductType[] = [{title: "Cantilever chair", image:'/prchair1.png', price: 32.00}, {title: "Cantilever chair", image:'/prchair2.png', price: 32.00}, {title: "Cantilever chair", image:'/prchair3.png', price: 32.00}, {title: "Cantilever chair", image:'/prchair4.png', price: 32.00}]
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
        <Heading text='Featured Products' />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10'>
          {products.map((product, index) => (
            <ProductCard key={index} data={product} designType='divisibleby4' />
          ))}
        </div>
    </div>
  )
}

export default FeaturedPAhmed
