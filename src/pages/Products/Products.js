import React, { useEffect, useState } from "react";
import "./Products.css";
import { connect } from "react-redux";

import { ProductCard } from "../../component/ProductCard/ProductCard";
import { Brands } from "../../component/Cards/Brands/Brands";
import { Categories } from "../../component/Cards/Categories/Categories";
import { CardContent } from "../../component/Cards/CardContent/CardContent";
import { BigCard } from "../../component/Cards/BigCard/BigCard";

export const Products = ({ partners, products, categories }) => {
  // let brands = [...new Set(partners.map((partner) => partner.brand))];

  // const [brandsItem, setBrandsItem] = useState(products);
  // const filter = (click) => {
  //   const filteredData = products.filter((item) => item.brand === click.brand);
  //   setBrandsItem(filteredData);
  //   console.log(setBrandsItem);
  // };
  console.log(partners);
  return (
    <div className="Products">
      <div className="startPage content">
        <BigCard partners={partners} />
      </div>

      <div className="content">
        <div className="productsMainPeaces">
          {/* <Brands filter={filter} partners={partners} /> */}
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    products: state.products.products, // products.products
    partners: state.partners, // products.products
    categories: state.categories,
    lang: state.lang,
    languages: state.languages,
  }),
  (dispatch) => ({
    setLang: (data) => {
      dispatch({ type: "ADD_LANG", payload: data });
    },
  })
)(Products);


{
  /* <div className="currentProduct">
        <div className="currentProductImage">
          <img src={partners} />
        </div>
      </div> */
}
{
  /* <div className="productsByCategories content">
        {partners &&
          partners.map((item) => {
            return (
              <div key={item.id}>
                <Categories item={item} />
              </div>
            );
          })}
      </div> */
}
{
  /* 
      <div className="productsList content">
        <CardContent brandsItem={brandsItem} />
      </div> */
}
