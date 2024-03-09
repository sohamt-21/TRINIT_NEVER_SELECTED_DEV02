import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Features } from '../../Components/Features/Features'
import { FloatingNavD } from '../../FloatingNavD'
import NewNav from '../../Components/NewNav/NewNav'
import { GridBackgroundDemo } from '../../Components/GridBackgroundDemo'
import { StickyScrollRevealDemo } from '../../Components/StickySrollReveal'



const AfterSign = () => {
  return (
    <div className=' bg-white dark:bg-black'>
        <NewNav />
        <GridBackgroundDemo/>
        <FloatingNavD/>
        <Features/>
        <StickyScrollRevealDemo/>
        <Footer/>
    </div>
  )
}

export default AfterSign