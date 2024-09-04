import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import styles from './NewPassword.module.css'; // Import the CSS Module

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    
    // Ensure email is retrieved correctly from location state
    const email = location.state?.email;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            console.log('Setting new password for:', { email, password });

            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/changePassword', {
                email,
                newPassword: password, // Ensure the field matches the API
            });

            console.log('Password reset response:', response.data);

            if (response.status === 200) {
                setSuccess('Your password has been successfully reset.');
                // Navigate to login page or another relevant page
                navigate('/login');
            } else {
                setError('Failed to reset password. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError('Failed to reset password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.newPasswordContainer}>
            <div className={styles.left}><img src={logo} alt="Logo" /></div>
            <div className={styles.right}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Set Your New Password</h2>
                            <span className={styles.line}></span>
                        </div>

                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}

                        <div className={styles.password}>
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your new password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.password}>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your new password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.btnSub}>
                            <input
                                type="submit"
                                value={loading ? 'Submitting...' : 'Submit'}
                                disabled={loading}
                                style={{ background: 'black' }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
