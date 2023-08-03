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
            <h3>Chambre Twin</h3>
          </div>
        </div>
        <div className="discountItem">
          <img src={familyPromotion} alt="" className="discountImg" />
          <div className="discountTitle">
            <h3>Chambre familiale</h3>
          </div>
        </div>
        <div className="discountItem">
          <img src={suitePromotion} alt="" className="discountImg" />
          <div className="discountTitle">
            <h3>Suite</h3>
          </div>
        </div>
    </div>
  )
}

export default Discount