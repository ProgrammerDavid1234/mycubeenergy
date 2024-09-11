import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Regular Navbar for larger screens */}
      <nav className={`${styles.navbar} d-none d-md-flex`}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li><Link to="/about" className={styles.navLink}>About Us</Link></li>
          <li><Link to="/contact_us" className={styles.navLink}>Contact Us</Link></li>
          <li><Link to="/faq" className={styles.navLink}>FAQ</Link></li>
        </ul>
        <div className={styles.authButtons}>
          <Link to="/login" className={`${styles.authButton} ${styles.login}`}>Login</Link>
          <Link to="/signup" className={`${styles.authButton} ${styles.register}`}>Register</Link>
        </div>
      </nav>

      {/* Hamburger Menu Button for smaller screens */}
      <button className={`${styles.hamburger} d-md-none`} onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>×</button>
        <ul>
          <li><Link to="/about" className={styles.navLink} onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/faq" className={styles.navLink} onClick={toggleMenu}>FAQ</Link></li>
          <li><Link to="/login" className={`${styles.authButton} ${styles.login}`} onClick={toggleMenu}>Login</Link></li>
          <li><Link to="/signup" className={`${styles.authButton} ${styles.register}`} onClick={toggleMenu}>Register</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
