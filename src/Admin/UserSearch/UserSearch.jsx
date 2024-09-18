import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './UserSearch.module.css';
import Sidebar from '../Sidebar/Sidebar';
import arrow from '../Assets/arrow.png';
import { Link } from 'react-router-dom';

const UserSearch = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://mycubeenergy.onrender.com/api/admin/Admin/users', {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJPbG9uYWRlIiwianRpIjoiZDY2M2ZkYjQtMmJjOC00MGIwLWI2NjctNDE4NTE3YTNjODg5IiwiZXhwIjoxNzI2Njk2MTM1LCJpc3MiOiJNeUN1YmVFbmVyZ3kiLCJhdWQiOiJDdWJlVXNlcnMifQ.ROisPgDg9bljk2ESa56hKtqmO0pXm474jKjAKKyD1cM`, // Replace with your actual Bearer token
                    },
                });
                console.log("Fetched users:", response.data); // Debugging
                setUsers(response.data); // Adjust based on your API response structure
                setLoading(false);
            } catch (err) {
                console.error("Error fetching users:", err); // Debugging
                setError('Failed to fetch users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.accountId}>
                                        <td>{user.accountId}</td>
                                        <td>{user.email}</td>
                                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Link to={`/usersearchdetails/${user.email}`}>
                                                <img src={arrow} alt="View details" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No users found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserSearch;
