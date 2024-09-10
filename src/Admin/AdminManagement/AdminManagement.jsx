import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './AdminManagement.module.css';
import { Link } from 'react-router-dom';
import arrow from '../Assets/arrow.png'; // Ensure you have the correct path to the arrow image

const AdminManagement = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.AdminManagement}>
        <div className={styles.header}>
          <h4>Admin Management</h4>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.dateInputs}>
            <input
              type="date"
              className={styles.dateInput}
              placeholder="From"
            />
            <span className={styles.orText}>- OR -</span>
            <input
              type="date"
              className={styles.dateInput}
              placeholder="To"
            />
          </div>
          <input
            type="text"
            className={styles.usernameInput}
            placeholder="Search Username"
          />
          <button className={styles.searchButton}>Search</button>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.userSection}>
            <div className={styles.userHeader}>
              <h4>Admin Details</h4>
            </div>
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Admin Type</th>
                  <th>Reg. Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>admin1</td>
                  <td>Super Admin</td>
                  <td>2024-07-21</td>
                  <td>
                    <Link to="/adminmanagementdetails">
                      <img src={arrow} alt="View details" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>admin2</td>
                  <td>Editor</td>
                  <td>2024-07-25</td>
                  <td>
                    <Link to="/adminmanagementdetails">
                      <img src={arrow} alt="View details" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>admin3</td>
                  <td>Moderator</td>
                  <td>2024-08-05</td>
                  <td>
                    <Link to="/adminmanagementdetails">
                      <img src={arrow} alt="View details" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>admin4</td>
                  <td>Viewer</td>
                  <td>2024-08-10</td>
                  <td>
                    <Link to="/adminmanagementdetails">
                      <img src={arrow} alt="View details" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManagement;
