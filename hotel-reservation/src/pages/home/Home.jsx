import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Discount from '../../components/roomType/RoomType';
import CityList from '../../components/cityList/CityList';
import BestRoom from '../../components/bestRoom/BestRoom';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <h1 className='homeTitle'> Chosissez parmi nos divers types de chambres</h1>
        <Discount/>
        <h1 className="homeTitle">Trouvez un de nos hotels dans la ville qui vous convient</h1>
        <CityList/>
        <h1 className="homeTitle">Nos meilleurs chambres</h1>
        <BestRoom/>
      </div>
        <MailList/>
      </div>
  )
}

export default Home;