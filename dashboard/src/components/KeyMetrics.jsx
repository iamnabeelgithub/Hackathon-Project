// src/components/KeyMetrics.js
import React from 'react';
import './KeyMetrics.css';

function KeyMetrics() {
  const metrics = [
    { title: 'Total Users', value: '40,000+', change: 'Up 8%' },
    { title: 'Total Orders', value: '10,000+', change: 'Up 5%' },
    { title: 'Total Sales', value: '$89,000+', change: 'Down 3%' },
    { title: 'Total Pending', value: '2,000+', change: 'Up 2%' },
  ];

  return (
    <div className="metrics">
      {metrics.map((metric) => (
        <div className="metric-card" key={metric.title}>
          <h3>{metric.title}</h3>
          <p>{metric.value}</p>
          <span>{metric.change}</span>
        </div>
      ))}
    </div>
  );
}

export default KeyMetrics;
