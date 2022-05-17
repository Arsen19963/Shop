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
      {/* es vor mtnum es Product ej saya ashxatum։։։
      
      https://www.figma.com/proto/4leyeX1Zspp338jj8Xs3HN/premier-food?node-id=3%3A53&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&hide-ui=1
      
      */}
      {/* <div className="startPage ">
        <BigCard partners={partners} />
      </div> */}


      <div className="productsMainPeaces">
        <div className="content">
          <Brands partners={partners} />
        </div>
      </div>

      <div className="currentProduct">
        <div className="currentProductImage">
          <img src={partners.image} />
        </div>
      </div>

      <div className="productsByCategories">
        <div className="content">
          {partners &&
            partners.map((item) => {
              return (
                <div key={item.id}>
                  <Categories item={item} />
                </div>
              );
            })}
        </div>
      </div>

      <div className="productsList content">
        <CardContent products={products} />
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
