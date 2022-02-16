import React, {useEffect, useState} from "react";
import {OurTeam} from "../../component/OurTeam/OurTeam";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import {connect} from "react-redux";
import "./team.css";

export const Team = ({members}) => {
    const [ourTeam, setOurTeam] = useState([])
    const [workTeam, setWorkTeam] = useState([])
    const [main, setMain] = useState([]);
    useEffect(() => {
        let x = [];
        let y = [];
        let z = [];
        // let x, y, z = [];
        members.forEach(item => {
            if (item.team === 1) {
                x.push(item)
            }
            if(item.board === 'main') {
                z.push(item)
            }
            else {
                y.push(item)
            }
        });
        console.log(typeof x)
        setOurTeam(x)
        setWorkTeam(y)
        setMain(z)
    }, [members])
    return (
        <div>
            <div className="contentWrapper content">
                <div className="workTeamChef">
                    <p className="workTeamTitle">Chief executive officer</p>
                    <div className="ourTeamMembers">
                        <OurTeam members={main}/>
                    </div>
                </div>
                <div className="teamMain">
                    <p className="teamMainTitle">Our Team</p>
                    <p className="teamMainTitle_2">Premier Foods LLC | General Team </p>
                    <div className="ourTeamMembers">
                        <OurTeam members={ourTeam}/>
                    </div>
                </div>
            </div>
            <div className="workTeam">
                <p className="workTeamTitle">Work Team </p>
                <div className="ourTeamMembers">
                    <OurTeam members={workTeam}/>
                </div>
            </div>
        </div>
    );
};
export default connect(
    (state) => ({
        members: state.members,
    }),
    null
)(Team);


