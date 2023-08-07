import React from 'react'
import './login.css'
import { useNavigate } from 'react-router'


function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="loginContainer">
        <div className="loginBody">
          <div className="hotelName">
            <h1>GRAND HOTEL - Accès membre
            </h1>
          </div>
          <div className="loginInputContainer">
            <h2>Se connecter à votre compte</h2>
            <div className="loginInput">
              <input type="email" placeholder='E-mail' className='inputTag' />
              <input type="password" className='inputTag' placeholder='Mot de passe' />
            </div>
            <a href="" className='forgotPass'> Mot de passe oublié ?</a>
            <button className='loginBtn' onClick={() => navigate("/hotels")}>Se connecter</button>
            <p className='separator'>ou</p>
            <button className='loginBtn' onClick={() => navigate("/register")}>S'inscrire</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login