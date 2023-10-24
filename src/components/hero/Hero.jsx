import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: - 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const slidingText = {
    initial: {
        x: 0,

    },
    animate: {
        x: "-350%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
        }
    }
}




function Hero() {
    return (
        <div className='hero'>
            <div className="wrapper">

                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>KEVIN REVALDE</motion.h2>
                    <motion.h1 variants={textVariants}>FRONT-END DEVELOPER</motion.h1>
                    <motion.div variants={textVariants} className="button">
                        <a href="#">See the lates works</a>
                        <a href="#" class="contact">Contact Me</a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingText" variants={slidingText} initial="initial" animate="animate">
                HTML - CSS - JAVASCRIPT
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div >
    )
}

export default Hero