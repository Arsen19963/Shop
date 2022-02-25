import React from "react";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import {connect} from "react-redux";
import "./partners.css";
import {InformationCard} from "../../component/InformationCard/InformationCard";

export const Partners = ({partners}) => {
    return (
        <div>

            <div className={'content '}>
                {partners.map((item, index) => (
                    <div key={index} className={'partnersMainDiv'}>

                        <div className={'leftPart'}>
                            <div className="partnersMainTitle">
                                <p>Partner - {item.title}</p>
                            </div>
                            <p className={'partnersProduct'}>
                                {item.product}
                            </p>
                            <div className="partnersText">
                                <p>{item.text}</p>
                            </div>
                        </div>

                        <div className={'rightPart'}>
                            <img src={item.img}/>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    );
};
export default connect(
    (state) => ({
        partners: state.partners,
        lang: state.lang,
        languages: state.languages
    }),
    dispatch => ({
        setLang: data => {
            dispatch({type: 'ADD_LANG', payload: data})
        }
    })
)(Partners);
