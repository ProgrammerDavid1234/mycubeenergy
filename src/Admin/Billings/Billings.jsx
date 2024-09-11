import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import Sidebar from '../Sidebar/Sidebar';
import styles from './Billings.module.css';

const Billings = () => {
  const navigate = useNavigate();  // Use navigate hook for navigation

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    if (value === 'unit-management') {
      navigate('/unitpricemanagement');
    } else if (value === 'price-management') {
      navigate('/pricemanagement'); // Adjust this route if necessary
    }
  };

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
            <select
              className={styles.dropdown}
              defaultValue=""
              onChange={handleDropdownChange}  // Handle navigation based on selection
            >
              <option value="" disabled>Select Action</option>
              <option value="unit-management">Unit Management</option>
              <option value="price-management">Price Management</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billings;
