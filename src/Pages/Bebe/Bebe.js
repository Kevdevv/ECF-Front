import React from 'react'
import Bebe1 from 'Pages/Bebe/Images/Bebe1.jpg'
import Bebe2 from 'Pages/Bebe/Images/Bebe2.jpg'
import Bebe3 from 'Pages/Bebe/Images/Bebe3.jpg'
import Bebe4 from 'Pages/Bebe/Images/Bebe4.jpg'
import Bebe5 from 'Pages/Bebe/Images/Bebe5.jpg'
import 'Pages/Bebe/Bebe.css'

const Bebe = () => {
  return (
    <div className='photo'>
        <img className='bebe1' src={Bebe1} alt='img' />
        <img className='bebe2' src={Bebe2} alt='img' />
        <img className='bebe3' src={Bebe3} alt='img' />
        <img className='bebe4' src={Bebe4} alt='img' />
        <img className='bebe5' src={Bebe5} alt='img' />
      </div>
  )
}

export default Bebe