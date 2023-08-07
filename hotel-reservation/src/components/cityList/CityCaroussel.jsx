import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nosyBe from '../../img/NosyBe.jpg';
import antsiranana from '../../img/Antsiranana.jpg';
import majunga from '../../img/Majunga.jpg';
import toamasina from '../../img/Toamasina.jpg';
import antananarivo from '../../img/Antananarivo.jpg';
import fianarantsoa from '../../img/Fianarantsoa.jpg';
import tulear from '../../img/Tulear.jpg';
import { useNavigate } from 'react-router';

function CityCaroussel() {
    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1280, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={nosyBe} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Nosy Be</h3>
                    </div>
                </div>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={antsiranana} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Antsiranana</h3>
                    </div>
                </div>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={majunga} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Majunga</h3>
                    </div>
                </div>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={toamasina} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Toamasina</h3>
                    </div>
                </div>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={antananarivo} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Antananarivo</h3>
                    </div>
                </div>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={fianarantsoa} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Fianarantsoa</h3>
                    </div>
                </div>
                <div className="cityListItem" onClick={() => navigate("/hotels")}>
                    <img src={tulear} alt="" className="cityListImg" />
                    <div className="cityListTitle">
                        <h3>Tulear</h3>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default CityCaroussel