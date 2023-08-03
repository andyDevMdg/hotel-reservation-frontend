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

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

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
                        <span className='headerSearchText'>{`${options.adult} adult | ${options.children} children | ${options.room} room`}</span>

                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>

                                <div className="optionCounter">
                                    <button className="optionCounterBtn">-</button>
                                    <span className="countNumber">1</span>
                                    <button className="optionCounterBtn">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>

                                <div className="optionCounter">
                                    <button className="optionCounterBtn">-</button>
                                    <span className="countNumber">0</span>
                                    <button className="optionCounterBtn">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>

                                <div className="optionCounter">
                                    <button className="optionCounterBtn">-</button>
                                    <span className="countNumber">1</span>
                                    <button className="optionCounterBtn">+</button>
                                </div>
                            </div>
                        </div>
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