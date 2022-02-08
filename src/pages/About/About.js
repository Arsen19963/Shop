import React from "react";
import {connect} from "react-redux";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import "./About.css";
import {Partners} from "../../component/Partners/Partners";


export const About = ({test}) => {
    return (
        <div>
            <Header/>
                <div className={'content aboutContent'}>
                    <Partners />
                </div>

            <Footer/>

        </div>
    );
};

export default connect(
    (state) => ({
        test: state.test,
    }),
    null
)(About);
