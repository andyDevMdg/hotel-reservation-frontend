import React from 'react'
import './discount.css';
import twinPromotion from '../../img/twinPromotion.jpg';

function Discount() {
  return (
    <div className='discount'>
        <div className="discountItem">
          <img src={twinPromotion} alt="" className="discountImg" />
          <div className="discountTitle">
            <h1>Twin</h1>
            <h2>10 Chambres</h2>
          </div>
        </div>
    </div>
  )
}

export default Discount