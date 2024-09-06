import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import styles from './Login.module.css'; // Import the CSS Module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/login', {
                username,
                password,
            });

            // Handle successful response
            if (response.status === 200) {
                // Navigate to the dashboard without storing any data
                navigate('/dashboard');
            } else {
                setError('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.left}><img src={logo} alt="Logo" /></div>
            <div className={styles.right}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Welcome Back!</h2>
                            <span className={styles.line}></span>
                        </div>

                        {error && <p className={styles.error}>{error}</p>}

                        <div className={styles.username}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder='Username'
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.password}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.btnSub}>
                            <input
                                type="submit"
                                value={loading ? 'Loading...' : 'Submit'}
                                disabled={loading}
                                style={{ background: 'black' }}
                            />
                        </div>

                        <NavLink to='/resetpassword'>Forgot Password</NavLink>
                        <div className={styles.account}>
                            <p>Don't have an account? <NavLink to='/signup'>Create Account</NavLink></p>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Login;
