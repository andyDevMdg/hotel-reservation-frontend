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
import { useNavigate } from 'react-router';

function Header({type}) {

    const [destination, setDestination] = useState("");
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

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    
    const handleSearch = () => {
        navigate("/hotels", { state: {destination,date,options} })
    }

    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem">
                        <span>RESERVER </span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
                { type !== "list" &&
                    <>
                    <h1 className='headeTitle'>Bienveue chez Hotel</h1>
                <p className='headerDesc'>Passez des moments agréables dans nos hotels situés dans tout Madagascar</p>
                <button className="headerBtn">S'inscrire / Se connecter</button>
                <div className="headerSearch">

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text"
                            placeholder='Choisissez une destination'
                            className='headerSearchInput' 
                            onChange={e=>setDestination(e.target.value)}/>
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span onClick={() => setOpenDate(!openDate)}
                            className='headerSearchText'>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} à ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date' 
                            minDate={new Date()}
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adulte(s) | ${options.children} enfant(s) | ${options.room} chambre(s)`}</span>

                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adultes</span>

                                <div className="optionCounter">
                                    <button className="optionCounterBtn"
                                    disabled={options.adult <= 1}
                                    onClick={()=>handleOption("adult", "decrease")}>-</button>
                                    <span className="countNumber">{options.adult}</span>
                                    <button className="optionCounterBtn" 
                                    onClick={()=>handleOption("adult", "increase")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Enfant</span>

                                <div className="optionCounter">
                                    <button className="optionCounterBtn"
                                    disabled={options.children <= 0}
                                    onClick={()=>handleOption("children", "decrease")}>-</button>
                                    <span className="countNumber">{options.children}</span>
                                    <button className="optionCounterBtn"
                                    onClick={()=>handleOption("children", "increase")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Chambre</span>

                                <div className="optionCounter">
                                    <button className="optionCounterBtn"
                                    disabled={options.room <= 1}
                                    onClick={()=>handleOption("room", "decrease")}>-</button>
                                    <span className="countNumber">{options.room}</span>
                                    <button className="optionCounterBtn"
                                    onClick={()=>handleOption("room", "increase")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>RECHERCHER</button>
                    </div>
                </div></>}
            </div>
        </div>
    )
}

export default Header