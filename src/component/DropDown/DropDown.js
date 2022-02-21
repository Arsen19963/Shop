import React,{useState} from "react";
import Arrow from "../../../public/images/rightArrow.png";
import Global from "../../../public/icons/global1.svg";
import './dropDown.css';
export const DropDown = ({title, data, header }) => {
    const [open, setOpen] = useState(false)

    return (
           <div className={'catalogFilter'}>
               <div className={header?"":"filterAndArrow"} onClick={()=>setOpen(!open)}>
                   <p className={'filtersText'}>{header?"":title}</p>
                   <div className={'filterArrow'}>
                       <img src={header ? Global : Arrow} className={open ?'arrow':''}/>
                   </div>
               </div>
               {open && (
                   <ul className={'filtersName'}>
                       {data.map((item, index) => (
                           <li key={index}>{item.name}</li>
                       ))}
                   </ul>
               )}
           </div>
    );
};

