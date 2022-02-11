import React from "react";
import {connect} from "react-redux";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import "./About.css";
import {Partners} from "../../component/Partners/Partners";
import Sukkary from "../../../public/images/sukkary.png";
import Star from "../../../public/images/star.png";
import {OurTeam} from "../../component/OurTeam/OurTeam";
import {Button} from "../../component/Button/Button";
import JoinTheTeam from "../../component/JoinTheTeam/JoinTheTeam";
import {InformationPanel} from "../../component/InformationPanel/InformationPanel";

export const About = ({test}) => {
    return (
        <div>
            <Header/>
            <div className={'content aboutContent'}>
                <div className={'historyAbout'}>
                    <InformationPanel
                        title={'History of Premier Foods'}
                        mainText={true}
                        mainTextInfo={'Another introtext here need to write maybe 3 lines and' +
                            ' its enough The company was founded 2012 year. In the first half ' +
                            'becoming a food producer Nestle Company: (brands: KitKat, Nesquik,' +
                            ' Nuts, Good Mix, Nestle, Rossia, Nescafe, BonPari, Bistroff, Torchin' +
                            ', Mivina, Maggi, Fitness, Nan, Nestogen, Gerber, Fellix, Frieskes,' +
                            ' Darling, ProPlan) official Representative in Armenia. In 2016' +
                            ' joined our company world famous Makfa Company'}
                        outLine={true}
                        image={true}
                    />
                </div>

            </div>

            <div className={'weInIndustry'}>
                <div>
                    <img src={Star}/>
                    <p className={'industryTitle'}>
                        25years
                    </p>
                    <p className={'secondTitle'}>
                        of active work
                    </p>
                </div>
                <div>
                    <img src={Star}/>
                    <p className={'industryTitle'}>
                        Customer trust
                    </p>
                    <p className={'secondTitle'}>
                        Customer trust
                    </p>
                </div>
                <div>
                    <img src={Star}/>
                    <p className={'industryTitle'}>
                        Number #1
                    </p>
                    <p className={'secondTitle'}>
                        In Armenian industry
                    </p>
                </div>
            </div>
            <div className="ourTeamContainer content">
                <p className="ourTeamTitle">About our team</p>
                <OurTeam/>
                <div className="ourTeamContainerButton">
                    <Button title={'Know more ABOUT TEAM'} outline={false}/>
                </div>
            </div>
            <JoinTheTeam/>
            <Partners render={true} size={false}/>
            <div className="aboutLastButton">
                <Button title={'Read more about Partners'} outline={false}/>
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
