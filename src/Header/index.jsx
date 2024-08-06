import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <Link to="/" className="title"><h1>kingEsport</h1></Link>
                <div className='crown'><FontAwesomeIcon icon={faCrown} /></div>
            </div>
            <div className="middle">
                <h2>Valorant</h2>
            </div>
        </div>
    );
}

export default Header;