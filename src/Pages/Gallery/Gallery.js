import React from 'react'
import Photos from 'Pages/Gallery/Photos'
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
                <button className='button' onClick={() => filterItem('bapteme')}>Bapteme</button>
                <button className='button' onClick={() => filterItem('couple')}>Couple</button>
                <button className='button' onClick={() => setItems(Photos)}>Tout</button>
            </div>

            <div className='search-result'>
                {
                    items.map((elem) => {

                        return (
                            <>
                                <img src={elem.image} alt='img' />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery