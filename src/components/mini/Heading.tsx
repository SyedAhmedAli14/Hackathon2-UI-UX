import React from 'react'

const Heading = ({text, color = {primary: true, value :"officeblue"}}: {text: string, color?:{primary?:boolean, value?:string}}) => {
  const finalColor = color.primary ? `text-${color.value}` : `text-${color.value}-600`;
  return (

    <h2 className={`py-5 text-3xl lg:text-[40px] font-bold ${finalColor} font-poppins text-center`}>
      {text}
    </h2>
  )
}

export default Heading
