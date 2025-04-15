'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface worklist {
    link: string,
    image: StaticImageData,
    title: string
}

interface workCardProp {
    item: worklist;
}  

function MyWorksComponent({item}:workCardProp) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = (rect.width / 2) - x;
        const centerY = (rect.height / 2) - y;
        
        setRotate({
            x: (-centerY / 8), 
            y: (centerX / 8)
        });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <a 
            href={item.link} 
            target="_blank" 
            className='border border-gray-300 p-2 relative overflow-hidden transition-[transform] duration-300 ease-out group'
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-white/30 to-black/10 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} 
                 style={{ transform: `translateZ(30px)` }}/>
            
            {/* Image with depth effect */}
            <div className='relative transition-transform duration-300 group-hover:translate-z-20'>
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    className='w-full h-auto'
                    style={{ transform: `translateZ(40px)` }}
                />
            </div>
            
            {/* Title with depth effect */}
            <h4 className='mt-2 font-medium text-center transition-transform duration-300' 
                style={{ transform: `translateZ(30px)` }}>
                {item.title}
            </h4>
            
            {/* Subtle shadow */}
            <div className={`absolute inset-0 shadow-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/>
        </a>
    )
}

export default MyWorksComponent