import React, {useState} from "react";
import {connect} from "react-redux";
import "./Catalogue.css";
import {ProductCard} from "../../component/ProductCard/ProductCard";
import {DropDown} from "../../component/DropDown/DropDown";
export const Catalogue = ({catalogue}) => {
    const [filter, setFilter] = useState(catalogue.filter || [])
    const [categories, setCategories] = useState(catalogue.categories || [])
    const [products, setProducts] = useState(catalogue.products || [])
    return (
        <div className={'content'}>
                        <div className="catalogueMainTitles">
                            <div className="catalogueMainTitle">
                                <p>All products in one place</p>
                            </div>
                            <div className="catalogueMainTitle_2">
                                <p>Catalogue write smth herea bout all products</p>
                            </div>
                        </div>
            <div className={'catalogFlexing'}>
                <div className={'catalogFilters'}>
                    <DropDown title={'Filters'} data={filter} catalogue={true}/>
                    <DropDown title={'Categories'} data={categories} catalogue={true}/>
                </div>
                <div className={'productList'}>
                    {products.map((item, index) => (
                        <ProductCard  item={item} catalogPage={true}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default connect(
    (state) => ({
        catalogue: state.catalogue,
    }),
    null
)(Catalogue);


