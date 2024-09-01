import React from 'react';
import styles from './Card.module.css';  // Import the module CSS
import first from '../Assets/first.png';
import sec from '../Assets/second.png';
import last from '../Assets/last.png';

const Card = () => {
    return (
        <div>
            <div className={styles.cardContainer}>

                <div className={styles.card}>

                    <img src={first} alt="" />
                    <h3>Register</h3>
                    <p>Register to gain Access to our systems</p>
                </div>
                <div className={styles.card}>
                    <img src={sec} alt="" />
                    <h3>Connect</h3>
                    <p>Register to gain Access to our systems</p>
                </div>
                <div className={styles.card}>
                    <img src={last} alt="" />
                    <h3>Save</h3>
                    <p>Register to gain Access to our systems</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
