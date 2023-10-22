import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './sidebar.scss'
import Links from "./links/Links"
import ToggleButton from "./toggleButton/ToggleButton"

const variants = {
    open: {
        clipPath: "circle(1230px at 50px 48px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 48px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}
function Sidebar() {

    const [open, setOpen] = useState(false);



    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />

        </motion.div>
    )
}

export default Sidebar