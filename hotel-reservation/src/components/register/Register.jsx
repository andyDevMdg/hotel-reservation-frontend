import React from 'react'
import './register.css'
import { useNavigate } from 'react-router'

function Register() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="formBackground">
        <div className="formBody">
          <div className="hotelName">
            <h1>GRAND HOTEL - Devenir membre
            </h1>
          </div>
          <div className="formContainer">
            <h2>Créer votre compte</h2>
            <form className='formWrapper'>
              <div className='formInput'>
                <label>Nom d'utilisateur :</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Nom(s) :</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Prénom(s):</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Mot de passe :</label>
                <input type="password" className='formInputTag' />
              </div>              <div className='formInput'>
                <label>Confirmation du mot de passe :</label>
                <input type="password" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Date de naissance :</label>
                <input type="date" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Numéro de carte d'idendité :</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Numéro de téléphone :</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Numéro de téléphone d'urgence:</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Adresse e-mail :</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Société :</label>
                <input type="text" className='formInputTag' />
              </div>
              <div className='formInput'>
                <label>Genre :</label>
                <input type="text" className='formInputTag' />
              </div>
            </form>
            <p className='info'>*Veuillez vous assurez que vos informations personnelles soit correctes</p>
            <div className="btnContainer">
            <button className='formBtn' onClick={() => navigate("/")}>S'inscrire</button>
            </div>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Register