import React, { useState } from "react";
import Banner from "../banner/Banner";

import './Home.scss';
import { Link } from "react-router-dom";

const Home: React.FC = () => {

    return (
    <div className="home">
      <div className="row">
        <div className="col col-12">
          <Banner/>
        </div>
      </div>
      <div className="row">
        <div className="col col-3">
          <div className="navi">
            {/* <Menu/> */}
          </div>
        </div>
        <div className="col col-9">
        
          <Link to="/">Home</Link>
          <Link to="/widgets">Widgets</Link>
          <Link to="/not-found">Not-found</Link>

        </div>
      </div>
    </div>
    );
};

export default Home;