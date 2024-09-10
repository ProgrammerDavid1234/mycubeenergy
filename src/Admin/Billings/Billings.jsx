import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Billings.module.css';

const Billings = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.billingsetup}>
        <div className={styles.billingheader}>
          <h4>Setup</h4>
        </div>
        <div className={styles.searchDate}>
          <h3>Please Select Action</h3>
          <div className={styles.dropdownContainer}>
            <select className={styles.dropdown}>
              <option value="unit-management">Unit Management</option>
              <option value="price-management">Price Management</option>
            </select>
          </div>
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Billings;
