import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Features } from '../../Components/Features/Features'
import { FloatingNavD } from '../../FloatingNavD'
import Navbar from '../../Components/Navbar/Navbar'
import { GridBackgroundDemo } from '../../Components/GridBackgroundDemo'
import { StickyScrollRevealDemo } from '../../Components/StickySrollReveal'



const BeforeSign = () => {
  return (
    <div className=' bg-white dark:bg-black'>
        <Navbar/>
        <GridBackgroundDemo/>
        <FloatingNavD/>
        <Features/>
        {/* <StickyScrollRevealDemo/> */}
        <Footer/>
    </div>
  )
}

export default BeforeSign