import React from 'react';
import photo from '../../assets/img/photo.jpg';

import './Home.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="home__main">
                <div className="home__main--header">
                    Hi, I'm 
                    <span>
                        Aleksandra Motor
                    </span>
                </div>
                <div className="home__main--subtitle">
                    Frontend Developer
                </div>
                <div className="home__main--text">
                    I make websites!
                </div>
            </div>
            <div className="home__foto">
                <img src={photo} alt='Aleksandra Motor'/>
            </div>
        </div>
    )
}

export default Home;