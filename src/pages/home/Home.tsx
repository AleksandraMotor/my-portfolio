import React from 'react';
import portrait from '../../assets/img/portrait.png';

import './Home.scss';

// import styled from 'styled-components';

// const HomeText = styled.div`
//     display: flex;
//     // align-items: center;
//     // justify-content: center;
//     // font-size: 50px;
//     // height: 70vh;
// `

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
                <div className="home__main--text">
                    Frontend Developer
                </div>
            </div>
            <div className="home__foto">
                <img src={portrait}/>
            </div>
        </div>
    )
}

export default Home;


            {/* <span className="hex"></span>
            <div className="hex2">&#x2B22;</div> */}