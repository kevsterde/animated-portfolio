import React from 'react'
import { motion } from 'framer-motion'

import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
    return (
        <div className='navbar'>
            <Sidebar />

            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Kevin Web</motion.span>
                <div className="social">
                    <a href='#'><img src="/facebook.png" alt="fb" /></a>
                    <a href='#'><img src="/instagram.png" alt="fb" /></a>
                    <a href='#'><img src="/youtube.png" alt="fb" /></a>
                    <a href='#'><img src="/dribbble.png" alt="fb" /></a>
                </div>
            </div>
        </div >
    )
}

export default Navbar