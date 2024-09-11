import React from 'react'
import styles from './ContactUs.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const ContactUs = () => {
  return (
    <div>
        <Navbar />
        <div className={styles.contactus}>
            <div className={styles.contactusheader}>
                <h5>Contact Us</h5>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs
