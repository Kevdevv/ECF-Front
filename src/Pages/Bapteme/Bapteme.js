import React from 'react'
import Bapteme1 from 'Pages/Bapteme/Images/Bapteme1.jpg'
import Bapteme2 from 'Pages/Bapteme/Images/Bapteme2.jpg'
import Bapteme3 from 'Pages/Bapteme/Images/Bapteme3.jpg'
import Bapteme4 from 'Pages/Bapteme/Images/Bapteme4.jpg'
import Bapteme5 from 'Pages/Bapteme/Images/Bapteme5.jpg'
import 'Pages/Bapteme/Bapteme.css'

const Bapteme = () => {
  return (
    <div className='photo'>
        <img className='bapteme1' src={Bapteme1} alt='img' />
        <img className='bapteme2' src={Bapteme2} alt='img' />
        <img className='bapteme3' src={Bapteme3} alt='img' />
        <img className='bapteme4' src={Bapteme4} alt='img' />
        <img className='bapteme5' src={Bapteme5} alt='img' />
      </div>
  )
}

export default Bapteme