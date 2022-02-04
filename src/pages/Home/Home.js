import React from "react";
import {connect} from "react-redux";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import {Tail} from "../../component/Tail/Tail"
import {About} from "../../component/about/about";
import "./home.css";
import {HomePageSlider} from "../../component/HomePageSlider/HomePageSlider";
import {Catalogue} from "../../component/Catalogue/Catalogue";

export const Home = ({test}) => {
    return (
        <div>
            <Header/>
            <div className={'content homeContent'}>
                <HomePageSlider/>
                <About/>
            </div>
            <Catalogue/>
            <Footer/>
            <Tail/>
        </div>
    );
};

export default connect(
    (state) => ({
        test: state.test,
    }),
    null
)(Home);
