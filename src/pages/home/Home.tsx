import React from 'react';
import photo from '../../assets/img/photo.jpg';
import maxGraphics from '../../assets/img/maxGraphics.png';

import './Home.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="home__main">
                <div className="home__main__header">
                    Aleksandra Motor
                    <div className="home__main__header__subtitle">
                        <span>
                            Frontend Developer&nbsp;
                        </span>                           
                        with passion for aesthetic and functional web design
                    </div>                     
                </div>
                <div className="home__main__foto">
                    <img src={photo} alt='Aleksandra Motor'/>
                </div>
            </div>
            <div className="home__text">
                I graduated in technical physics from Cracow University of Technology 
                where I fell in love with programming. 
                My passion for painting and previous professional experience with graphics design 
                put me on a path to become a front-end developer. 
                I started out working for multiple e-commerce platforms using mostly React with 
                TypeScript and Angular frameworks. I enjoy finding my way around complex projects 
                and room for improvement within those.
            </div>
            <div className="home__graphic">
                <img src={maxGraphics} alt='Grafika - RWD'/>
            </div>
        </div>
    );
};

export default Home;