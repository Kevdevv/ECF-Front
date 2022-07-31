import React from 'react'
import Mariage from 'Images/Mariage1.png'
import 'Pages/Category/Category.css'
import Bebe from 'Images/Bébé.png'
import Grossesse from 'Images/Grossesse.png'
import Famille from 'Images/Famille.png'
import Baptême from 'Images/Bapteme.png'
import Couple from 'Images/Couple.png'
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <main className='main-category'>
      <article>
        <h2 className='top'>Mariage</h2>
        <Link to='/mariage'>
        <img className='category-image' src={Mariage} alt='logo' />
        </Link>        
      </article>
      <article>
        <h2>Grossesse</h2>
        <Link to='/grossesse'>
        <img className='category-image' src={Grossesse} alt='logo' />
        </Link>        
      </article>
      <article>
        <h2>Bébé</h2>
        <Link to='/bebe'>
        <img className='category-image' src={Bebe} alt='logo' />
        </Link>        
      </article>
      <article>
        <h2>Famille</h2>
        <Link to='/famille'>
        <img className='category-image' src={Famille} alt='logo' />
        </Link>        
      </article>
      <article>
        <h2>Baptême</h2>
        <Link to='/bapteme'>
        <img className='category-image' src={Baptême} alt='logo' />
        </Link>        
      </article>
      <article>
        <h2>Couple</h2>
        <Link to='/couple'>
        <img className='category-image' src={Couple} alt='logo' />
        </Link>        
      </article>
    </main>
  )
}

export default Category