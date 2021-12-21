import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [button, setButton] = useState(true);
    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true);
    }
    window.addEventListener('resize', showButton);
    useEffect(() => {showButton()}, [])
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <i class="fas fa-cookie-bite" /> Hwan's Web 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>Profile</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                    <li className='nav-item-mobile'>
                        <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>Email</Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>EMAIL</Button>}
            </div>
        </nav>
    )
}

export default Navbar
