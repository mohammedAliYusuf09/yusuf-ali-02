import React, { JSX } from "react";
import { AiFillCode } from "react-icons/ai";
import { IoLogoDesignernews } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import Image from "next/image";
import Design from "@/public/servicess_svg/service_design.svg";
import Development from "@/public/servicess_svg/service_dev.svg";
import Deploy from "@/public/servicess_svg/service_deploy.svg";
import SEO from "@/public/servicess_svg/service_seo.svg";
import SUPPORT from "@/public/servicess_svg/service_active_support.svg";

function Services() {
  interface ServicesSection {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  const servicessCartList: ServicesSection[] = [
    {
      icon: <AiFillCode />,
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable websites and web applications using modern technologies like React, JavaScript, and Node.js.",
    },
    {
      icon: <IoLogoDesignernews />,
      title: "UI/UX Design",
      description:
        "Creating user-centered designs that are not only visually appealing but also intuitive and easy to navigate, ensuring a seamless user experience.",
    },
    {
      icon: <AiFillPicture />,
      title: "Graphics Design",
      description:
        "Designing eye-catching visuals, logos, and branding materials that communicate your brand’s identity and leave a lasting impression.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications with sleek designs and smooth functionality, ensuring a great user experience on both iOS and Android.",
    },
  ];
  return (
    <div id="services" className="container">
      <h4 className="font-Outfit text-xl text-center pt-6 bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent ">
        What i offer
      </h4>
      <h2 className="font-Ovo text-4xl text-center pt-4 font-[500] ">
        My Services
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-4  md:max-h-[450px] md:items-center md:justify-between py-2 sm:pt-[1rem] md:pt-[2rem]">
        <div className="w-full text-center md:w-[47%]">
          <h4 className="text-[1rem]">Website Design</h4>
          <p className="text-gray-800 font-light">
            Creating user-centered designs that are not only visually appealing
            but also intuitive and easy to navigate, ensuring a seamless user
            experience.
          </p>
        </div>

        <div className="w-[6%] hidden md:flex justify-center ">
          <h3 className="bg-blue-400 py-2 px-3 text-white rounded-full">1</h3>
        </div>

        <div className="w-full pt-2 sm:pt-4 md:pt-0 md:w-[47%] flex justify-center">
          <Image
            className="w-[300]"
            width={300}
            height={300}
            src={Design}
            alt="desin element"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:max-h-[450px] md:items-center md:justify-between py-2 sm:pt-[1rem] md:pt-[2rem]">

      <div className="w-full pt-2 sm:pt-4 md:pt-0 md:w-[47%] flex justify-center">
          <Image
            className="w-[300]"
            width={300}
            height={300}
            src={Development}
            alt="desin element"
          />
        </div>

        <div className="w-[6%] hidden justify-center md:flex">
          <h3 className="bg-blue-400 py-2 px-3 text-white rounded-full">2</h3>
        </div>

        <div className="w-full text-center md:w-[47%]">
          <h4 className="text-[1rem]">Web Development</h4>
          <p className="text-gray-800 font-light">
          Building fast, responsive, and scalable websites and web applications using modern technologies like React, JavaScript, and Node.js.
          </p>
        </div>

      </div>


      <div className="flex flex-col-reverse md:flex-row gap-4  md:max-h-[450px] md:items-center md:justify-between py-2">
        <div className="w-full text-center md:w-[47%]">
          <h4 className="text-[1rem]">Deploy</h4>
          <p className="text-gray-800 font-light">
          Take the hassle out of launching your website. I offer expert deployment services to ensure your portfolio or project goes live smoothly, efficiently, and reliably.
          </p>
        </div>

        <div className="w-[6%] hidden md:flex justify-center">
          <h3 className="bg-blue-400 py-2 px-3 text-white rounded-full">3</h3>
        </div>

        <div className="w-full pt-2 sm:pt-4 md:pt-0 md:w-[47%] flex justify-center">
          <Image
            className="w-[300]"
            width={300}
            height={300}
            src={Deploy}
            alt="desin element"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:max-h-[450px] md:items-center md:justify-between py-2 ">

      <div className="w-full pt-2 sm:pt-4 md:pt-0 md:w-[47%] flex justify-center">
          <Image
            className="w-[300]"
            width={300}
            height={300}
            src={SEO}
            alt="desin element"
          />
        </div>

        <div className="w-[6%] hidden justify-center md:flex">
          <h3 className="bg-blue-400 py-2 px-3 text-white rounded-full">4</h3>
        </div>

        <div className="w-full text-center md:w-[47%]">
          <h4 className="text-[1rem]">SEO Services to Elevate Your Online Presence</h4>
          <p className="text-gray-800 font-light">
          Want your website to get noticed? I offer comprehensive SEO services, from keyword research and on-page optimization to technical SEO and performance analysis, to help your portfolio rank higher and attract more opportunities. Let's make your online presence work for you.
          </p>
        </div>

      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4  md:max-h-[450px] md:items-center md:justify-between py-2">
        <div className="w-full text-center md:w-[47%]">
          <h4 className="text-[1rem]"> Dedicated Support & Ongoing Website Maintenance</h4>
          <p className="text-gray-800 font-light">
          Launching your website is just the beginning. I provide proactive support and ongoing maintenance to ensure your portfolio stays up-to-date, secure, and performing optimally. Count on me for timely assistance and continuous improvement.
          </p>
        </div>

        <div className="w-[6%] hidden md:flex justify-center">
          <h3 className="bg-blue-400 py-2 px-3 text-white rounded-full">5</h3>
        </div>

        <div className="w-full pt-2 sm:pt-4 md:pt-0 md:w-[47%] flex justify-center">
          <Image
            className="w-[300]"
            width={300}
            height={300}
            src={SUPPORT}
            alt="desin element"
          />
        </div>
      </div>

    </div>
  );
}

export default Services;
