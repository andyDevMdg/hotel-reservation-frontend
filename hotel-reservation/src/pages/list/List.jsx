import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { format } from 'date-fns';
import { useLocation } from 'react-router';


function List() {

  const location =  useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [options,setOptions] = useState(location.state.options)

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
              <input type="text" placeholder={destination}/>
            </div>
            <div className="listItem">
              <label>Dates selectionnées</label>
              <span>{`${format(date[0].startDate, "dd/MM/yyyy")} à ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            </div>
            <div className="listResult"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;