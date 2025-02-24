import Image from 'next/image'
import React, { JSX } from 'react'
import myImage from '@/public/me.jpg';
import AboutCart from './AboutCart';
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { LuProjector } from "react-icons/lu";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";





function AboutMe() {

    interface AboutCartItem {
        icon: JSX.Element;
        title: string;
        description: string;
      }

    const aboutCartList: AboutCartItem[] = [
        {
          icon: <FaCode />,
          title: 'Languages',
          description: 'JavaScript, React Js, Tailwind css, Next Js, TypeScript',
        },
        {
          icon: <MdOutlineCastForEducation />,
          title: 'Education',
          description: 'Doing my history in Islamic history and culture',
        },
        {
          icon: <LuProjector />,
          title: 'Projects',
          description: 'Built more than 3 projects',
        },
      ];

  return (
    <div id='about' className='container'>
        <h4 className='font-Outfit text-xl text-center mt-[4rem] md:mt-[6rem]'>Introduction</h4>
        <h2 className='font-Ovo text-4xl text-center mt-4 font-[500]'>About me</h2>
        <div className='flex flex-col lg:flex-row gap-8 mt-[3rem]'>
            <div className=''>
            <Image className='border border-gray-400 rounded-md' src={myImage} alt='my image' width={700} height={860}/>
            </div>
            <div className=''>
                <p className='commpn-text mb-[1rem] lg:mb-[2rem]'>I am a Frontend Developer with over a year of professional experience, passionate about creating dynamic and user-friendly web applications. I have had the opportunity to contribute to meaningful projects and collaborate with teams to deliver high-quality solutions that drive success.</p>
                <div className='flex gap-4 justify-center lg:justify-start'>
                    {aboutCartList.map(item=> (
                        <AboutCart key={item.title} item={item}/>
                    ))}
                </div>
                <h4 className='light-text pt-2 lg:pt-4 mb-1 lg:mb-2 text-center lg:text-start'>Social media</h4>
                <div className='flex gap-3 justify-center lg:justify-start'>
                    <a className='p-3 border border-gray-400 rounded text-2xl hover:bg-gray-300 transition-all ease-in duration-200' target="_blank" href='https://github.com/mohammedAliYusuf09'><FaGithub /></a>   
                    <a className='p-3 border border-gray-400 rounded text-2xl hover:bg-gray-300 transition-all ease-in duration-200' target="_blank" href='https://www.linkedin.com/in/mohammad-yusuf-302819210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><IoLogoLinkedin/></a>
                    <a className='p-3 border border-gray-400 rounded text-2xl hover:bg-gray-300 transition-all ease-in duration-200' target="_blank" href='https://x.com/yusufAli1188?t=xl0WvWSsVnNoAjlODUxTgA&s=09'><FaSquareXTwitter /></a>   
                    <a className='p-3 border border-gray-400 rounded text-2xl hover:bg-gray-300 transition-all ease-in duration-200' target="_blank" href='https://www.threads.net/@yusuf_ali_0209'><FaSquareThreads /></a>   
                    <a className='p-3 border border-gray-400 rounded text-2xl hover:bg-gray-300 transition-all ease-in duration-200' target="_blank" href='https://www.instagram.com/yusuf_ali_0209?igsh=MWRjZjVsNmkzbGozag=='><FaInstagramSquare /></a>   
                    <a className='p-3 border border-gray-400 rounded text-2xl hover:bg-gray-300 transition-all ease-in duration-200' target="_blank" href='https://m.facebook.com/100093300349128/'><FaSquareFacebook /></a>   
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutMe