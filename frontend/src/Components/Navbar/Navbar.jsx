import React from 'react'
import { motion } from 'framer-motion';
import {SignInButton} from '@clerk/clerk-react';

export function Navbar() {
  return (
    <div className='flex justify-around items-center w-full h-16 '>
      <div className='navleft'>
        <h1 className='text-2xl dark:text-white' style={{fontFamily:'Skyscapers'}}>Lingua Connect</h1>
      </div>
      <div className="midnav flex gap-4 rounded-8xl h-3/4 align-middle  border-solid border border-slate-500 rounded-3xl">
        <a className='px-2 text-black dark:text-white hover:underline my-2' href="/">Home</a>
        <a className='px-2 text-black dark:text-white hover:underline my-2' href="#features">Features</a>
        <a className='px-2 text-black dark:text-white hover:underline my-2' href="#footer">Contact</a>
      </div>
      <div className="navright">
        <SignInButton  className='shadow-[inset_0_0_0_2px_#616467] px-8 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200' />
      </div>
    </div>
  );
}
export default Navbar