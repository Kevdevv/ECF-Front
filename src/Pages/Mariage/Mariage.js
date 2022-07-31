import React from 'react'
import Mariage1 from 'Pages/Mariage/Images/Mariage1.jpg'
import Mariage2 from 'Pages/Mariage/Images/Mariage2.jpg'
import Mariage3 from 'Pages/Mariage/Images/Mariage3.jpg'
import Mariage4 from 'Pages/Mariage/Images/Mariage4.jpg'
import Mariage5 from 'Pages/Mariage/Images/Mariage5.jpg'
import 'Pages/Mariage/Mariage.css'

const Mariage = () => {
  return (
    <div className='photo'>
      <img className='mariage1' src={Mariage1} alt='img' />
      <img className='mariage2' src={Mariage2} alt='img' />
      <img className='mariage3' src={Mariage3} alt='img' />
      <img className='mariage4' src={Mariage4} alt='img' />
      <img className='mariage5' src={Mariage5} alt='img' />
    </div>
  )
}

export default Mariage