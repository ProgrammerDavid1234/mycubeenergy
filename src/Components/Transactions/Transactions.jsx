import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Transactions.module.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Simulate fetching transactions on component mount
  // This could be replaced with a real API call when needed
  const fetchTransactions = () => {
    // Simulated data
    const simulatedTransactions = [
      {
        id: 1,
        billerName: 'Electric Co.',
        amount: '$100',
        narration: 'Monthly bill',
        date: '2024-08-01',
      },
      {
        id: 2,
        billerName: 'Water Supply',
        amount: '$50',
        narration: 'Quarterly bill',
        date: '2024-08-15',
      },
    ];
    setTransactions(simulatedTransactions);
  };

  // Simulate a search function
  const handleSearch = () => {
    // For demonstration, we'll use the same data for search
    fetchTransactions();

    // Handle search filtering if needed
    // Here we are just using the simulated data without filtering
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.transactionsContainer}>
        <div className={styles.searchHeader}>
          <h4>Search Transactions</h4>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Reference Number</label>
            <input
              type="email"
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

        <div className={styles.transactions}>
          <div className={styles.searchHeader}>
            <h4>Transactions</h4>
          </div>
          <table className={styles.tabletrans}>
            <thead>
              <tr>
                <th>Biller Name</th>
                <th>Amount</th>
                <th>Narration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.billerName}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.narration}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No transactions found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
