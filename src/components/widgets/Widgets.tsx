import React, { useState } from "react";
import Banner from "../banner/Banner";

import './Widgets.scss';

const Widgets: React.FC = () => {

    const [showContent, setShowContent] = useState(true);

    return (
    <div className="home">
      <div className="row">
        <div className="col col-12">
          <Banner/>
        </div>
      </div>
      <div className="row">
        <div className="col col-3">
          <div className="navi" onClick={(): void => setShowContent(false)}>
            {/* <Navbar/> */}
          </div>
        </div>
        <div className="col col-9">
          <div className="content">
            {showContent && (
              <div className="content--main">
                <Banner/>
              </div> 
            )}
            {!showContent && (
              <div className="content--widgets">
                <Banner/>
              </div> 
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Widgets;