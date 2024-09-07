// Dashboard.js
import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom'; // Import Link from React Router
import arrow from '../Assets/arrow.png'
const Dashboard = ({ authData }) => {
    const [error] = useState(null);

    return (
        <div>
            <Sidebar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <h4>Admin Dashboard</h4>
                    <p>Welcome Back Admin!</p>
                </div>
                {error && <p className={styles.error}>Error: {error}</p>}
                <div className={styles.dashboardCards}>
                    <div className={styles.dashboardCard}>
                        <h4>Transcations</h4>
                        <p>75,000</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Usuage Stats</h4>
                        <p>NGN 205,000</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Total Users</h4>
                        <p>701,500</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                </div>
                <div className={styles.transactionsSection}>
                    <div className={styles.transactionsHeader}>
                        <h4>Recent Orders</h4>
                    </div>
                    <table className={styles.transactionsTable}>
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
                                <td>Company A</td>
                                <td>NGN 1,000</td>
                                <td>Monthly Subscription</td>
                                <td>2024-08-01</td>
                                <td>                                 <Link to="/orderdetails">
                                    <img src={arrow} alt="View details" />
                                </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Company B</td>
                                <td>NGN 2,500</td>
                                <td>Utility Payment</td>
                                <td>2024-08-02</td>
                                <td>                                 <Link to="/orderdetails">
                                    <img src={arrow} alt="View details" />
                                </Link>
                                </td>

                            </tr>
                            <tr>
                                <td>Company C</td>
                                <td>NGN 5,000</td>
                                <td>Service Fee</td>
                                <td>2024-08-05</td>
                                <td>                                 <Link to="/orderdetails">
                                    <img src={arrow} alt="View details" />
                                </Link>
                                </td>

                            </tr>
                            <tr>
                                <td>Company D</td>
                                <td>NGN 7,500</td>
                                <td>Product Purchase</td>
                                <td>2024-08-10</td>
                                <td>                                 <Link to="/orderdetails">
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

export default Dashboard;
