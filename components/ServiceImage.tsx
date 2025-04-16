import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
  image: StaticImport;
}

function ServiceImage({image}: Props) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, duration: 2000 }}
    className="w-full pt-2 sm:pt-4 md:pt-0 md:w-[47%] flex justify-center">
      <Image
        className="w-[300]"
        width={300}
        height={300}
        src={image}
        alt="desin element"
      />
    </motion.div>
  )
}

export default ServiceImage