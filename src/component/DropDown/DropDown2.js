import React, {useEffect, useState} from "react";
import Global from "../../../public/icons/global1.svg";
import './dropDown_2.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
debugger;
export const DropDown2 = ({setLang,lang}) => {
    const [open, setOpen] = useState(false)



    const setLangs = (lan)=>{

        cookies.set('lang', lan, { path: '/' });
        setLang(lan)

    }
    return (
        <div className={'languageFilter'}>
            <div className={"filterAndLanguage"} onClick={()=>setOpen(!open)}>
                <div className={'filterGlobal'}>
                    <img src={Global} className={open ? 'languageBlock': Global} alt="svgPhone"/>
                </div>
            </div>

                <ul className={'languages'}>
                        <li key={1} onClick={()=>setLangs('hy')}>Hayeren</li>
                        <li key={2} onClick={()=>setLangs('ru')}>ruseren</li>
                        <li key={3} onClick={()=>setLangs('en')}>angleren</li>
                </ul>
        </div>
    );
};

