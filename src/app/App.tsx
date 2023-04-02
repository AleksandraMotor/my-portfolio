import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/sidebar/Sidebar';
import Widgets from '../pages/Widgets';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App: React.FunctionComponent = () => {
  return (
    <>
    <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/widgets' element={<Widgets />} />            
          <Route path='/not-found' element={<NotFound />} />    
          {/* <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} /> */}
        </Routes>
      </Router> 
    </>
  );
};

export default App;
