import React, { JSX } from 'react'

interface AboutCartItem {
    icon: JSX.Element;
    title: string;
    description: string;
  }

interface AboutCartProps {
    item: AboutCartItem;
  }

function AboutCart({item} : AboutCartProps) {
  return (
    <div className='flex flex-col gap-3 md:gap-4 w-[12rem] border border-[#D8D8D8] p-4 hover:shadow-[5px_5px_3px_0px_rgba(0,0,0,0.75)] transition-all ease-out duration-300'>
        <span className='text-xl md:text-2xl hover:text-gray-600'>{item.icon}</span>
        <h4 className='text-lg md:text-xl font-Outfit font-[500] text-black'>{item.title}</h4>
        <p className='text-lg md:text-xl font-Outfit font-[300] text-gray-800'>{item.description}</p>
    </div>
  )
}

export default AboutCart