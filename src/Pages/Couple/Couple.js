import React from 'react'
import Couple1 from 'Pages/Couple/Images/Couple1.jpg'
import Couple2 from 'Pages/Couple/Images/Couple2.jpg'
import Couple3 from 'Pages/Couple/Images/Couple3.jpg'
import Couple4 from 'Pages/Couple/Images/Couple4.jpg'
import Couple5 from 'Pages/Couple/Images/Couple5.jpg'
import 'Pages/Couple/Couple.css'

const Couple = () => {
  return (
    <div className='photo'>
        <img className='couple1' src={Couple1} alt='img' />
        <img className='couple2' src={Couple2} alt='img' />
        <img className='couple3' src={Couple3} alt='img' />
        <img className='couple4' src={Couple4} alt='img' />
        <img className='couple5' src={Couple5} alt='img' />
      </div>
  )
}

export default Couple