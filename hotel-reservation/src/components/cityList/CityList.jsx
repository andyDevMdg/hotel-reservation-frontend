import React from 'react';
import './cityList.css';
import nosyBe from '../../img/NosyBe.jpg';
import antsiranana from '../../img/Antsiranana.jpg';
import majunga from '../../img/Majunga.jpg';
import toamasina from '../../img/Toamasina.jpg';
import antananarivo from '../../img/Antananarivo.jpg';
import fianarantsoa from '../../img/Fianarantsoa.jpg';
import tulear from '../../img/Tulear.jpg';

function CityList() {
  return (
    <div className='cityList'>
        <div className="cityListItem">
            <img src={nosyBe} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Nosy Be</h3>
            </div>
        </div>
        <div className="cityListItem">
            <img src={antsiranana} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Antsiranana</h3>
            </div>
        </div>
        <div className="cityListItem">
            <img src={majunga} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Majunga</h3>
            </div>
        </div>
        <div className="cityListItem">
            <img src={toamasina} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Toamasina</h3>
            </div>
        </div>
        <div className="cityListItem">
            <img src={antananarivo} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Antananarivo</h3>
            </div>
        </div>
        <div className="cityListItem">
            <img src={fianarantsoa} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Fianarantsoa</h3>
            </div>
        </div>
        <div className="cityListItem">
            <img src={tulear} alt="" className="cityListImg" />
            <div className="cityListTitle">
                <h3>Tulear</h3>
            </div>
        </div>
    </div>
  )
}

export default CityList