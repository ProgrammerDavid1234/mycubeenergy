import React from 'react';
import styles from './UserSearch.module.css';
import Sidebar from '../Sidebar/Sidebar';
import arrow from '../Assets/arrow.png';
import { Link } from 'react-router-dom';

const UserSearch = () => {
    return (
        <div>
            <Sidebar />
            <div className={styles.userContainer}>
                {/* Search Users Header */}
                <div className={styles.userHeader}>
                    <h4>Search Users</h4>
                </div>

                {/* Search Date Section */}
                <div className={styles.searchDate}>
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

                {/* All Users Header */}

                {/* Users Table Section */}
                <div className={styles.userSection}>
                    <div className={styles.userHeader}>
                        <h4>All Users</h4>
                    </div>

                    <table className={styles.userTable}>
                        <thead>
                            <tr>
                                <th>AccountID</th>
                                <th>E-Mail</th>
                                <th>Reg. Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456</td>
                                <td>user1@example.com</td>
                                <td>2024-07-21</td>
                                <td>
                                    <Link to="/usersearchdetails">
                                        <img src={arrow} alt="View details" />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>789012</td>
                                <td>user2@example.com</td>
                                <td>2024-07-25</td>
                                <td>
                                    <Link to="/usersearchdetails">
                                        <img src={arrow} alt="View details" />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>345678</td>
                                <td>user3@example.com</td>
                                <td>2024-08-05</td>
                                <td>
                                    <Link to="/usersearchdetails">
                                        <img src={arrow} alt="View details" />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>901234</td>
                                <td>user4@example.com</td>
                                <td>2024-08-10</td>
                                <td>
                                    <Link to="/usersearchdetails">
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

export default UserSearch;
