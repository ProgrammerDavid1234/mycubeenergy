import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './UserSearchDetails.module.css';
import edit from '../Assets/edit.png';

const UserSearchDetails = () => {
    const { email } = useParams(); // Ensure 'accountId' matches the route parameter
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("Received email:", email); // Debugging accountId

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://mycubeenergy.onrender.com/api/admin/Admin/users/${email}`, {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJPbG9uYWRlIiwianRpIjoiZDY2M2ZkYjQtMmJjOC00MGIwLWI2NjctNDE4NTE3YTNjODg5IiwiZXhwIjoxNzI2Njk2MTM1LCJpc3MiOiJNeUN1YmVFbmVyZ3kiLCJhdWQiOiJDdWJlVXNlcnMifQ.ROisPgDg9bljk2ESa56hKtqmO0pXm474jKjAKKyD1cM`, // Replace with your actual Bearer token
                    },
                });
                console.log(response.data); // Debugging API response
                setUserDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user details:', error);
                setError('Failed to fetch user details');
                setLoading(false);
            }
        };

        if (email) {
            fetchUserDetails();
        }
    }, [email]);

    if (loading) {
        return <p>Loading user details...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!userDetails) {
        return <p>No details available for this user.</p>;
    }

    return (
        <div className={styles.userDetailsContainer}>
            <div className={styles.printing}>
                <h2>User Details</h2>
                <img src={edit} alt="Edit" />
            </div>

            <div className={styles.content}>
                <h3>Account Details</h3>
                <div className={styles.firstrow}>
                    <p>Account ID :</p>
                    <p>{userDetails?.accountId || 'N/A'}</p>
                </div>
                <div className={styles.secondrow}>
                    <p>Full Name :</p>
                    <p>Registration Date</p>                    
                </div>
                <div className={styles.thirdrow}>
                    <p>{userDetails?.fullname || 'N/A'}</p>
                    <p>{userDetails?.createdAt ? new Date(userDetails.createdAt).toLocaleDateString() : 'N/A'}</p>
                </div>
                <div className={styles.fourthrow}>
                    <p>Address</p>
                    <p>Telephone</p>
                </div>
                <div className={styles.fifthrow}>
                    <p>{userDetails?.address || 'N/A'}</p>
                    <p>{userDetails?.phone || 'N/A'}</p>
                </div>
                <div className={styles.firstcolumn}>
                    <p>Country</p>
                    <p>{userDetails?.country || 'N/A'}</p>
                </div>
                <hr />
                <div className={styles.second}>
                    <h4>Billing Details</h4>
                    <div className={styles.secondrow}>
                        <p>Username</p>
                        <p>Units Balance</p>
                    </div>
                    <div className={styles.thirdrow}>
                        <p>{userDetails?.email || 'N/A'}</p>
                        <p>{userDetails?.unitsBalance || 'N/A'}</p>
                    </div>
                    <hr />
                </div>
                <div className={styles.action}>
                    <h3>Action</h3>
                    <div className={styles.actionbuttons}>
                        <button className={styles.close}>
                            <p>Close</p>
                        </button>
                        <button className={styles.disable}>
                            <p>Disable User</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSearchDetails;
