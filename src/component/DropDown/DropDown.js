import React,{useState} from "react";
import Arrow from "../../../public/images/rightArrow.png";
import './dropDown.css';
export const DropDown = ({title,data}) => {
    const [open, setOpen] = useState(false)
    return (

           <div className={'catalogFilter'}>
               <div className="filterAndArrow" onClick={()=>setOpen(!open)}>
                   <p className={'filtersText'}>{title}</p>
                   <div className={'filterArrow'}>
                       <img src={Arrow } className={open ?'arrow':''}/>
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

