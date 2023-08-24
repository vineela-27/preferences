import React from 'react';
import Navbar from '../components/Navbar';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import './Reports.css'
function Reports() {
  const data = [
    { name: 'Calories', value: 40 },
    { name: 'Fats', value: 30 },
    { name: 'Proteins', value: 30 },
    { name: 'Salts', value: 20 },
  ];
  return (
    <div>
    <Navbar/>
    <div className='reports'>
    <h1>Reports</h1>
    
    <div class="pie">
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
    </div>
    <div class="ind"><h2>ingredients</h2></div>
    <p></p>
    </div>
    </div>
  );
}

export default Reports;
