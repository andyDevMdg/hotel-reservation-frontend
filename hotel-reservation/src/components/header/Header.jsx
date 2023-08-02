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
                        <span>BOOK NOW</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header