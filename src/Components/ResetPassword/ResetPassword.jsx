import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import styles from './ResetPassword.module.css'; // Import the CSS Module

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setSuccess('');

        try {
            console.log('Sending OTP request for:', { email });

            // Send the OTP request
            const otpResponse = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/sendOTP', {
                email,
            });

            console.log('OTP response:', otpResponse.data);

            if (otpResponse.status === 200) {
                // Navigate to the OTP verification page after successful OTP request
                navigate('/otp', { state: { email } });
            } else {
                setError('Failed to send OTP. Please check your email and try again.');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError('Failed to send OTP. Please check your email and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.resetPasswordContainer}>
            <div className={styles.left}><img src={logo} alt="Logo" /></div>
            <div className={styles.right}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Reset Your Password</h2>
                            <span className={styles.line}></span>
                        </div>

                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}

                        <div className={styles.email}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.btnSub}>
                            <input
                                type="submit"
                                value={loading ? 'Sending...' : 'Submit'}
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

export default ResetPassword;
