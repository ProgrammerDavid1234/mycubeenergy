import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../Assets/logo.png';
import styles from './Login.module.css'; // Import the CSS Module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Check for stored token on mount
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                navigate('/dashboard');
            }
        };
        checkToken();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
    
        try {
            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/login', {
                username,
                password,
            });
    
            if (response.status === 200) {
                // Store the token and username using AsyncStorage
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('username', username);
    
                // Navigate to the dashboard on successful login
                navigate('/dashboard');
            } else if (response.status === 401) {
                setError('Invalid username or password.');
            } else {
                setError('Login failed. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setError('Login failed. Please try again later.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className={styles.loginContainer}>
            <div className={styles.left}>
                <img src={logo} alt="Logo" />
            </div>
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
