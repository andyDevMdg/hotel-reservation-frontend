import React from 'react'
import './mailList.css'

function MailList() {
  return (
    <div className="mail">
    <h1 className="mailTitle">Grand Hotel - Newsletters</h1>
    <span className="mailDesc">Inscrivez-vous et nous vous enverrons les meilleures offres</span>
    <div className="mailInputContainer">
      <input type="text" placeholder="Votre e-mail..." />
      <button>Abonnez-vous</button>
    </div>
  </div>
  )
}

export default MailList