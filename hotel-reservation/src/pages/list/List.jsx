import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { useLocation } from 'react-router';

function List() {

  const location =  useLocation()

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Recherche</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="listItem">
              <label>Dates selectionnées</label>
              <input type="text" />
            </div>
            <div className="listResult"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;