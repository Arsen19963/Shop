// import React from "react";
// import './Brands.css'
// export const Brands = ({ item }) => {
//   return (
//     <div className="Brands">
//       <img src={item.image} alt="purina" />
//     </div>
//   );
// };

import React from "react";
import "./Brands.css";

export const Brands = ({ filter, partners }) => {
  return (
    <div>
      {partners &&
        partners.map((item) => {
          return (
            <div className="Brands" onClick={() => filter(item)}>
              <img src={item.image} />
            </div>
          );
        })}
    </div>
  );
};
