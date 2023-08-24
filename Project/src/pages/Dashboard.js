import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const { username } = location.state;

  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      
    </div>
  );
}

export default Dashboard;
