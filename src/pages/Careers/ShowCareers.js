import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Footer} from "../../default/footer/Footer";
import {Header} from "../../default/Header/Header";
import "./careers.css";
import "./showCareers.css";


export const ShowCareers = ({match, careers}) => {
    const [data, setData] = useState(null)
    const {id} = match.params
    useEffect(() => {
        let item = careers.find(x => x.id.toString() === id.toString())
        setData(item)
    }, [id])
    // <>
    //     {data && (<div>
    //                 <Header/>
    //                 <div className={'content'}>
    //                     <h1>{data.title}</h1>
    //                     <p>
    //                         <spna>Employment type</spna>
    //                         {data.employment_type}</p>
    //                     <p>
    //                         <spna>City</spna>
    //                         {data.city}</p>
    //                     <p>{data.text}</p>
    //                     <p>Deadline:{data.date}</p>
    //                 </div>
    //                 <ul>
    //                     {careers.map((item, index) => (
    //                         item.id.toString() !== id.toString() && (
    //                             <li key={index}>
    //                                 <a href={`/careers/${item.id}`}> {item.title}</a>
    //                             </li>
    //                         )
    //                     ))}
    //                 </ul>
    //                 <Footer/>
    //             </div>)
    //     }
    // </>
    if (data) {
        return (
            <div>
                <Header/>
                <div className="showCareers">
                    <div className={'content'}>
                        <h1>{data.title}</h1>
                        <p>
                            <spna>Employment type</spna>
                            {data.employment_type}</p>
                        <p>
                            <spna>City</spna>
                            {data.city}</p>
                        <p>{data.text}</p>
                        <p>Deadline:{data.date}</p>
                    </div>
                    <ul>
                        {careers.map((item, index) => (
                            item.id.toString() !== id.toString() && (
                                <li key={index}>
                                    <a href={`/careers/${item.id}`}> {item.title}</a>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
                <Footer/>
            </div>

        );
    } else {
        return null
    }
};
export default connect((state) => ({
    careers: state.careers,
}), null)(ShowCareers);
