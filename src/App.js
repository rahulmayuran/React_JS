import React from 'react';
import './App.css';
import Header from './Header-Component/Header';
import SideBar from './SideBar-Component/SideBar';
import Recommended_Videos from './Recommended-Videos-Component/Recommended_Videos'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        {/* For Sticky Header */}
        <Header/>
        <Routes>
          <Route exact path='/search/:searchTerm'>
            
          </Route>

          {/* For home page path, attaching all components to same route */}
          <Route exact path='/' element=
            {
              <>
                  {/* Both sideBar and Recommended Videos need flex property, so enclosed in div tag*/}
                  <div className='Body__Remaining'>
                    <SideBar /> 
                    <Recommended_Videos />  
                  </div> 
              </>
            }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
