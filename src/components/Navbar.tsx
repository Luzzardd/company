"use client"; // Add this line at the top of the file

import React, { useState } from 'react';
import logo from '../../public/image/1stline-jago-logo.png'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handeNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
                <Image
                    src={logo}
                    width={150}
                    height={150}
                    alt="Picture of the author"
                />
                <ul className='hidden md:flex'>
                    <li className='p-5'><a href="#about">About</a></li>
                    <li className='p-5'><a href="#work">Work</a></li>
                    <li className='p-5'><a href="#contant">Contant</a></li>
                </ul>

                <div onClick={handeNav} className='block md:hidden mr-6'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' 
                                    : 'fixed left-[-100%]'}>
                    <h1 className='text-3x1 primary-color m-4'>Naufal</h1>
                    <ul className='p-8'>
                        <li className='p-2'><a href="#about">About</a></li>
                        <li className='p-2'><a href="#work">Work</a></li>
                        <li className='p-2'><a href="#contant">Contant</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;