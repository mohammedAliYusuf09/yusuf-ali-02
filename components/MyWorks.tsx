import React from 'react'
import dentist_web from '@/public/dntistwebsite.png';
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
      title: 'Max martal dental website'
    }
    
  ]
  return (
    <div id='work' className='container'>
         <h4 className='font-Outfit text-xl text-center mt-[4rem] md:mt-[6rem]'>My portfolio</h4>
         <h2 className='font-Ovo text-4xl text-center mt-4 font-[500] '>My latest work</h2>
          <p className='commpn-text mt-4 text-center'>Welcome to my web development portfolio! Explore a collection of projects showcasing
          my expertise in front-end development.</p>
          <div className='flex gap-3 justify-center lg:justify-start py-8'>
            <button className='p-1 border border-gray-400 rounded hover:bg-gray-300 transition-all ease-in duration-200' >Web development</button>   
            <button disabled={true} className='p-1 border border-gray-400 rounded hover:bg-gray-300 transition-all ease-in duration-200 cursor-not-allowed' >Mobile development</button>
            <button disabled={true} className='p-1 border border-gray-400 rounded hover:bg-gray-300 transition-all ease-in duration-200 cursor-not-allowed' >Graphics design</button>   
          </div>
          <div className='grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {myWorkLis.map(item=> (
                <MyWorksComponent key={item.title} item={item}/>
              ))}
          </div>

    </div>
  )
}

export default MyWorks