import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../Components/Assets/logo.png';

const SignUp = () => {
    const [formData, setFormData] = useState({
        adminUsername: '',
        adminPassword: '',
        adminType: 'normal admin', // Default value for dropdown
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.adminUsername || !formData.adminPassword) {
            setErrorMessage('Please fill in all required fields.');
            setIsLoading(false);
            return;
        }   
        
        try {
            const response = await axios.post('https://mycubeenergy.onrender.com/api/admin/Admin/register', {
                adminUsername: formData.adminUsername,
                adminPassword: formData.adminPassword,
                adminType: formData.adminType,
            });

            setSuccessMessage('Admin registration successful!');
            setErrorMessage('');
            navigate('/admin_login');
        } catch (error) {
            console.error('Error details:', error);
            setErrorMessage(
                error.response?.data?.message || 'Error registering admin. Please try again.'
            );
            setSuccessMessage('');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.leftSection}>
                <img src={logo} alt="Company Logo" />
            </div>
            <div className={styles.rightSection}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Admin Sign Up</h2>
                            <span className={styles.line}></span>
                        </div>

                        {/* Admin Username */}
                        <div className={styles.inputWrapper}>
                            <label htmlFor="adminUsername">Admin Username</label>
                            <input
                                type="text"
                                id="adminUsername"
                                name="adminUsername"
                                placeholder="Admin Username"
                                value={formData.adminUsername}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Admin Password */}
                        <div className={styles.passwordWrapper}>
                            <label htmlFor="adminPassword">Admin Password</label>
                            <input
                                type="password"
                                id="adminPassword"
                                name="adminPassword"
                                placeholder="Admin Password"
                                value={formData.adminPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Admin Type Dropdown */}
                        <div className={styles.inputWrapper}>
                            <label htmlFor="adminType">Admin Type</label>
                            <select
                                id="adminType"
                                name="adminType"
                                value={formData.adminType}
                                onChange={handleChange}
                                required
                            >
                                <option value="normal admin">Normal Admin</option>
                                <option value="superadmin">Superadmin</option>
                            </select>
                        </div>

                        <div className={styles.submitButton}>
                            <input
                                type="submit"
                                value={isLoading ? 'Submitting...' : 'Submit'}
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.accountLink}>
                            <p>Already have an account? <NavLink to='/admin_login'>Login</NavLink></p>
                        </div>

                        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
