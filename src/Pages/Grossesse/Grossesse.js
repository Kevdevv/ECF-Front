import React from 'react'
import Grossesse1 from 'Pages/Grossesse/Images/Grossesse1.jpg'
import Grossesse2 from 'Pages/Grossesse/Images/Grossesse2.jpg'
import Grossesse3 from 'Pages/Grossesse/Images/Grossesse3.jpg'
import Grossesse4 from 'Pages/Grossesse/Images/Grossesse4.jpg'
import Grossesse5 from 'Pages/Grossesse/Images/Grossesse5.jpg'
import 'Pages/Grossesse/Grossesse.css'

const Grossesse = () => {
  return (
    
      <div className='photo'>
        <img className='grossesse1' src={Grossesse1} alt='img' />
        <img className='grossesse2' src={Grossesse2} alt='img' />
        <img className='grossesse3' src={Grossesse3} alt='img' />
        <img className='grossesse4' src={Grossesse4} alt='img' />
        <img className='grossesse5' src={Grossesse5} alt='img' />
      </div>
  
  )
}

export default Grossesse