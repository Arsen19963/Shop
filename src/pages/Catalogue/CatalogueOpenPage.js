import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./CatalogueOpenPage.css";

const CatalogueOpenPage = ({ match, catalogue }) => {
  const [data, setData] = useState(null);
  const { id } = match.params;
  useEffect(() => {
    let item = catalogue.products.find(
      (x) => x.id.toString() === id.toString()
    );
    setData(item);
    console.log(setData(item));
  }, [id]);
  if (data) {
    return (
      <div className={"content catalogueOpenPage"}>
        <div className="catalogueOpenPageLeft">
          <div className="catalogueOpenPageImg">
            <img src={data.image} />
          </div>
        </div>
        <div className={"catalogueOpenPagText"}>
          <div className={"catalogueOpenPageName"}>{data.name}</div>
          <div className={"catalogueOpenPageDescription"}>Weight: {data.weight} or grams</div>
          <div className={"catalogueOpenPageIntroduction"}>{data.some}</div>
        </div>
        <div className="alsoProducts">
            <div className="alsoProductsTitle"> 
                <p>Also you can be interested in:</p>
            </div>
            <div className={'productList'}>
                    {products.map((item, index) => (
                        <Link to={`/catalogue/${item.id}`} key={index}>
                            <ProductCard  src={item.image} catalogPage={true} title={'Baltika 3 Classic'} smallTitle={'0.45l'}/> 
                            {/* //classname={'catalogPage'} */}
                        </Link>
                    ))}
                </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default connect(
  (state) => ({
    catalogue: state.catalogue,
  }),
  null
)(CatalogueOpenPage);
