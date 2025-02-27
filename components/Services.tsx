import React, { JSX } from 'react'
import { AiFillCode } from "react-icons/ai";
import { IoLogoDesignernews } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import ServicesCart from './ServicesCart';





function Services() {

    interface ServicesSection {
        icon: JSX.Element;
        title: string;
        description: string;
      }
    
      const servicessCartList: ServicesSection[] = [
        {
          icon: <AiFillCode />,
          title: 'Web Development',
          description: 'Building fast, responsive, and scalable websites and web applications using modern technologies like React, JavaScript, and Node.js.',
        },
        {
          icon: <IoLogoDesignernews />,
          title: 'UI/UX Design',
          description: 'Creating user-centered designs that are not only visually appealing but also intuitive and easy to navigate, ensuring a seamless user experience.',
        },
        {
          icon: <AiFillPicture />,
          title: 'Graphics Design',
          description: 'Designing eye-catching visuals, logos, and branding materials that communicate your brand’s identity and leave a lasting impression.',
        },
        {
          icon: <FaMobileAlt />,
          title: 'Mobile App Development',
          description: 'Developing cross-platform mobile applications with sleek designs and smooth functionality, ensuring a great user experience on both iOS and Android.',
        },
      ];
  return (
    <div id='services' className='container'>
        <h4 className='font-Outfit text-xl text-center mt-[4rem] md:mt-[6rem]'>What i offer</h4>
        <h2 className='font-Ovo text-4xl text-center mt-4 font-[500]'>My services</h2>
        <div className='flex flex-col lg:flex-row gap-6 min-h-[30rem] my-[1rem] lg:my-[2rem]'>
            <div className='lg:w-[50%] flex items-center'>
                <div>
                    <div className='p-4 border border-gray-300 flex flex-col gap-4'>
                  <h2 className='text-3xl'>What i have to offer</h2>
                    <p className='light-text'>I am a passionate frontend developer from Dhaka, Bangladesh, with 1 year of hands-on experience in building dynamic and responsive web applications.</p>  
                </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:w-[50%] gap-4'>
                {servicessCartList.map(cart=> (
                    <ServicesCart key={cart.title} cart={cart}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
