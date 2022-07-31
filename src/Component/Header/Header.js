import React from 'react';
import 'Component/Header/Header.css';
import Img from 'Images/Logo-cantin.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='top'>
        <Link to='/'>
        <img className='logo' src={Img} alt='logo'/>
        </Link>
        <nav>
          <ul>
          <li><Link to='/prestation'>Tarif et prestation</Link></li>
            <li><Link to='/'>Acceuil</Link></li>
            <li><Link to='/category'>Categories</Link></li>
          </ul>
        </nav>
      </header>
    </>

  )
}

export default Header