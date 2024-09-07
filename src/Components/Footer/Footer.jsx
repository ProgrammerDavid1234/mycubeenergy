import React from 'react';
import styles from './Footer.module.css';
import logo from '../Assets/logo.png';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Align Logo and Info */}
        <div className={styles.footerSection}>
          {/* <div className={styles.logoAndInfo}> */}
            {/* <img src={logo} alt="Logo" className={styles.footerLogo} /> */}
            <h3 className={styles.footerSectionTitle}><img src={logo} alt="" /></h3>

            <div>
      
              <a href="mailto:agensi@mail.com" className={styles.contactInfo}>agensi@mail.com</a>
              <a href="tel:+1234567890" className={styles.contactInfo}>+ 12 3456 7890</a>
            </div>
          {/* </div> */}
        </div>



        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Support</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Pricing Plan</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Documentation</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Guide</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Tutorial</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Company</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>About</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Blog</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Join Us</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Press</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Partners</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Legal</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Claim</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Privacy</a></li>
            <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Terms</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
