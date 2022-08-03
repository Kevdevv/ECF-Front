import React from 'react'
import Photos from 'Pages/Gallery/Photos'
import 'Pages/Gallery/Gallery.css'
import { useState } from 'react'




const Gallery = () => {

    const [items, setItems] = useState(Photos)

    const filterItem = (categItem) => {
        const updateItems = Photos.filter((cureElem) => {
            return cureElem.category === categItem;
        });

        setItems(updateItems)
    }

    return (
        <>
            <div className='all-buttons'>
                <button className='button' onClick={() => filterItem('bapteme')}>Baptême</button>
                <button className='button' onClick={() => filterItem('couple')}>Couple</button>
                <button className='button' onClick={() => filterItem('famille')}>Famille</button>
                <button className='button' onClick={() => filterItem('mariage')}>Mariage</button>
                <button className='button-bottom' onClick={() => filterItem('bebe')}>Bébé</button>
                <button className='button-bottom' onClick={() => filterItem('grossesse')}>Grossesse</button>
                <button className='button-bottom' onClick={() => setItems(Photos)}>Tout</button>
            </div>

            <div className='block-photo'>
                {
                    items.map((elem) => {

                        return (
                            <>
                            <div className='display-photo'>
                                <img className='photos' src={elem.image} alt='img' />
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery