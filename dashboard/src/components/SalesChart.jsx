// src/components/SalesChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import './SalesChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12000, 19000, 30000, 5000, 20000, 30000],
        borderColor: '#87ceeb', // Sky blue color for the line
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: '#fff', // Point color
        pointBorderColor: '#87ceeb', // Point border color
        pointHoverBackgroundColor: '#87ceeb', // Point color on hover
        pointHoverBorderColor: '#fff', // Point border color on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Legend text color
        },
      },
      title: {
        display: true,
        text: 'Monthly Sales Trends',
        color: 'white', // Title text color
      },
      tooltip: {
        backgroundColor: '#444', // Tooltip background color
        titleColor: '#fff', // Tooltip title color
        bodyColor: '#87ceeb', // Tooltip body color
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // X-axis label color
        },
        grid: {
          color: '#555', // X-axis grid color
        },
      },
      y: {
        ticks: {
          color: 'white', // Y-axis label color
        },
        grid: {
          color: '#555', // Y-axis grid color
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <button className="sales-button">Sales</button>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
