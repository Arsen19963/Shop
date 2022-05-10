// import React from "react";
// import "./CardContent.css";

// export const CardContent = ({ item }) => {
//   return (
//     <div className="CardContent">
//       <div className="imageContent">
//         <img src={item.image} />
//       </div>
//       <div className="line"></div>
//       <div className="CardContentText">{item.title}</div>
//     </div>
//   );
// };

import React from "react";
import "./CardContent.css";

export const CardContent = ({ brandsItem }) => {
  return (
    <div>
      {brandsItem &&
        brandsItem.map((item) => {
          return (
            <div className="CardContent" key={item.id}>
              <div className="imageContent">
                <img src={item.image} />
              </div>
              <div className="line" />
              <div className="CardContentText">{item.name}</div>
            </div>
          );
        })}
    </div>
  );
};
