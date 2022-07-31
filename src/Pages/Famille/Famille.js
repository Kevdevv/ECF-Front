import React from 'react'
import Famille1 from 'Pages/Famille/Images/Famille1.jpg'
import Famille2 from 'Pages/Famille/Images/Famille2.jpg'
import Famille3 from 'Pages/Famille/Images/Famille3.jpg'
import Famille4 from 'Pages/Famille/Images/Famille4.jpg'
import Famille5 from 'Pages/Famille/Images/Famille5.jpg'
import 'Pages/Famille/Famille.css'

const Famille = () => {
  return (
    <div className='photo'>
        <img className='famille1' src={Famille1} alt='img' />
        <img className='famille' src={Famille2} alt='img' />
        <img className='famille' src={Famille3} alt='img' />
        <img className='famille' src={Famille4} alt='img' />
        <img className='famille' src={Famille5} alt='img' />
      </div>
  )
}

export default Famille