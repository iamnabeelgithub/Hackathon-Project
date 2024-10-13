// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import KeyMetrics from './components/KeyMetrics';
import SalesChart from './components/SalesChart';
import DealsTable from './components/DealsTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <KeyMetrics />
        <SalesChart />
        <DealsTable />
      </div>
    </div>
  );
}

export default App;
