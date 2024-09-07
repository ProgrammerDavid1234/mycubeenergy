import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Order.module.css';
import { Link } from 'react-router-dom'; // Import Link from React Router
import arrow from '../Assets/arrow.png'

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Simulate fetching orders on component mount
  // This could be replaced with a real API call when needed
  const fetchOrders = () => {
    // Simulated data
    const simulatedOrders = [
      {
        id: 1,
        referenceNumber: 'WXRF-4389374',
        amount: '$100',
        payerName: 'James Hall',
        date: '2024-08-01',
      },
      {
        id: 2,
        referenceNumber: 'WXRF-4389375',
        amount: '$50',
        payerName: 'Sarah Smith',
        date: '2024-08-15',
      },
    ];
    setOrders(simulatedOrders);
  };

  // Simulate a search function
  const handleSearch = () => {
    // For demonstration, we'll use the same data for search
    fetchOrders();

    // Handle search filtering if needed
    // Here we are just using the simulated data without filtering
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.orderContainer}>
        <div className={styles.searchHeader}>
          <h4>Search Orders</h4>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Reference Number</label>
            <input
              type="text"
              id="email"
              className={styles.dateInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="from-date" className={styles.inputLabel}>From Date</label>
            <input
              type="date"
              id="from-date"
              className={styles.dateInput}
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="end-date" className={styles.inputLabel}>To Date</label>
            <input
              type="date"
              id="end-date"
              className={styles.dateInput}
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.searchButtonContainer}>
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.orders}>
          <div className={styles.searchHeader}>
            <h4>Orders Result</h4>
          </div>
          <table className={styles.tableOrder}>
            <thead>
              <tr>
                <th>Reference Number</th>
                <th>Amount</th>
                <th>Payer Name</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                    <td>WXRF-4389374</td>
                    <td>WXRF-4389374</td>
                    <td>WXRF-4389374</td>
                    <td>WXRF-4389374</td>
                    <td>                                 <Link to="/admin_dashboard_order">
                                    <img src={arrow} alt="View details" />
                                </Link>
                                </td>
                  </tr>

              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
