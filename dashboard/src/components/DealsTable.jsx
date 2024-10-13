// src/components/DealsTable.js
import React from 'react';
import './DealsTable.css';

function DealsTable() {
  const deals = [
    { name: 'Apple Watch', location: '6096 Marjolaine Landing', date: '2024-10-10', pieces: 423, amount: '$34,295', status: 'Delivered' },
    { name: 'iPhone 13', location: '1027 Olivia Green', date: '2024-10-11', pieces: 200, amount: '$22,400', status: 'Pending' },
    // Add more deals here...
  ];

  return (
    <div className="deals-table">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Pieces Sold</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal, index) => (
            <tr key={index}>
              <td>{deal.name}</td>
              <td>{deal.location}</td>
              <td>{deal.date}</td>
              <td>{deal.pieces}</td>
              <td>{deal.amount}</td>
              <td>{deal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DealsTable;
