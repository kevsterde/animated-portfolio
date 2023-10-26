import React, { useRef } from 'react'
import "./services.scss"
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
        }
    },
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: "-200px" })

    return (
        <motion.div className='services' variants={variants} initial="initial" ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="   " />
                    <h1><b>Unique</b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><b>For Your</b> Business.</h1>
                    <button>What We Do?</button>
                </div>


            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vel quod commodi optio velit, dignissimos similique sapiente officiis saepe magni!</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vel quod commodi optio velit, dignissimos similique sapiente officiis saepe magni!</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vel quod commodi optio velit, dignissimos similique sapiente officiis saepe magni!</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid vel quod commodi optio velit, dignissimos similique sapiente officiis saepe magni!</p>
                    <button>Go</button>
                </div>

            </motion.div>


        </motion.div>
    )
}

export default Services