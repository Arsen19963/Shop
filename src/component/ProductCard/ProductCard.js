import React from "react";
import "./productCard.css";

// import { useHistory } from "react-router-dom";

export const ProductCard = ({ key, src, classname, catalogPage, partners, title }) => {
 
    // const history = useHistory()
    // console.log(useHistory)

  if (catalogPage) {
    return (
      <div className={"catalogPageProduct"}>
        <div className={"catalogPageProductImage"}>
          <img key={key} src={src} />
        </div>     
        <p className="catalogPageProductTitle">Baltika 3 Classic</p>
        <p className="catalogPageProductCharacter">0.45l</p>
      </div>
    );
  } 
   if(partners){
    return (
      <div className={"productCard"}>
          <div className="productCardImage">
                <img key={key} src={src} />
          </div>
        <div className="catalogPageProductTitle">
          <p>{title}</p>
        </div>
      </div>
    );
  }else{
    return (
        <div className={"productCardBig"}>
            <div className="productCardImageBig">
                  <img key={key} src={src} />
            </div>
          <div className="catalogPageProductTitle">
            <p>{title}</p>
          </div>
        </div>
      );
  }
};


// import React from "react";
// import "./productCard.css";
// import classNames from "classnames";
// export const ProductCard = ({key, src, title, smallTitle, catalogPage, }) => {

//   return (

//     <div className={classNames({ 'catalogPageProduct': false},{'productCard':false},{'productCardBig':false}, {catalogPage: false}, {partners: false}) }>
//       <div className={classNames({"catalogPageProductImage":false},{'productCardImage':false},{'productCardImageBig':false})}>
//         <img key={key} src={src} />
//       </div>
//       <div className={classNames({"catalogPageProductTitle":false})} >
//         <p>{title}</p>
//       </div>
//       <div className="catalogPageProductCharacter">
//         <p>{smallTitle}</p>
//       </div>
//     </div>
//     )
// };
