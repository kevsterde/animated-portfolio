import React from 'react'
import "./contact.scss"

import { animate, motion } from 'framer-motion'


const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,

        }
    }


}


const Contact = () => {
    return (
        <motion.div variants={variants} className='contact' initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants} >Let's Work Together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>New York</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+1 165 4356</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <form action="">
                    <input type="text" placeholder='Name' required />
                    <input type="email" placeholder='Email' required />
                    <textarea name="Message" placeholder='Message' cols="10" rows="5"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact