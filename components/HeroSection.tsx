import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function HeroSection() {
  return (
    <div id="top" className="container">
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-[5rem] leading-[5rem] sm:text-[6rem] sm:leading-[6rem] md:text-[4rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem] 2xl:text-[6rem] 2xl:leading-[6rem] font-Ovo pt-[100px] md:pt-[100px] text-center">
            <span className="block font-Ovo bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
              Web
            </span>
            Design & Developer
          </h1>
          <p className="commpn-text mt-4 text-center">
            I am a Full-Stack Web Developer passionate about building dynamic,
            user-friendly, and scalable web applications. I collaborate with
            teams to create high-quality solutions that drive success.
          </p>
          <div className="flex gap-4 mt-8 items-center justify-center">
            <a
              href="/resume.pdf"
              download
              className="flex items-center bg-white text-black gap-2 px-5 py-3 rounded-full font-Outfit font-[300] text-base sm:text-lg md:text-xl border border-black group"
            >
              My resume{" "}
              <span className="group-hover:scale-125 transition-all ease-in duration-200">
                <HiDownload />
              </span>{" "}
            </a>

            <a
              href="#contact"
              className="flex items-center bg-gradient-to-r from-indigo-400 to-cyan-400 group text-white gap-2 px-5 py-3 rounded-full font-Outfit font-[300] text-base sm:text-lg md:text-xl"
            >
              Connect with me
              <span className="group-hover:scale-125 transition-all ease-in duration-200">
                <FaAngleDoubleRight />
              </span>
            </a>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16">
          <video
            className="rounded-lg border-[3px] md:border-[6px] border-blue-400 shadow-[0_-10px_30px_rgba(0,0,0,0.30)]"
            width="full"
            height="360"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
