import React from 'react';
import './productCard.css';

export const ProductCard = ({key, src}) => {

    return (
        <div className='productCard'>
            <img key={key} src={src}/>
        </div>
    );

}
