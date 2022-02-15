import React, {useEffect, useState} from "react";

import {connect} from "react-redux";
import "./Catalog.css";
import {ProductCard} from "../../component/ProductCard/ProductCard";

export const Team = ({catalog}) => {
    const [filter,setFilter] = useState(catalog.filter || [])
    const [categories,setCategories] = useState(catalog.categories || [])
    const [products,setProducts] = useState(catalog.products || [])

    return (
        <div className={'content'}>
            <div className={'catalogFlexing'}>
                <div className={'catalogFilters'}>
                    <ul>
                        {filter.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                    <ul>
                        {categories.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={'productList'}>
                    {products.map((item, index) => (
                        <ProductCard key={index} src={item.image} catalogPage={true} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default connect(
    (state) => ({
        catalog: state.catalog,
    }),
    null
)(Team);


