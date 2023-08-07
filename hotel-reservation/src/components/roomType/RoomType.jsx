import React from 'react'
import './roomType.css';
import simplePromotion from '../../img/simplePromotion.jpg';
import twinPromotion from '../../img/twinPromotion.jpg';
import familyPromotion from '../../img/familyPromotion.jpg';
import suitePromotion from '../../img/suitePromotion.jpg';
import { useNavigate } from 'react-router';

function Discount() {
  const navigate = useNavigate()

  return (
    <div className='discount'>
      <div className="discountItem" onClick={() => navigate("/hotels")}>
        <img src={simplePromotion} alt="" className="discountImg" />
        <div className="discountTitle">
          <h3>Chambre Simple</h3>
        </div>
      </div>
      <div className="discountItem" onClick={() => navigate("/hotels")}>
        <img src={twinPromotion} alt="" className="discountImg" />
        <div className="discountTitle">
          <h3>Chambre Twin</h3>
        </div>
      </div>
      <div className="discountItem" onClick={() => navigate("/hotels")}>
        <img src={familyPromotion} alt="" className="discountImg" />
        <div className="discountTitle">
          <h3>Chambre familiale</h3>
        </div>
      </div>
      <div className="discountItem" onClick={() => navigate("/hotels")}>
        <img src={suitePromotion} alt="" className="discountImg" />
        <div className="discountTitle">
          <h3>Suite</h3>
        </div>
      </div>
    </div>
  )
}

export default Discount