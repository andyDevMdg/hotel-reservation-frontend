import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router'

function Hotel() {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188089699.jpg?k=0aee97b2092bc72648b0b70523626b92bf15b2d4fcdd0fa9d5a889806cf296cb&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188063162.jpg?k=afcea0bf69e8a9414b6318d7711e6c111f88377e51196ea3a288ad1e5872ae9b&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188059200.jpg?k=5c692e753446c27ebc7179db93a4362a11d1763fecb859380a09f524dbd58db1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188089323.jpg?k=4ac832cf7aab6f671a1ce67e09e3ad72457e5d24f594c905e476fb0e93106ef2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/188089220.jpg?k=c0870f9b957fa39e0f096471b712dee64044ec2de49b00b9f2851bbb608330b0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/192998511.jpg?k=17dad3e70bc54b0a88455af23c11679e20a738ec30269c78446eed4b77a6c1a5&o=&hp=1",
    },
  ];

  const handleClick = () => {
      navigate("/login")
    }
  

  return (
    <div>
      <Navbar />
      <div className="hotelContainer">

        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faAnglesLeft}
            className="arrow"
            onClick={() => handleMove("left")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderimg" />
          </div>

          <FontAwesomeIcon icon={faAnglesRight}
            className="arrow"
            onClick={() => handleMove("right")} />
        </div>}


        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel-Fianarantsoa</h1>
          <div className="hotelImgContainer">
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Lieu paisible et chaleureux</h1>
              <p className="hotelDesc">
              Situé à 5 minutes du centre de ville de Fianarantsoa, 
              le Grand Hotel - Fianarantsoa propose des chambres climatisés dotées 
              d'une connexion WiFi, d'une télévision à écran plat et 
              d'une salle de bains privative avec une douche. 
              Vous aurez accès à une piscine et un bar. 
              L'hotel propose un service de transport payant si vous souhaiter vous déplacer dans la ville.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Parfait pour vos passages à Fianarantsoa</h1>
              <span>
                Situé au coeur de la ville, l'hotel a un excellent avis de 4.8
              </span>
              <h2>
                <b>à partir de 40.000ar</b> (nuitée)
              </h2>
              <button onClick={handleClick}>RESERVER</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  )
}

export default Hotel