'use client';
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { useRef } from "react";
import { motion } from 'framer-motion';



function Header() {

  const sideMenuRef =  useRef<HTMLUListElement>(null);


  const openMenu = () => {
    if(sideMenuRef.current){
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  }

  const closeMenu = () => {
    // Check if sideMenuRef.current exists before accessing its properties
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  return (
    <motion.div 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, duration: 2000 }}
    className="w-full fixed px-2 lg:px-8 xl:px-[4%] py-4 z-50 bg-white drop-shadow-sm">
      <div className="container flex items-center justify-between">
        <h1 className="font-Ovo text-2xl md:text-lg 2xl:text-xl">Yusuf Ali</h1>
        <ul className="hidden md:flex items-center gap-4">
          <li><a className="font-Ovo text-sm md:text-lg 2xl:text-xl hover:text-gray-600 transition-colors ease-out duration-200" href="#top">Home</a></li>
          <li><a className="font-Ovo text-sm md:text-lg 2xl:text-xl hover:text-gray-600 transition-colors ease-out duration-200" href="#about">About me</a></li>
          <li><a className="font-Ovo text-sm md:text-lg 2xl:text-xl hover:text-gray-600 transition-colors ease-out duration-200" href="#services">Services</a></li>
          <li><a className="font-Ovo text-sm md:text-lg 2xl:text-xl hover:text-gray-600 transition-colors ease-out duration-200" href="#work">My work</a></li>
        </ul>

        <a href="#contact" className="hidden w-24 py-2 md:flex items-center justify-center gap-2 text-sm md:text-lg 2xl:text-xl font-Ovo text-white bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full hover:shadow-md transition-all ease-in duration-300">Contact</a>
        <span className="md:hidden text-xl cursor-pointer hover:text-gray-600 transition-colors ease-in-out duration-300" onClick={openMenu}><CiMenuBurger /></span>

        {/* mobile menu  */}

        <ul ref={sideMenuRef} className="w-64 bg-rose-100 h-screen fixed top-0 -right-64 flex md:hidden flex-col gap-4 px-4 py-1 bottom-0 transition-all ease-in-out duration-500">
          <div className="absolute top-2 right-2" onClick={closeMenu}>
            <span className="text-2xl cursor-pointer text-gray-800 hover:text-gray-600 transition-colors ease-in-out duration-300"><MdCancel /></span>
          </div>
          <li className="mt-2"><a className="font-Ovo hover:text-gray-600 transition-colors ease-in duration-300" href="#top">Home</a></li>
          <li className=""><a className="font-Ovo  hover:text-gray-600 transition-colors ease-in duration-300" href="#about">About me</a></li>
          <li className=""><a className="font-Ovo  hover:text-gray-600 transition-colors ease-in duration-300" href="#services">Services</a></li>
          <li className=""><a className="font-Ovo  hover:text-gray-600 transition-colors ease-in duration-300" href="#work">My work</a></li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Header

