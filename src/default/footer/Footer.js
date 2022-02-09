import React from 'react';
import "./footer.css";
import {Link} from "react-router-dom";
import Facebook from "../../../public/icons/facebook(2)11.svg"
import Instagram from "../../../public/icons/instagram11.svg"
import Youtube from "../../../public/icons/youtub1.svg"
import CopyRigth from "../../../public/icons/copyright1.svg";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className={'content'}>

            <div className="footerFlexing">
                <div className="firstFoot everyElem">
                    <ul className="againFirstList">
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/catalogue'}>about us</Link></li>
                        <li><Link to={'/partners'}>partners</Link></li>
                        <li><Link to={'/team'}>team</Link></li>
                    </ul>
                </div>

                <div className="secondFoot everyElem">
                    <ul>
                    <li><Link to={'/premierfoods'}>Premier foods</Link></li>
                    <li><Link to={'/premierbeverages'}>premier beverages</Link></li>
                    </ul>
                </div>
                <div className="thirdFoot everyElem">
                    <ul>
                    <li><Link to={'/email'}>email</Link></li>
                    <li><Link to={'/number'}>Number</Link></li>
                    <li><Link to={'/privacypolicy'}>Privacy policy</Link></li>
                    <li><Link to={'/terms'}>Terms & conDitions</Link></li>
                    </ul>
                </div>
                <div className="fourhFoot everyElem">
                    <span><Link to={'/*'}>Follow Us </Link></span>
                    <ul className={"socialMedia"}>
                        <li><Link to={'/facebook'}><img src={Facebook} alt="svgFacebook"/></Link></li>
                        <li><Link to={'/instagram'}><img src={Instagram} alt="svgInstagram"/></Link></li>
                        <li><Link to={'/youtube'}><img src={Youtube} alt="svgYoutube"/></Link></li>
                    </ul>
                    <div className="copyRight">
                        <div><img src={CopyRigth} alt="svgCopyRigth"/> <span>Premier Foods, Premier</span></div>
                        <div><span>Bevarages. All rights reserved</span></div>
                    </div>
                </div>
            </div>
            <div className="tail">
                <div className="tailFlexing">
                    <div>
                        <p>ENGLISH</p>
                    </div>
                    <div>
                        <p>Made by Smart Concept.</p>
                    </div>
                </div>
            </div>
            </div>
        </footer>

    );
}
