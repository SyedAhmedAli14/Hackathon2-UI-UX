import Item from './Ctem';
import React from 'react';

const CartItemAdding = ({ image }: { image: string }) => {
    return (
        <tr>
            <td className='my-5'>
                <Item image={image} />
            </td>
            <td className='text-center font-semibold text-navyBlue font-poppins'>$32.00</td>
            <td className='pl-10'>
                <div className='w-20 grid grid-cols-4'>
                    <button className='text-gray-600 bg-gray-200'>+</button>
                    <input
                        type="text"
                        className='text-center bg-gray-200 font-normal text-gray-500 border-none outline-none font-poppins'
                        defaultValue={1}
                    />
                    <button className='bg-gray-200 text-gray-600'>-</button>
                </div>
            </td>
            <td className='font-semibold text-center text-navyBlue font-poppins'>$219.00</td>
        </tr>
    );
};

export default CartItemAdding;