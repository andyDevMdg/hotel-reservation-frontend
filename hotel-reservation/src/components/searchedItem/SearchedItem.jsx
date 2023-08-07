import React from 'react'
import './searchedItem.css'
import img1 from '../../img/sbed01.jpg'

function SearchedItem() {
    return (
        <div className='searchedItem'>
            <img src={img1} alt="Picture"
                className='searchedItemImg' />
            <div className="siDesc">
                <h1 className="siTitle">Chambre Simple Majunga</h1>
                <span className="siDistance">500m de la plage</span>
                <span className="siTaxiOp">En promotion</span>
                <span className="siSubtitle">
                    Chambre simple avec air conditionnée, eau chaude, TV
                </span>
                <span className="siFeatures">
                    2 personnes max
                </span>
                <span className="siCancelOp">Annulation gratuite</span>
                <span className="siCancelOpSubtitle">
                    *annulation 1 jour à l'avance au plus tard
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>4.8</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">30.000ar</span>
                    <span className="siTaxOp">*Inclus la promotion</span>
                    <button className="siCheckButton">RESERVER</button>
                </div>
            </div>
        </div>
    )
}

export default SearchedItem