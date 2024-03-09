import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Features } from '../../Components/Features/Features'
import { FloatingNavD } from '../../FloatingNavD'
import NewNav from '../../Components/NewNav/NewNav'
import { TypewriterEffectDemo } from '../../Components/TyperWriterDemo'


const AfterSign = () => {
  return (
    <div className=' bg-white dark:bg-black'>
        <NewNav />
        <TypewriterEffectDemo/>
        <FloatingNavD/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default AfterSign