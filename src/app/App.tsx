import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/projects/Projects';
import Banner from '../components/banner/Banner';
import Contact from '../pages/contact/Contact';
import classNames from 'classnames';
import { isDesktop } from 'react-device-detect';
import Sidebar from '../components/sidebar/Sidebar';

import './App.scss';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <div className="app__banner">
        <Banner/>
      </div>
      <div 
        className={classNames({
          'app__main': true,
          'app__main--desktop': isDesktop,
        })}
      >
        <Router>
          <div
            className={classNames({
              'app__main__sidebar': true,
              'app__main__sidebar--desktop': isDesktop,
            })}
          >
            <Sidebar/>
          </div>
          <div
            className={classNames({
              'app__main__content': true,
              'app__main__content--desktop': isDesktop,
            })}
          >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />    
              <Route path='/contact' element={<Contact />} />            
            </Routes>
          </div>
        </Router> 
      </div>
    </div>
  );
};

export default App;
