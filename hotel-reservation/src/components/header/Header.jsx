import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

function Header() {
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
            </div>
        </div>
    )
}

export default Header