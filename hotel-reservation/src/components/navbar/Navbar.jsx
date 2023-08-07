import React from 'react'
import './navbar.css';
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register")
  }

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo" onClick={() => navigate("/")}>~GRAND HOTEL~</span>
            <div className="navItem">
                <button className="navButtonBlack" 
                onClick={handleRegister}>S'inscrire</button>
                <button className="navButtonWhite" 
                onClick={handleLogin}>Se connecter</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;