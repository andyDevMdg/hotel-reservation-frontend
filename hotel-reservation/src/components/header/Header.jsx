import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import './header.css';

function Header() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <span>RESERVER </span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                <h1 className='headeTitle'>Bienveue chez Hotel</h1>
                <p className='headerDesc'>Passez des moments agréables dans nos hotels situés dans tout Madagascar</p>
                <button className="headerBtn">S'inscrire / Se connecter</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text"
                            placeholder='Choisissez une destination'
                            className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span onClick={() => setOpenDate(!openDate)} 
                        className='headerSearchText'>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className='headerSearchText'>2 adults 2 children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">RECHERCHER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header