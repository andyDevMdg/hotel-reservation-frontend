import React from 'react';
import './bestRoom.css';
import twin from '../../img/twinPromotion.jpg';
import family from '../../img/familyPromotion.jpg';
import suite from '../../img/suitePromotion.jpg';
import { useNavigate } from 'react-router';

function BestRoom() {
    const navigate = useNavigate()

    return (
        <div className='bestRoom'>
            <div className="bestRoomItem" onClick={() => navigate("/hotels")}>
                <img src={twin} alt="" className="bestRoomImg" />
                <span className="bestRoomName">Chambre Twin</span>
                <span className="bestRoomCity">Toamasina</span>
                <span className="bestRoomPrice">à partir de 40.000ar</span>
                <div className="bestRoomRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="bestRoomItem" onClick={() => navigate("/hotels")}>
                <img src={family} alt="" className="bestRoomImg" />
                <span className="bestRoomName">Chambre Familiale</span>
                <span className="bestRoomCity">Majunga</span>
                <span className="bestRoomPrice">à partir de 90.000ar</span>
                <div className="bestRoomRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="bestRoomItem" onClick={() => navigate("/hotels")}>
                <img src={suite} alt="" className="bestRoomImg" />
                <span className="bestRoomName">Suite</span>
                <span className="bestRoomCity">Nosy Be</span>
                <span className="bestRoomPrice">à partir de 150.000ar</span>
                <div className="bestRoomRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default BestRoom;