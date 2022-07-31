import React from 'react'
import Mariage from 'Images/Mariage1.png'
import 'Pages/Category/Category.css'
import Bébé from 'Images/Bébé.png'
import Grossesse from 'Images/Grossesse.png'
import Famille from 'Images/Famille.png'
import Baptême from 'Images/Bapteme.png'
import Couple from 'Images/Couple.png'
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <main className='main-category'>
      <article>
        <h2><Link to='/mariage'>Mariage</Link></h2>
        <img className='category-image' src={Mariage} alt='logo' />
      </article>
      <article>
        <h2><Link to='/grossesse'>Grossesse</Link></h2>
        <img className='category-image' src={Grossesse} alt='logo' />
      </article>
      <article>
        <h2><Link to='/bebe'>Bébé</Link></h2>
        <img className='category-image' src={Bébé} alt='logo' />
      </article>
      <article>
        <h2><Link to='/famille'>Famille</Link></h2>
        <img className='category-image' src={Famille} alt='logo' />
      </article>
      <article>
        <h2><Link to='/bapteme'>Baptême</Link></h2>
        <img className='category-image' src={Baptême} alt='logo' />
      </article>
      <article>
        <h2><Link to='/couple'>Couple</Link></h2>
        <img className='category-image' src={Couple} alt='logo' />
      </article>
    </main>
  )
}

export default Category