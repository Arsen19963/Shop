import React from "react";
import "./productCard.css";
import {Link} from "react-router-dom";

// import { useHistory } from "react-router-dom";

export const ProductCard = ({ item,catalogPage, partners }) => {
 
    // const history = useHistory()
    // console.log(useHistory)

  if (catalogPage) {
    return (

        <Link  to={`/catalogue/${item.id}`} key={item.id}>
      <div className={"catalogPageProduct"}>
        <div className={"catalogPageProductImage"}>
          <img src={item.image} />
        </div>     
        <p className="catalogPageProductTitle">{item.name}</p>
        <p className="catalogPageProductCharacter">{item.weight}</p>
      </div>
        </Link>
    );
  } 
   if(partners){
    return (
        <div className={"sliderImageItemsP"}>
          <div className={"productCard"}>
              <div className="productCardImage">
                    <img  src={item.image} />
              </div>
            {/*<div className="catalogPageProductTitle">*/}
            {/*  <p>{item.name}</p>*/}
            {/*</div>*/}
          </div>
        </div>
    );
  }else{
    return (
        <Link to={`/catalogue/${item.id}`} key={item.id}>
        <div className={"productCardBig"}>
            <div className="productCardImageBig">
                  <img  src={item.image} />
            </div>
          <div className="catalogPageProductTitle">
            <p>{item.name}</p>
          </div>
        </div>
        </Link>
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
