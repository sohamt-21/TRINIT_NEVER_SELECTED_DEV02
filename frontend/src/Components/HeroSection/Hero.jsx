import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
    const helloTranslations = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "Привет", "你好", "こんにちは", "안녕하세요", "नमस्ते", "Hujambo", "Γεια σας", "Hallo", "Merhaba", "Hej", "שלום", "สวัสดี", "Xin chào", "Salut", "Hallo", "Cześć", "Ahoj", "Sawubona", "Здравствуйте", "Aloha", "Halo", "Hei", "Salve", "Здравейте", "Բարեւ", "வணக்கம்", "హలో", "ನಮಸ್ಕಾರ", "Selamat", "Kamusta", "ជំរាបសួរ", "გამარჯობა", "Здравейте", "ਹੈਲੋ", "ഹലോ", "ආයුබෝවන්", "ഹലോ", "வணக்கம்", "ສະບາຍດີ", "ສະບາຍດີ", "হ্যালো", "नमस्ते"];

    return (
        <div className='heroCntr'>
            <div className="boldText">
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Non ad tempora <br /> voluptatum voluptate deleniti.
                 <motion.span 
                 
                 > 
                    {
                        helloTranslations.map((word, i) =>{
                            return 
                        })
                    }
                </motion.span></p>
            </div>
        </div>
    )
}

export default Hero