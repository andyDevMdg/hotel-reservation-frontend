import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { format } from 'date-fns';
import { useLocation } from 'react-router';
import { DateRange } from 'react-date-range';


function List() {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Recherche</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listItem">
              <label>Dates selectionnées</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} à ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (<DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />)}
            </div>
            <div className="listItem">
              <label>Spécificités</label>
              <div className="listSpecContainer">
                <div className="listSpec">
                  <span className="specText">
                    Prix min
                    <small> /nuitée</small>
                  </span>
                  <input type="number" className='specInput' />
                </div>
                <div className="listSpec">
                  <span className="specText">
                    Prix max
                    <small> /nuitée</small>
                  </span>
                  <input type="number" className='specInput' />
                </div>
                <div className="listSpec">
                  <span className="specText">
                    Adulte(s)
                  </span>
                  <input type="number" min={1} className='specInput' placeholder={options.adult} />
                </div>
                <div className="listSpec">
                  <span className="specText">
                    Enfant(s)
                  </span>
                  <input type="number" min={0} className='specInput' placeholder={options.children} />
                </div>
                <div className="listSpec">
                  <span className="specText">
                    Chambre(s)
                  </span>
                  <input type="number" min={1} className='specInput' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Rechrecher</button>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List;