import React, { useState } from 'react';
import styles from './SignUp.module.css'; // Import the CSS module
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        telephone: '',
        email: '',
        city: '',
        state: '',
        zipcode: '',
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
        
        // Basic validation
        if (!formData.username || !formData.password || !formData.email) {
            setErrorMessage('Please fill in all required fields.');
            setIsLoading(false);
            return;
        }
        
        try {
            const response = await axios.post('https://mycubeenergy.onrender.com/api/User/Auth/register', {
                username: formData.username,
                password: formData.password,
                fullName: `${formData.firstName} ${formData.lastName}`,
                country: formData.country,
                address: formData.address,
                telephone: formData.telephone,
                email: formData.email,
                city: formData.city,
                state: formData.state,
                zipcode: formData.zipcode,
                unitBalance: 0,
                createdAt: new Date().toISOString(),
            });
            setSuccessMessage('Registration successful!');
            setErrorMessage('');
    
            // Redirect to login page after successful registration
            navigate('/login');
        }catch (error) {
            console.error('Error details:', error); // Log error details
            setErrorMessage(
                error.response?.data?.message || 'Error registering. Please try again.'
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
                            <h2>Sign Up!</h2>
                            <span className={styles.line}></span>
                        </div>

                        <div className={styles.inputRow}>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />

                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.inputRow}>
                            {/* Pair of input fields for row 2 */}
                            <div className={styles.inputWrapper}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label htmlFor="telephone">Telephone</label>
                                <input
                                    type="text"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="Telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Add more rows as needed */}
                        <div className={styles.inputWrapper}>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.passwordWrapper}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.submitButton}>
                            <input type="submit" value={isLoading ? 'Submitting...' : 'Submit'} disabled={isLoading} />
                        </div>

                        <div className={styles.accountLink}>
                            <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
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
