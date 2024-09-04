import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <h4>Dashboard</h4>
                    <p>Welcome Back Emeka!</p>
                </div>
                <div className={styles.dashboardCards}>
                    <div className={styles.dashboardCard}>
                        <h4>Units Balance</h4>
                        <p>75,000</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Wallet Balance</h4>
                        <p>NGN 205,000</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Usage Stats</h4>
                        <p>Stats content here</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                </div>
                <div className={styles.transactionsSection}>
                    <div className={styles.transactionsHeader}>
                        <h4>Transactions</h4>
                    </div>
                    <table className={styles.transactionsTable}>
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

export default Dashboard;