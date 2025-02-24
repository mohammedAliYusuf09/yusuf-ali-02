'use client'
import React, { FormEvent, useState } from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget); // Use `currentTarget` instead of `target`
    formData.append("access_key", "c7d69990-75e5-4cc6-b3aa-2435db2dca81");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset(); // Use `currentTarget` to reset the form
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div id='contact'>
        <h4 className='font-Outfit text-xl text-center mt-[4rem] md:mt-[6rem]'>Connect with me</h4>
        <h2 className='font-Ovo text-4xl text-center mt-4 font-[500] '>Get in touch</h2>
        <div className='flex justify-center'>
            <p className='commpn-text mt-4'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
        </div>
        
        <form onSubmit={onSubmit} className='max-w-[700px] mx-auto pt-10 px-2'>
            <div className='w-full flex flex-col md:flex-row gap-4 '>
                <input className='w-full md:w-[50%] focus:outline-none p-2 border border-gray-300 rounded-md' type='text' name="name" id='name' placeholder='Full Name'/> 
                <input className='w-full md:w-[50%] focus:outline-none p-2 border border-gray-300 rounded-md' type='email' name="email" id='email' placeholder='Email Address'/> 
            </div>
            <textarea name="message" placeholder='Message...' className='w-full min-h-[10rem] mt-4 focus:outline-none p-2 border border-gray-300 rounded-md'/>
            <span>{result}</span>
            <div className='flex justify-center py-8'>
                <button type='submit' className='flex items-center bg-black text-white gap-2 px-5 py-3 rounded-full font-Outfit font-[300] text-base sm:text-md md:text-lg'>Connect with me<span><FaAngleDoubleRight /></span></button>
            </div>
        </form>
    </div>
  )
}

export default Contact