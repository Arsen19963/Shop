import React from "react";
import {connect} from "react-redux";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import "./careers.css";
import {InformationPanel} from "../../component/InformationPanel/InformationPanel";


export const Careers = ({test}) => {
    return (
        <div>
            <Header/>

            <InformationPanel
                title={'Careers'}
                outline={false}
                image={false}
                mainText={false}
                mainTextInfo={'Another introtext here need to write about careers and' +
                    ' opportunities that can suggest Premier Foods and Beverages company'}
            />

            <Footer/>
        </div>
    );
};

export default connect((state) => ({
    test: state.test,
}), null)(Careers);
