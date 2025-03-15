import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function HeroSection() {
  return (
    <div id='top' className='container'>
        <div className='flex w-full'>
            <div className='w-full md:w-[70%]'>
                <h1 className='text-[5rem] leading-[5rem] sm:text-[8rem] sm:leading-[7rem] md:text-[9rem] lg:text-[9rem] 2xl:text-[10rem] font-Ovo   md:leading-[10rem] pt-[100px] md:pt-[100px]'>Fontend Developer</h1>
                <p className='commpn-text mt-4'>I am a front-end developer from Bangladesh who has been working as a freelancer for two years. I help startups and business owners make an online presence through web development.</p>
                <div className='flex gap-4 mt-8'>
                  <a href='#contact' className='flex items-center bg-black text-white gap-2 px-5 py-3 rounded-full font-Outfit font-[300] text-base sm:text-lg md:text-xl'>Connect with me<span><FaAngleDoubleRight /></span></a>
                  <a href='/resume.pdf' download className='flex items-center bg-white text-black gap-2 px-5 py-3 rounded-full font-Outfit font-[300] text-base sm:text-lg md:text-xl border border-black'  >My resume <span><HiDownload /></span> </a>
                </div>
            </div>                                                                                                      
            <video className='hidden lg:flex w-full h-[200px] mt-[100px] shadow-sm' width="full" height="360" autoPlay loop muted playsInline> 
                <source src="/video/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection