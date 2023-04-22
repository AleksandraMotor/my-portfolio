import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/sidebar/Sidebar';
import Home from '../pages/home/Home';
import Skills from '../pages/skills/Skills';
import Work from '../pages/projects/Projects';
import Banner from '../components/banner/Banner';

import './App.scss';
import Contact from '../pages/contact/Contact';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <div className="app__banner">
        <Banner/>
      </div>
      <Router>
        <div className="app__main">
          <div className="app__main__sidebar">
            <Sidebar/>
          </div>
          <div className="app__main__content">
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/work' element={<Work />} />    
            <Route path='/contact' element={<Contact />} />            
            {/* <Route path='/analytics' element={<Analytics />} /> */}
          </Routes>
          </div>
        </div>
      </Router> 
    </div>
  );
};

export default App;
