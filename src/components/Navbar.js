import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
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
                        <a href="mailto:choihwany@naver.com" className='email-mobile'>EMAIL</a>
                    </li>
                </ul>
                <a href ="mailto: abc@example.com" className='email-web'>EMAIL</a>
            </div>
            <ul className={click ? 'nav-lang active' : 'nav-lang'}>
                <li className='nav-lang-item'>EN</li>
                <li className='nav-lang-item'>KR</li>    
            </ul> 
        </nav>
    )
}

export default Navbar
