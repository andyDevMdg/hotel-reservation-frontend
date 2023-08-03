import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Promotion from '../../components/promotion/Promotion';

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Promotion/>
      </div>
      </div>
  )
}

export default Home;