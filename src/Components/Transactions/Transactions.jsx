import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Transactions.module.css'; // Import module CSS

const Transactions = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.transactionsContainer}>
        <div className={styles.searchHeader}>
          <h4>Search Transactions</h4>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="from-date" className={styles.inputLabel}>From Date</label>
            <input type="date" id="from-date" className={styles.dateInput} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="end-date" className={styles.inputLabel}>To Date</label>
            <input type="date" id="end-date" className={styles.dateInput} />
          </div>
        </div>
        <div className={styles.searchButtonContainer}>
          <button className={styles.searchButton}>Search</button>
        </div>

        <div className={styles.orText}>
          <h5>-OR-</h5>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="ref-no" className={styles.inputLabel}>Ref. No</label>
            <input type="text" id="ref-no" className={styles.dateInput} />
          </div>
        </div>

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
              <tr>
                <td>Company A</td>
                <td>NGN 1,000</td>
                <td>Monthly Subscription</td>
                <td>2024-08-01</td>
              </tr>
              <tr>
                <td>Company B</td>
                <td>NGN 2,500</td>
                <td>Utility Payment</td>
                <td>2024-08-02</td>
              </tr>
              <tr>
                <td>Company C</td>
                <td>NGN 5,000</td>
                <td>Service Fee</td>
                <td>2024-08-05</td>
              </tr>
              <tr>
                <td>Company D</td>
                <td>NGN 7,500</td>
                <td>Product Purchase</td>
                <td>2024-08-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
