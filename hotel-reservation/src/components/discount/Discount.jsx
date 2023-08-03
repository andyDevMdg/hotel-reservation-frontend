import React from 'react'
import './discount.css';
import twinPromotion from '../../img/twinPromotion.jpg';
import familyPromotion from '../../img/familyPromotion.jpg';
import suitePromotion from '../../img/suitePromotion.jpg';

function Discount() {
  return (
    <div className='discount'>
        <div className="discountItem">
          <img src={twinPromotion} alt="" className="discountImg" />
          <div className="discountTitle">
            <h1>Chambre Twin</h1>
            <h2>6 Chambres</h2>
          </div>
        </div>
        <div className="discountItem">
          <img src={familyPromotion} alt="" className="discountImg" />
          <div className="discountTitle">
            <h1>Chambre familiale</h1>
            <h2>5 Chambres</h2>
          </div>
        </div>
        <div className="discountItem">
          <img src={suitePromotion} alt="" className="discountImg" />
          <div className="discountTitle">
            <h1>Suite</h1>
            <h2>4 Chambres</h2>
          </div>
        </div>
    </div>
  )
}

export default Discount