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
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJPbG9uYWRlIiwianRpIjoiYjY2ZTY5NmMtNzE1My00NmUyLTk4YzQtOThiMzAxMTkzMjY0IiwiZXhwIjoxNzI2MDg0MjUyLCJpc3MiOiJNeUN1YmVFbmVyZ3kiLCJhdWQiOiJDdWJlVXNlcnMifQ.bA-Vw80QzyoUpORqLUWff_JSinGfwejopk9Jw53Bf_4';
                const response = await axios.get('https://mycubeenergy.onrender.com/api/admin/Admin/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'accept': '*/*',
                    },
                });
                setUsers(response.data); // Adjust based on your API response structure
                setLoading(false);
            } catch (err) {
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
                                    <tr key={user.accountID}>
                                        <td>{user.accountID}</td>
                                        <td>{user.email}</td>
                                        <td>{user.regDate}</td>
                                        <td>
                                            <Link to="/usersearchdetails">
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
