import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Admin_Settings.module.css';
import edit from '../Assets/edit.png';

const Admin_Settings = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formValues, setFormValues] = useState({
        username: 'JohnDoe123',
        fullName: 'John Doe',
        address: '123 Main Street',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        email: 'johndoe@example.com',
        password: '********',
        telephone: '+1 555 123 4567',
        zipcode: '10001',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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

    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(
                'https://mycubeenergy.onrender.com/api/User/editProfile',
                {
                    userId: 0, // Replace with actual user ID
                    fullname: formValues.fullName,
                    address: formValues.address,
                    telephone: formValues.telephone,
                    email: formValues.email,
                    city: formValues.city,
                    state: formValues.state,
                    zipcode: formValues.zipcode
                },
                {
                    headers: {
                        'accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                }
            );
            setSuccess('Profile updated successfully.');
            setIsEditing(false); // Exit edit mode
        } catch (err) {
            setError('Failed to update profile.');
            console.error('Error:', err);
        }
    };
    const handleChangePassword = () => {
        // Logic for changing the password (could open a modal or navigate to a password change page)
        alert("Change password functionality triggered");
    };

    const handleDeactivateAccount = async () => {
        try {
            await axios.delete('https://mycubeenergy.onrender.com/api/User/delete-account', {
                headers: {
                    'accept': '*/*'
                }
            });
            setSuccess('Account deactivated successfully.');
            localStorage.clear(); // Clear all local storage
            window.location.href = '/login'; // Redirect to login page
        } catch (err) {
            setError('Failed to deactivate account.');
            console.error('Error:', err);
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
                            {isEditing ? (
                                <input
                                    type="password"
                                    name="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            ) : (
                                <p>{formValues.password} (Hidden for your security)</p>
                            )}
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
                    <button className={styles.changePasswordButton} onClick={handleChangePassword}>
                        Change Password
                    </button>
                </div>

                {isEditing && (
                    <div className={styles.changePasswordButtonContainer}>
                        <button className={styles.changePasswordButton} onClick={handleChangePassword}>
                            Change Password
                        </button>
                    </div>

                )}
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

export default Admin_Settings;
