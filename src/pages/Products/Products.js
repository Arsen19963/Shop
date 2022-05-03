import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import "./Products.css";
import { Brands } from "../../component/Cards/Brands/Brands";

export const Products = ({ partners, products }) => {
  //partnersInProductPage
  // products,
  // const [partners, setPartners] = useState([]);

  // useEffect(() => {
  //   setAllProducts((products));
  //   console.log(allProducts)
  // }, []);
  // console.log(allProducts.name)
  // const [allPartners, useAllPartners] = useState([products]);
  // console.log("partners", allPartners);
  // console.log("products", products[0].image);
  console.log("partners", partners);

  return (
    <div className="Products">
      <div className="content">
        <div className="productsTitle">Products</div>
        <div className="productsMainPeaces">
          {partners &&
            partners.map((item) => {
              return (
                <div key={item.id}>
                  <Brands item={item} />
                </div>
              );
            })}

          {/* {partners.map((item, index) => {
            return (
              <ProductCard
                item={item}
                key={index}
                partnersInProductPage={true}
                name={item.name}
                className={'partnersInProductPage'}
              />
            );
          })} */}
        </div>
      </div>
      <div className="currentProduct">
        <div className="currentProductImage">
          <img src={products[0].image} />
        </div>
      </div>
      <div className="productsList content">
        {products &&
          products.map((item) => {
            return (
              <div key={item.id} className="productsCard">
                <ProductCard item={item} products={true} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    products: state.products.products, // products.products
    partners: state.partners, // products.products
    lang: state.lang,
    languages: state.languages,
  }),
  (dispatch) => ({
    setLang: (data) => {
      dispatch({ type: "ADD_LANG", payload: data });
    },
  })
)(Products);
