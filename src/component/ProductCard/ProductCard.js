import React from 'react';
import './productCard.css';

export const ProductCard = ({key, src, classname}) => {

    return (
        <div className={!classname?'productCard':'productCardBig'}>
            <img key={key} src={src}/>
        </div>
    );

}
