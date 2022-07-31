import React from 'react'
import 'Component/Navbar/Nav.css'
import { useState } from 'react'

function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <div className='navbar-logo'>Logo</div>
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
                <a href='/category' className='navbar-link'>
                  Categories
                </a>
            </li>
            <li className='navbar-item'>
                <a href='/' className='navbar-link'>
                  contact
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