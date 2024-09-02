import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png'
import styles from './Login.module.css'; // Import the CSS Module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // Set loading to true

        try {
            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/login', {
                username,
                password,
            });

            const { token, user } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/');
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false); // Set loading to false when done
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.left}><img src={logo} alt="" /></div>
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
                                disabled={loading} // Disable button when loading
                                style={{ background: 'black' }}
                            />
                        </div>

                        <NavLink to='/forgot-password'>Forgot Password</NavLink>
                        <div className={styles.account}>
                            <p>Don't have an account? <NavLink to='/signup'>Create Account</NavLink></p>
                        </div>
                    </div>

                    <div className={styles.help}>
                        <div className="d-flex">
                            <p>help@premium.com</p>
                            <p>(+243)-703-3116-320</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
