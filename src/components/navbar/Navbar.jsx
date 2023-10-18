import React from 'react'

import "./navbar.scss"

function Navbar() {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <div className="wrapper">
                <span>Kevin Web</span>
                <div className="social">
                    <a href='#'><img src="/facebook.png" alt="fb" /></a>
                    <a href='#'><img src="/instagram.png" alt="fb" /></a>
                    <a href='#'><img src="/youtube.png" alt="fb" /></a>
                    <a href='#'><img src="/dribbble.png" alt="fb" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar