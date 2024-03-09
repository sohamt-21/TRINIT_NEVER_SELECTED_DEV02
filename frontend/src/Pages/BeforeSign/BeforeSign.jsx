import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Features } from '../../Components/Features/Features'
import { FloatingNavD } from '../../FloatingNavD'
import Navbar from '../../Components/Navbar/Navbar'
import { TypewriterEffectDemo } from '../../Components/TyperWriterDemo'


const BeforeSign = () => {
  return (
    <div className=' bg-white dark:bg-black'>
        <Navbar/>
        <TypewriterEffectDemo/>
        <FloatingNavD/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default BeforeSign