import React from 'react'
import dentist_web from '@/public/dntistwebsite.png';
import byte from '@/public/byet.png';
import { StaticImageData } from 'next/image';
import MyWorksComponent from './MyWorksComponent';

function MyWorks() {

  interface worklist {
    link: string,
    image: StaticImageData,
    title: string
  }

  const myWorkLis : worklist[] =  [
    {
      link: 'https://max-martel-ali.vercel.app/',
      image: dentist_web,
      title: 'Dental Website'
    },
    {
      link: 'https://bite-byte-becipe.vercel.app/',
      image: byte,
      title: 'Recipe App'
    },
    
  ]
  return (
    <div id='work' className='container'>
        <h4 className="font-Outfit text-xl text-center pt-6 bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent ">
        My portfolio
      </h4>
         <h2 className='font-Ovo text-4xl text-center mt-4 font-[500] '>My latest work</h2>
          <p className='commpn-text mt-4 text-center'>I handle the complete deployment process—ensuring your website is securely hosted, performance-optimized, and fully accessible to your audience across all devices and platforms</p>
          <div className='grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6'>
              {myWorkLis.map(item=> (
                <MyWorksComponent key={item.title} item={item}/>
              ))}
          </div>

    </div>
  )
}

export default MyWorks