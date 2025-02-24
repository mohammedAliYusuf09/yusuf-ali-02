import Link from 'next/link';
import React, { JSX } from 'react'
import { FaArrowRight } from "react-icons/fa6";

interface AboutCartItem {
    icon: JSX.Element;
    title: string;
    description: string;
  }

interface AboutCartProps {
    cart: AboutCartItem;
  }

function ServicesCart({cart}: AboutCartProps) {
  function shortDes(str : string) : string{
    return str.split(' ').slice(0, 10).join(' ') +'...';
  }
  const description = shortDes(cart.description);
  return (
    <div className='flex flex-col gap-1 md:gap-2 border border-[#D8D8D8] p-4 group hover:bg-gray-800 transition-all ease-out duration-500'>
        <span className='text-xl md:text-2xl group-hover:text-white'>{cart.icon}</span>
        <h4 className='text-lg md:text-xl font-Outfit font-[500] text-black group-hover:text-white'>{cart.title}</h4>
        <p className='text-sm md:text-lg font-Outfit font-[300] text-gray-800 group-hover:text-gray-400'>{description}</p>
        <div>
        <Link className='flex items-center gap-1 group-hover:text-white' href={''} >Read more <span><FaArrowRight /></span></Link>
        </div>
    </div>
  )
}

export default ServicesCart