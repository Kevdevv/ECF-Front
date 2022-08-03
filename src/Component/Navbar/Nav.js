import React from 'react'
import 'Component/Navbar/Nav.css'
import { useState } from 'react'
import Img from 'Images/Logo-cantin.png';
import {Link} from 'react-router-dom';


function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
         <Link to='/'>
        <img className='logo' src={Img} alt='logo'/>
        </Link>
        <ul className='navbar-links'>
            <li className='navbar-item'>
                <a href='/' className='navbar-link'>
                  Accueil
                </a>
            </li>
            <li className='navbar-item'>
                <a href='/prestation' className='navbar-link'>
                  Tarif et prestations
                </a>
            </li>
            <li className='navbar-item'>
                <a href='/gallerie' className='navbar-link'>
                  Galerie
                </a>
            </li>
            <li className='navbar-item'>
                <a href='/contact' className='navbar-link'>
                  Contact
                </a>
            </li>
        </ul>
        <button className='navbar-burger' onClick={handleShowLinks}>
            <span className='burger-bar'></span>
        </button>
    </nav>
  )
}

export default Nav