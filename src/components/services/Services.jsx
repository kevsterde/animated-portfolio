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

    const isInView = useInView(ref, { margin: "200px" })

    return (
        <motion.div className='services' variants={variants} initial="initial" ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I have 1 year experience
                    <br /> as a developer
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/tech.png" alt="   " />
                    <h1><b>My</b> Current</h1>
                </div>
                <div className="title">
                    <h1><b>Tech</b> Stack.</h1>
                    <button>What I Do?</button>
                </div>


            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <div className="box">
                    <h2>Front-end</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS
                            <ul>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>Scss</li>
                            </ul>

                        </li>
                        <li>Javascript

                            <ul>
                                <li>React</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Back-end</h2>
                    <ul>
                        <li>PHP</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Database</h2>
                    <ul>
                        <li>MySQL</li>
                        <li>Firebase</li>
                        <li>MongoDb</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Others</h2>
                    <ul>
                        <li>Git</li>
                        <li>Figma</li>
                        <li>Bubble.io</li>
                        <li>Wordpress</li>
                    </ul>
                </div>

            </motion.div>


        </motion.div>
    )
}

export default Services