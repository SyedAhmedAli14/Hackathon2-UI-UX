import React from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'

const CategoriesAhmed = () => {
  const products: ProductType[] = [{title: "Chair", image:'/prchair1.png', price: 66.00}, {title: "Chair", image:'/prchair4.png', price: 66.00}, {title: "Chair", image:'/productforcategory.png', price: 66.00}, {title: "Chair", image:'/prchair5.png', price: 66.00}]
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
        <Heading text='Top Categories' />
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10'>
          {products.map((product, index) => (<ProductCard key={index} data={product} designType='productcategorydesign' />))}
        </div>
    </div>
  )
}

export default CategoriesAhmed
