import React, {useState} from "react";
import {connect} from "react-redux";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import "./careers.css";
import {InformationPanel} from "../../component/InformationPanel/InformationPanel";
// import {Button} from "../../component/Button/Button";
import {InformationCard} from "../../component/InformationCard/InformationCard";


export const Careers = ({careers}) => {
    return (
        <div>
            <Header/>
            <div className="careersInformationPanel">
                <InformationPanel
                    title={'Careers'}
                    outline={false}
                    image={false}
                    mainText={false}
                    mainTextInfo={'Another introtext here need to write about careers and' +
                        ' opportunities that can suggest Premier Foods and Beverages company'}
                />
            </div>
            <div className={'content'}>
                <div className={'careersList'}>
                    {careers.map((item,index)=>(
                        <InformationCard item={item}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default connect((state) => ({
    careers: state.careers,
}), null)(Careers);
