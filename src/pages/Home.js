import React from 'react';
import Navbar from '../components/Navbar';
import Dashboard from './Dashboard';
function Home() {
  return (
    <div>
    <Navbar/>
    <div className='home'>
    
    <div>
      
      <Dashboard/>
  </div>
    </div>
    
    
    </div>
  );
}

export default Home;
