import React, {useState} from 'react';
import './ourTeam.css';
import CEO from '../../../public/images/CEO.png';
import Owner from '../../../public/images/Owner.png';
import ArtDirector_1 from '../../../public/images/artdirector_1.png';
import ArtDirector_2 from '../../../public/images/artdirector_2.png';


export const OurTeam = () => {
    const [teamImage, setteamImage] = useState([
        {id: 0, img: CEO, title: 'Some product name', position: 'CEO'},
        {id: 1, img: Owner, title: 'Some product name', position: 'Owner'},
        {id: 2, img: ArtDirector_1, title: 'Some product name', position: 'Art Director'},
        {id: 3, img: ArtDirector_2, title: 'Some product name', position: 'Art Director'},
    ])
    return (
        <div className={'ourTeamWrapper content'}>
            {teamImage.map( (item,index) => (
                <div className="ourTeamDiv">
                    <img src={item.img} key={index}/>
                    <p className={'ourTeamTitles'}>{item.title}</p>
                    <p className="ourTeamPositions">
                        {item.position}
                    </p>
                </div>
            ))}
        </div>
    );

}
