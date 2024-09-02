import React, { useState } from 'react';
import styles from './Bills.module.css'; // Import module CSS
import Sidebar from '../Sidebar/Sidebar';
import vector from '../FAQ/Vector.png'; // Ensure the correct path
import { useNavigate } from 'react-router-dom';

const Bills = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle the dropdown menu
    console.log('Menu toggled, showMenu:', !showMenu); // Debugging: Check if state is changing
  };

  const handleOptionClick = (path) => {
    navigate(path); // Navigate to the specified path
    setShowMenu(false); // Close the dropdown after clicking an option
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.billsContainer}>
        <div className={styles.textHeader}>
          <h4>Bill Payment</h4>
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.dateInput}
            placeholder="Please Select"
            readOnly
          />
          <img
            src={vector}
            alt="Dropdown icon"
            className={styles.vectorIcon}
            onClick={toggleMenu} // Toggle the dropdown menu on click
          />
          {showMenu && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownMenuItem} onClick={() => handleOptionClick('/topupunits')}>Top up Units</div>
              <div className={styles.dropdownMenuItem} onClick={() => handleOptionClick('/topupwallet')}>Top up Wallet</div>
              <div className={styles.dropdownMenuItem} onClick={() => handleOptionClick('/shareunit')}>Share Units</div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bills;
