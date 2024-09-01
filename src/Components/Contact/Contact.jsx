import React from 'react';
import styles from './Contact.module.css'; // Import the CSS module
import map from '../Assets/map.png';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactFormContainer}>
          <h2 className={styles.contactHeader}>Contact Us</h2>
          <form className={styles.contactForm}>
            <input 
              type="text" 
              placeholder="Name in Full" 
              className={styles.contactInput} 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className={styles.contactInput} 
              required 
            />
            <textarea 
              placeholder="Enter Message" 
              className={styles.contactTextarea} 
              required 
            />
            <button type="submit" className={styles.contactButton}>
              Send Email
            </button>
          </form>
        </div>
        <div className={styles.contactImageContainer}>
          <img src={map} alt="Contact Us" className={styles.contactImage} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
