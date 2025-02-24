import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface worklist {
    link: string,
    image: StaticImageData,
    title: string
  }

interface workCardProp {
    item: worklist;
}  

function MyWorksComponent({item}:workCardProp) {
  return (
    <a href={item.link} target="_blank" className='border border-gray-300 p-2 relative'>
        <Image src={item.image} alt={item.title} />
        <h4>{item.title}</h4>
    </a>
  )
}

export default MyWorksComponent