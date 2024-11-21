'use client'

import Link from 'next/link';
import { KeyboardArrowUp as KeyboardArrowUpIcon, Call as CallIcon } from '@mui/icons-material';
import { Zoom } from '@mui/material';
import { useEffect, useState } from "react";

export default function FixedButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleCall, setIsVisibleCall] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`w-max h-max fixed bottom-12 right-2 lg:right-4 z-[2] flex flex-col gap-2`}>
            <Zoom style={{ transform: isVisible ? 'translateY(-15px)' : 'translateY(-30px)' }} in={isVisibleCall} timeout={500}>
                <div className='w-8 sm:w-12 h-8 sm:h-12 cursor-pointer block lg:hidden'>
                    <Link className={`flex justify-center items-center w-full h-full rounded-full border-[1px] border-gray-400 bg-white
                     text-sky-400 hover:scale-110 transition-all duration-300`} href={'tel:+923111640243'}>
                        <CallIcon className='text-xl sm:text-3xl' />
                    </Link>
                </div>
            </Zoom>
            <Zoom in={isVisible} timeout={500}>
                <div className='w-8 sm:w-12 h-8 sm:h-12 cursor-pointer'>
                    <Link className={`flex justify-center items-center w-full h-full rounded-full border-[1px] border-gray-400 bg-white
                     text-gray-500 hover:scale-110 transition-all duration-300`} href={'#top'}>
                        <KeyboardArrowUpIcon className='text-xl sm:text-3xl' />
                    </Link>
                </div>
            </Zoom>
        </div>
    )
}