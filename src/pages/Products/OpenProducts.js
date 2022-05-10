import React from "react";
import "./OpenProducts.css";
import { Categories } from "../../component/Cards/Categories/Categories";
import { CardContent } from "./../../component/Cards/CardContent/CardContent";

export const OpenProducts = ({ products }) => {
  return (
    <div>
      <div>
        <Brands partners={partners} />
      </div>
      <div className="currentProduct">
        <div className="currentProductImage">
          <img src={partners} />
        </div>
      </div>
      <div className="productsByCategories content">
        {partners &&
          partners.map((item) => {
            return (
              <div key={item.id}>
                <Categories item={item} />
              </div>
            );
          })}
      </div>
      <div className="productsList content">
        <CardContent brandsItem={brandsItem} />
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
)(OpenProducts);
