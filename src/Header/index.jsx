import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="Header">
            <div className="left">
                <div className="a"><h1>kingEsport</h1></div>
                <div className='crown'><FontAwesomeIcon icon={faCrown} /></div>
            </div>
            <div className="middle">
                <h2>Valorant</h2>
            </div>
        </div>
    );
}

export default Header;