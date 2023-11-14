import React from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    return (
        <div ref={ref} className='parallax' style={{ background: type === "services" ? "linear-gradient(to top, #0c0c1d, #111132)" : "linear-gradient(to top, #505064, #111132)" }}>

            <motion.h1 style={{ y: yText }}>{type === "services" ? "What I Know" : "What I Did"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})` }}
                className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="star"></motion.div>
        </div >
    )
}

export default Parallax