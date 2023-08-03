import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Hotel</span>
            <div className="navItem">
                <button className="navButtonBlack">S'inscrire</button>
                <button className="navButtonWhite">Se connecter</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;