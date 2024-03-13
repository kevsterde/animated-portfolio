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
                >&lt;&#8725;Kevin Web&gt;</motion.span>
                <div className="social">
                    <a href='https://www.linkedin.com/in/kevin-webster-revalde-952444248/' target='_blank'><img src="images/linkin.png" alt="fb" /></a>
                    <a href='https://github.com/kevsterde' target='_blank'><img src="images/github.png" alt="github" /></a>
                </div>
            </div>
        </div >
    )
}

export default Navbar