import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import "./ShowTeamMembers.css";
import {Header} from "../../default/Header/Header";
import {Footer} from "../../default/footer/Footer";

const ShowTeamMembers = ({match, members}) => {
    const [data, setData] = useState(null);
    const {id} = match.params;
    useEffect(() => {
        let item = members.find((x) => x.id.toString() === id.toString());
        setData(item);
    }, [id])
    if (data) {
        return (
            <div>

            <div className={'content showMembers'}>

                <div className="showTeamMembersMain">
                        <img src={data.img}/>
                </div>
                <div className={"showMembersTitle"}>
                        <div className={'nameSurname'}>
                            {data.title}
                        </div>
                        <div className={'position'}>
                            {data.position}
                        </div>
                        <div className="introduction">
                            {data.introduction}
                        </div>
                </div>
            </div>
            </div>
        );
    } else {
        return null;
    }
};
export default connect(
    (state) => ({
        members: state.members,
        lang: state.lang,
        languages: state.languages
    }),
    dispatch => ({
        setLang: data => {
            dispatch({type:'ADD_LANG', payload:data})
        }
    })
)(ShowTeamMembers);
