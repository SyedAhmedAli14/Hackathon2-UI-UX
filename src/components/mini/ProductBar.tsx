import Image from 'next/image'
import React from 'react'
import { ProductType } from './ProductCard'

const ProductBar = ({data}: {data: ProductType}) => {
  return (
    <div className='w-full py-2 h-[75px] bg-white flex justify-start items-center gap-3'>
      <div className='1/5 bg-skyBlue flex items-center justify-center'>
        <Image src={data.image} width={65} height={65} alt={data.title} />
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='font-semibold font-poppins text-officeblue'>{data.title}</h3>
        <p className='font-poppins text-officeblue line-through text-xs'>${data.price}</p>
      </div>
    </div>
  )
}

export default ProductBar
