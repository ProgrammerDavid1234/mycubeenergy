import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Settings.module.css';
import edit from './edit.png';

const Settings = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formValues, setFormValues] = useState({
        username: '',
        fullName: '',
        address: '',
        city: '',
        state: '',
        country: '',
        email: '',
        password: '********',
        telephone: '',
        zipcode: '',
        userId: null, // Add userId to formValues
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Function to fetch user profile
    const fetchUserProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            const response = await axios.get('https://mycubeenergy.onrender.com/api/User/profile?email=programmerdavid007%40gmail.com', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': '*/*',
                },
            });

            const { user } = response.data;
            setFormValues({
                username: user.username,
                fullName: user.fullname,
                address: user.address,
                city: user.city,
                state: user.state,
                country: user.country,
                email: user.email,
                password: '********', // Keep password hidden
                telephone: user.telephone,
                zipcode: user.zipcode,
                userId: user.userId, // Make sure this line is included
            });
        } catch (err) {
            setError('Failed to fetch user profile.');
            console.error('Error:', err.response ? err.response.data : err.message);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChangePassword = () => {
        // Logic for changing the password (could open a modal or navigate to a password change page)
        alert("Change password functionality triggered");
    };

    const handleSaveChanges = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }

            await axios.put('https://mycubeenergy.onrender.com/api/User/editProfile', formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                },
            });

            setSuccess('Profile updated successfully.');
            setIsEditing(false);
        } catch (err) {
            setError('Failed to update profile.');
            console.error('Error:', err.response ? err.response.data : err.message);
        }
    };

    const handleDeactivateAccount = async () => {
        try {
            const token = localStorage.getItem('token');
            const userId = formValues.userId; // Ensure userId is in formValues

            if (!token) {
                throw new Error('No token found');
            }
            if (!userId) {
                throw new Error('No userId found');
            }

            await axios.delete('https://mycubeenergy.onrender.com/api/User/delete-account', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': '*/*',
                },
                params: {
                    userId: userId,
                },
            });

            setSuccess('Account deactivated successfully.');
            localStorage.clear(); // Clear all local storage
            window.location.href = '/login'; // Redirect to login page
        } catch (err) {
            setError('Failed to deactivate account.');
            console.error('Error:', err.response ? err.response.data : err.message);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className={styles.settings}>
                <div className={styles.textsetting}>
                    <h4>Settings</h4>
                </div>
                <div className={styles.firstrow}>
                    <div className={styles.labelContainer}>
                        <h4 className={styles.label}>Full Name</h4>
                        <img src={edit} alt="Edit" className={styles.editIcon} onClick={handleEditClick} />
                    </div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="fullName"
                            value={formValues.fullName}
                            onChange={handleChange}
                        />
                    ) : (
                        <p className={styles.value}>{formValues.fullName}</p>
                    )}
                    <div className={styles.address}>
                        <h4 className={styles.label}>Address</h4>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                value={formValues.address}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{formValues.address}</p>
                        )}
                    </div>
                    <div className={styles.secondrow}>
                        <div className={styles.firstcolumn}>
                            <h5 className={styles.label}>City</h5>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="city"
                                    value={formValues.city}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formValues.city}</p>
                            )}
                        </div>
                        <div className={styles.secondcolumn}>
                            <h5 className={styles.label}>State</h5>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="state"
                                    value={formValues.state}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formValues.state}</p>
                            )}
                        </div>
                        <div className={styles.lastcolumn}>
                            <h5 className={styles.label}>Country</h5>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="country"
                                    value={formValues.country}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formValues.country}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.second}>
                    <div className={styles.generalrow}>
                        <div className={styles.firstcolumn}>
                            <h4 className={styles.label}>Email</h4>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formValues.email}</p>
                            )}
                        </div>
                        <div className={styles.secondcolumn}>
                            <h4 className={styles.label}>Password</h4>
                            <p>{formValues.password} (Hidden for your security)</p>
                        </div>
                    </div>
                    <div className={styles.generalcolumn}>
                        <h4 className={styles.label}>Telephone</h4>
                        {isEditing ? (
                            <input
                                type="text"
                                name="telephone"
                                value={formValues.telephone}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{formValues.telephone}</p>
                        )}
                    </div>
                    <div className={styles.generalcolumn}>
                        <h4 className={styles.label}>Zipcode</h4>
                        {isEditing ? (
                            <input
                                type="text"
                                name="zipcode"
                                value={formValues.zipcode}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{formValues.zipcode}</p>
                        )}
                    </div>
                    {isEditing && (
                        <button className={styles.saveChangesButton} onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    )}
                    <button className={styles.changePasswordButton} onClick={handleChangePassword}>
                        Change Password
                    </button>
                </div>

                {success && <p className={styles.success}>{success}</p>}
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.delete}>
                    <h5>Deactivate Account</h5>
                    <div className={styles.searchButtonContainer2}>
                        <button className={styles.searchButton2} onClick={handleDeactivateAccount}>
                            Deactivate Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
