import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

const Footer = (props) => {

    const container = useRef();
    const texts = useRef([]);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        scrollYProgress.on('change', e => {
            texts.current.forEach((text, i) => {
                text.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + "%")
            })
        })
    }, [])

    return (
        <div id='footer' ref={container} style={{ height: '90vh', marginTop: '60vh'}}>
            <svg viewBox="0 -30 659 256" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="MyPath"
                    fill="none"
                    stroke="none"
                    d="M0 190.815C60.6606 204.454 159.68 190.815 208.744 155.011C257.808 119.207 271.643 1.68198 353 1C434.357 0.318016 450.494 100.448 491.529 149.043C532.564 197.638 669.051 204.454 686 190.815" />

                <text style={{ fill: 'red', fontSize: '14px', fontFamily: 'Skyscapers' }}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} href="#MyPath" ref={ref => texts.current[i] = ref} startOffset={i * 40 + "%"}>This Will be A Tagling For Platform</textPath>
                        })
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress} />

            <div className='flex flex-row justify-around align-middle px-4 mb-8' >
                <div className='leftFoot flex flex-row gap-3 '>
                    <div className='px-3'>
                        <p className='font-bold font-semibold text-sm'>Email</p>
                        <a href="" className='text-sm'>harshal.ingale21@vit.edu</a>
                    </div>

                    <div>
                        <p className='font-bold font-semibold text-sm'>Call Us</p>
                        <a href="" className='text-sm'>+91 8282828282</a>
                    </div>
                </div>

                <div className=''>
                    <p className='text-black font-bold text-2xl'>Services</p>
                    <ul className='flex flex-col justify-center align-middle'>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Tutors</a>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Student</a>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Help</a>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Login</a>
                    </ul>
                </div>

                <div className=''>
                    <p className='text-black font-bold text-2xl'>Services</p>
                    <ul className='flex flex-col justify-center align-middle'>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Link 1</a>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Link 2</a>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Link 3</a>
                        <a href="" className='text-white font-normal text-xl hover:underline translate-x-1 dark:text-black' >Link 4</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

function Logos({ scrollProgress }) {
    const y = useTransform(scrollProgress, [0, 1], [-900, 0])
    return (
        <div style={{ height: '250px', backgroundColor: 'white', overflow: 'hidden' }}>

            <motion.div style={{ height: '100%', y, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                <p className='flex justify-center align-middle gap-1 text-12xl' style={{ fontFamily: 'Skyscapers' }}>Ling Connect</p>
            </motion.div>

        </div>
    )
}