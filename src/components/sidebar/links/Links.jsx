import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }

}



const itemvariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }

}

function Links() {
    const items = [
        "Homepage",
        "Skills",
        "Portfolio",
        "Contact",
        "About",
    ]



    return (
        <motion.div className='links' variants={variants}>
            {items.map(item => (
                <motion.a variants={itemvariants} href={`#${item}`} key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >{item}</motion.a>
            ))}
        </motion.div>
    )
}

export default Links