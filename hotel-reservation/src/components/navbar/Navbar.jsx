import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Hotel</span>
            <div className="navItem">
                <button className="navButtonBlack">Sign Up</button>
                <button className="navButtonWhite">Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar