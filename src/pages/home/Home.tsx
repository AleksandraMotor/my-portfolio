import React from 'react';
import webDesign from '../../assets/img/webDesign.png';

import './Home.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="home__main">
                <div className="home__main__header">
                    Aleksandra Motor
                    <div className="home__main__header__subtitle">
                        <span>
                            {'Frontend'}&nbsp;{'Developer '}
                        </span>                           
                        with passion for aesthetic and functional web design
                    </div>                     
                </div>
                <div className="home__main__foto"></div>
            </div>
            <div className="home__text">
                I&nbsp;graduated in technical physics from Cracow University of Technology 
                where I&nbsp;fell in love with programming. 
                My passion for painting and previous professional experience with graphics design 
                put me on a path to become a front-end developer. 
                I&nbsp;started out working for multiple e-commerce platforms using mostly React with 
                TypeScript and Angular frameworks. I&nbsp;enjoy finding my way around complex projects 
                and room for improvement within those.
            </div>
            <div className="home__graphic">
                <img src={webDesign} alt='Grafika - RWD'/>
            </div>
        </div>
    );
};

export default Home;