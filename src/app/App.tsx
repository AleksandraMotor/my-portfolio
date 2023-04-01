import React from 'react';
import Banner from '../components/banner/Banner';
import Menu from '../components/menu/Menu';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="col col-12">
          <Banner/>
        </div>
      </div>
      <div className="row">
        <div className="col col-3">
          <Menu/>
        </div>
        <div className="col col-9">
          <div className="content">
          Content
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
