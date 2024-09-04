import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Otp.module.css';
import logo from '../Assets/logo.png';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const location = useLocation();
    const navigate = useNavigate(); // Ensure this is defined

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setSuccess('');

        try {
            const email = location.state?.email;

            if (!email) {
                throw new Error('No email provided.');
            }

            console.log('Verifying OTP for:', { email, otp });

            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/validateOTP', {
                email,
                otp,
            });

            console.log('API response:', response.data);

            if (response.status === 200) {
                setSuccess('OTP verified successfully.');
                // Navigate to password reset page or other actions
                navigate('/reset-password-success');
            } else {
                setError('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('OTP verification error:', error.response ? error.response.data : error.message);
            setError('Failed to verify OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.otpContainer}>
            <div className={styles.left}><img src={logo} alt="Logo" /></div>
            <div className={styles.right}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Verify OTP</h2>
                            <span className={styles.line}></span>
                        </div>

                        {error && <p className={styles.error}>{error}</p>}
                        {success && <p className={styles.success}>{success}</p>}

                        <div className={styles.otp}>
                            <label htmlFor="otp">OTP</label>
                            <input
                                type="text"
                                name="otp"
                                placeholder='Enter the OTP'
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.btnSub}>
                            <input
                                type="submit"
                                value={loading ? 'Verifying...' : 'Verify OTP'}
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

export default Otp;
