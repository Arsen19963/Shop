import React, {useState} from 'react';
import Logo from '../../../public/icons/logo.svg'
import Global from "../../../public/icons/global1.svg"
import Phone from "../../../public/icons/phone1.svg"
import "./header.css";
import "../../../public/style/style.css"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <div className={'content headerFlexing'}>
                <div className="premFood">
                    <img src={Logo} alt="svgLogo" className='headIcon'/>

                </div>

                {/*{menui list}*/}

                <div className="menuList">
                    <ul className="menuListLies">
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/catalogue'}>catalogue</Link></li>
                        <li><Link to={'/careers'}>careers</Link></li>
                        <li><Link to={'/partners'}>partners</Link></li>
                        <li><Link to={'/team'}>team</Link></li>
                    </ul>
                </div>


                {/*erkrord ikonkeq@*/}
                <div className="secondIcons">
                    <img src={Global} alt="svgGlobal"/>
                    <div className={"vertic"}></div>
                    <img src={Phone} alt="svgPhone"/>
                </div>
            </div>

        </header>
    )
}

