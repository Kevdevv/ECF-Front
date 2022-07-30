import React from 'react';
import 'Header/Header.css';
import Img from 'Images/Logo-cantin.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='top'>
        <img className='logo' src={Img} alt='logo'/>
        <nav>
          <ul>
            <li><Link to='/'>Acceuil</Link></li>
            <li><Link to='/category'>Categories</Link></li>
          </ul>
        </nav>
      </header>
    </>

  )
}

export default Header