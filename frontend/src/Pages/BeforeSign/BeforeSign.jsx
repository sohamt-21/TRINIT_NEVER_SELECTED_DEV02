import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Features } from '../../Components/Features/Features'
import { FloatingNavD } from '../../FloatingNavD'
import Navbar from '../../Components/Navbar/Navbar'


const BeforeSign = () => {
  return (
    <div>
        <Navbar/>
        <FloatingNavD/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default BeforeSign