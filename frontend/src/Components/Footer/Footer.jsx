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
        <div ref={container} style={{ height: '90vh', marginTop: '60vh' }}>
            <svg viewBox="0 -30 659 256" xmlns="http://www.w3.org/2000/svg">
                <path
                    id="MyPath"
                    fill="none"
                    stroke="none"
                    d="M0 190.815C60.6606 204.454 159.68 190.815 208.744 155.011C257.808 119.207 271.643 1.68198 353 1C434.357 0.318016 450.494 100.448 491.529 149.043C532.564 197.638 669.051 204.454 686 190.815" />

                <text style={{ fill: 'red', fontSize: '14px', fontFamily:'Skyscapers'}}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} href="#MyPath" ref={ref => texts.current[i] = ref} startOffset={i * 40 + "%"}>This Will be A Tagling For Platform</textPath>
                        })
                    }
                </text>
            </svg>
            <Logos scrollProgress={scrollYProgress} />
        </div>
    )
}

export default Footer

function Logos({ scrollProgress }) {
    const y = useTransform(scrollProgress, [0, 1], [-600, 0])
    return (
        <div style={{ height: '250px',backgroundColor: 'white' , overflow:'hidden'}}>

        <motion.div style={{ y}}>
            <p className='flex justify-center align-middle gap-1 text-12xl' style={{fontFamily:'Skyscapers'}}>Ling Connect</p>

            <div>
                <div className='flex flex-col justify-start '>
                    <p className='text-black'>Services</p>
                    <ul className=''>
                        <a href="">Link 1</a>
                        <a href="">Link 2</a>
                        <a href="">Link 3</a>
                        <a href="">Link 4</a>
                    </ul>
                </div>
            </div>
        </motion.div>
    </div>
    )
}