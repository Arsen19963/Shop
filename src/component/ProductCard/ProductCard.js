import React from 'react';
import './productCard.css';

export const ProductCard = ({key, src, classname, catalogPage}) => {
    if (catalogPage) {
        return (
            <div className={'catalogPageProduct'}>
                <div className={'catalogPageProductImage'}>
                    <img key={key} src={src}/>
                </div>
                <p>Baltika 3 Classic</p>
                <p>0.45l</p>
            </div>
        );
    } else {
        return (
            <div className={!classname ? 'productCard' : 'productCardBig'}>
                <img key={key} src={src}/>
            </div>
        );
    }
}
