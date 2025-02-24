import React from 'react'
import { IoMdMail } from "react-icons/io";


function Footer() {
  return (
    <div className='container border-t border-gray-300'>
        <div className='flex justify-between items-center h-[70px]'>
           <div>
            <h2 className='text-2xl'>Yusuf Ali</h2>
            <div className='flex items-center gap-2'><span><IoMdMail /></span><p>my9689438@gmail.com</p></div>
            </div>
            <p>&#169; 2025 Yusuf Ali. All rights reserved.</p> 
        </div>
    </div>
  )
}

export default Footer