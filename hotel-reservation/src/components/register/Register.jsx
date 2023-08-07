import React from 'react'
import './register.css'

function Register() {
  return (
    <div>
      <div className="formBackground">
        <div className="formBody">
          <div className="hotelName">
            <h1>GRAND HOTEL
            </h1>
          </div>
          <div className="formContainer">
            <h2>Créer votre compte</h2>
            <form className='formWrapper'>
              <div className='formInput'>
                <label>Nom d'utilisateur :</label>
                <input type="text" className='formInputTag' />
              </div>
            </form>
            <div className="loginInput">
              <input type="email" placeholder='E-mail' className='inputTag' />
              <input type="password" className='inputTag' placeholder='Mot de passe' />
            </div>
            <button className='loginBtn'>Se connecter</button>
            <p className='separator'>ou</p>
            <button className='loginBtn'>S'inscrire</button>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Register