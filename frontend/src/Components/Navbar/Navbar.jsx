import React from 'react'

export function Navbar() {
  return (
    <div className='flex justify-around items-center w-full h-full text-white'>
      <div className='navleft'>
        <h1 className='text-2xl text-wheat'>LinguaConnect</h1>
      </div>
      <div className="midnav flex gap-4 border-solid border-1 border-white">
        <a className='text-white' href="/">Home</a>
        <a className='text-white' href="/about">About</a>
        <a className='text-white' href="/contact">Contact</a>
        <a className='text-white' href="/login">Login</a>
      </div>
      <div className="navright">
        <button className='text-white px-4 py-2 rounded'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar