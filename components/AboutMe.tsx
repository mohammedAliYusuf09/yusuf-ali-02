import Image from "next/image";
import React, { JSX } from "react";
import AboutCart from "./AboutCart";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { LuProjector } from "react-icons/lu";
import MyImage from "@/public/me.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import SoftSkill from "./about-components/SoftSkill";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbSeo } from "react-icons/tb";

function AboutMe() {
  interface AboutCartItem {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  const aboutCartList: AboutCartItem[] = [
    {
      icon: <FaCode />,
      title: "Languages",
      description: "JavaScript, React Js, Tailwind css, Next Js, TypeScript",
    },
    {
      icon: <MdOutlineCastForEducation />,
      title: "Education",
      description: "Doing my history in Islamic history and culture",
    },
    {
      icon: <LuProjector />,
      title: "Projects",
      description: "Built more than 3 projects",
    },
  ];

  return (
    <div className="bg-sky-100 mt-[3rem]">
      <div id="about" className="container">
        <h4 className="font-Outfit text-xl text-center pt-6 bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent ">
          Introduction
        </h4>
        <h2 className="font-Ovo text-4xl text-center pt-4 font-[500] ">
          About me
        </h2>
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 py-[2rem]">
          <div className="md:w-[30%]">
            <div className="bg-gray-300 rounded-3xl flex items-center justify-center animate-pulse-shadow">
              <Image width={200} src={MyImage} alt="My Image" />
            </div>
          </div>
          <div className="md:w-[70%] flex flex-col gap-3">
            <h3 className="text-xl flex gap-2">
              My Name Is
              <span className="font-Ovo font-bold bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
                Yusuf Ali
              </span>
            </h3>

            <p className="text-gray-700">Frelance Designer and Developer</p>
            <p className="text-gray-700">
              I am a Frontend Developer with over a year of professional
              experience, passionate about creating dynamic and user-friendly
              web applications. I have had the opportunity to contribute to
              meaningful projects and collaborate with teams to deliver
              high-quality solutions that drive success.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="">
                <h6 className="text-gray-900 text-md md:text-lg">AGE</h6>
                <p className="text-gray-600 text-base md:text-md">23 YEARS</p>
              </div>
              <div className="">
                <h6 className="text-gray-900 text-md md:text-lg">LEVEIN</h6>
                <p className="text-gray-600 text-base md:text-md">SYLHET</p>
              </div>
              <div className="">
                <h6 className="text-gray-900 text-md md:text-lg">PHONE</h6>
                <p className="text-gray-600 text-base md:text-md">
                  +8801868211239
                </p>
              </div>
              <div className="">
                <h6 className="text-gray-900 text-md md:text-lg">EMAIL</h6>
                <p className="text-gray-600 text-base md:text-md">
                  my9689438@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <a
                target="_blank"
                href="https://github.com/mohammedAliYusuf09"
                className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 hover:text-blue-500 transition-colors ease-out duration-200"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 hover:text-blue-500 transition-colors ease-out duration-200"
              >
                <IoLogoLinkedin />
              </a>
              <a
                target="_blank"
                href="https://x.com/yusufAli1188?t=xl0WvWSsVnNoAjlODUxTgA&s=09"
                className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 hover:text-blue-500 transition-colors ease-out duration-200"
              >
                <FaSquareXTwitter />
              </a>
              <a
                target="_blank"
                href="https://www.threads.net/@yusuf_ali_0209"
                className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 hover:text-blue-500 transition-colors ease-out duration-200"
              >
                <FaSquareThreads />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/yusuf_ali_0209?igsh=MWRjZjVsNmkzbGozag=="
                className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 hover:text-blue-500 transition-colors ease-out duration-200"
              >
                <FaInstagramSquare />
              </a>
              <a
                target="_blank"
                href="https://m.facebook.com/100093300349128/"
                className="p-2 border border-gray-300 rounded-sm cursor-pointer hover:bg-gray-200 hover:text-blue-500 transition-colors ease-out duration-200"
              >
                <FaSquareFacebook />
              </a>
            </div>
          </div>
        </div>

        <h4 className="font-Outfit text-xl text-center pt-4 text-gray-700">
          My Soft Skills
        </h4>
        <div className="py-[1.3rem] flex gap-2 items-center justify-center  flex-wrap">
          <SoftSkill icon={<IoLogoFigma />} title={"Figma"} />
          <SoftSkill icon={<RiReactjsLine />} title={"React"} />
          <SoftSkill icon={<RiNextjsFill />} title={"Next.js"} />
          <SoftSkill icon={<SiTypescript />} title={"Typescript"} />
          <SoftSkill icon={<TbBrandNodejs />} title={"Node.js"} />
          <SoftSkill icon={<SiExpress />} title={"Express"} />
          <SoftSkill icon={<SiMongodb />} title={"Monngo DB"} />
          <SoftSkill icon={<TbSeo />} title={"SEO"} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
