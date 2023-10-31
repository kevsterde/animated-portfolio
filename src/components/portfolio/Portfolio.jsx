import React, { useRef } from 'react'
import './portfolio.scss'

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/18407796/pexels-photo-18407796/free-photo-of-woman-walking-in-tunnel-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel voluptas perspiciatis, quae veritatis aut hic rem magnam provident ducimus consequuntur! Odit nihil pariatur accusantium delectus aliquid ducimus quae officia.",
    },
    {
        id: 2,
        title: "Next Js Commerce",
        img: "https://images.pexels.com/photos/3075449/pexels-photo-3075449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel voluptas perspiciatis, quae veritatis aut hic rem magnam provident ducimus consequuntur! Odit nihil pariatur accusantium delectus aliquid ducimus quae officia.",
    },
    {
        id: 3,
        title: "Shopify Commerce",
        img: "https://images.pexels.com/photos/13768940/pexels-photo-13768940.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel voluptas perspiciatis, quae veritatis aut hic rem magnam provident ducimus consequuntur! Odit nihil pariatur accusantium delectus aliquid ducimus quae officia.",
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


                    <img ref={ref} src={item.img} alt="" />
                    <motion.div style={{ y }} className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
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
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}


        </div>
    )
}

export default Portfolio