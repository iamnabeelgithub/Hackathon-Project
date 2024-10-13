// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Inbox</li>
        <li>Orders</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Sidebar;
