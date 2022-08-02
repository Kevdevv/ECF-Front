import React from 'react'
import Img from 'Images/Logo-cantin.png';
import 'Component/Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <img className='logo' src={Img} alt='logo'/>
    </div>
  )
}

export default Footer