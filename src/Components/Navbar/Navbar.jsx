import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <ul className={styles.navLinks}>
                    <li><Link to="/about" className={styles.navLink}>About Us</Link></li>
                    <li><Link to="/contact" className={styles.navLink}>Contact Us</Link></li>
                    <li><Link to="/faq" className={styles.navLink}>FAQ</Link></li>
                </ul>
                <div className={styles.authButtons}>
                    <Link to="/login" className={`${styles.authButton} ${styles.login}`}>Login</Link>
                    <Link to="/signup" className={`${styles.authButton} ${styles.register}`}>Register</Link>
                </div>
            </nav>

            {/* Off-Canvas Menu */}
        </div>
    );
};

export default Navbar;
