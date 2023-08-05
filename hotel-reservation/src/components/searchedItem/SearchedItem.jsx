import React from 'react'
import './searchedItem.css'
import img1 from '../../img/sbed01.jpg'

function SearchedItem() {
  return (
    <div className='searchedItem'>
        <img src={img1} alt="Picture" 
        className='searchedItemImg'/>
        <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        </div>
        <div className="siDetails">details</div>
    </div>
  )
}

export default SearchedItem