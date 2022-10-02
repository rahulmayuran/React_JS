import React from 'react';
import './App.css';
import Header from './Header-Component/Header';
import SideBar from './SideBar-Component/SideBar';
import Recommended_Videos from './Recommended-Videos-Component/Recommended_Videos'

function App() {
  return (
    <div className="App">

      {/* Sticky Header -> Component */}
      <Header />
      
      <div className='Body__Remaining'>
        
      {/* SideBar -> Component has to be 20%*/}
      <SideBar />

      {/* Recommended Videos -> Component */}
      <Recommended_Videos />
      </div>


    </div>
  );
}

export default App;
