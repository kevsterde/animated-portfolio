import React, { useRef } from 'react'
import './portfolio.scss'

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "KWR Font",
        img: "./kwrfont.png",
        desc: "KWRFONT is a website where you can store, access, and utilize style fonts css with just copy & paste to your stylesheet.",
        link: "https://kevsterde.great-site.net/kwrfont/",
    },
    {
        id: 2,
        title: " KWR Generator",
        img: "/kwrgenerator.webp",
        desc: "I created this kwrgenerator to develop the website effeciently by inputting only the title, paragraphs, alt value then returning a html structured and css style.",
        link: "https://kevsterde.github.io/kwrgenerator/"
    },
    {
        id: 3,
        title: "PawTrain",
        img: "/pawtrain.webp",
        desc: "Dog Website using Tailwind CSS",
        link: "https://kevsterde.github.io/tailwind1/"
    },
    {
        id: 4,
        title: "Java Commerce",
        img: "https://images.pexels.com/photos/18650061/pexels-photo-18650061/free-photo-of-woman-sitting-and-working-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel voluptas perspiciatis, quae veritatis aut hic rem magnam provident ducimus consequuntur! Odit nihil pariatur accusantium delectus aliquid ducimus quae officia.",
    },
]


const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (


        <section >
            <div className="wrapper">
                <div className="container">


                    <motion.img ref={ref} src={item.img} alt={item.title} />
                    <motion.div style={{ y }} className="textContainer" >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target='_blank'>See Demo</a>
                    </motion.div>
                </div>
            </div>
        </section>
    )

}


const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Personal Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}


        </div>
    )
}

export default Portfolio