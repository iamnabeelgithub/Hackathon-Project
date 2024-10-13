// src/components/TopNav.js
import React from 'react';
import './TopNav.css';

function TopNav() {
  return (
    <div className="topnav">
      <div className="search-container"> {/* Wrap search and language selector */}
        <input type="text" placeholder="Search..." className="search" />
        <select className="language">
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
      <div className="profile">
        <img src="https://via.placeholder.com/40" alt="profile" />
        <span>Admin</span>
      </div>
    </div>
  );
}

export default TopNav;
