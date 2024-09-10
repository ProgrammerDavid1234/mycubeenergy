import React from 'react';
import styles from './UserSearchDetails.module.css';
import edit from '../Assets/edit.png';

const UserSearchDetails = () => {
    return (
        <div className={styles.userDetailsContainer}>
            <div className={styles.printing}>
                <h2>User Details</h2>
                <img src={edit} alt="Print" />
            </div>

            <div className={styles.content}>
                <h3>Account Details</h3>
                <div className={styles.firstrow}>
                    <p>Account ID :</p>
                    <p>CE2494489862</p>
                </div>
                <div className={styles.secondrow}>
                    <p>Full Name :</p>
                    <p>Registration Date</p>                    
                </div>
                <div className={styles.thirdrow}>
                    <p>James Hall</p>
                    <p>08-29-2024</p>
                </div>
                <div className={styles.fourthrow}>
                    <p>Address</p>
                    <p>Telephone</p>
                </div>
                <div className={styles.fifthrow}>
                    <p>14 Army Road, Satellite Town,Lagos, Nigeria</p>
                    <p>+2348098688235</p>
                </div>
                <div className={styles.firstcolumn}>
                    <p>Country</p>
                    <p>Nigeria</p>
                </div>
                <hr />
                <div className={styles.second}>
                    <h4>Billing Details</h4>
                    <div className={styles.secondrow}>
                        <p>Username</p>
                        <p>Units Balance</p>
                    </div>
                    <div className={styles.thirdrow}>
                        <p>william.girinch@yopmail.com</p>
                        <p>12750.50</p>
                    </div>
                    <hr />
                </div>
                <div className={styles.action}>
                    <h3>Action</h3>
                    <div className={styles.actionbuttons}>
                        <button className={styles.close}>
                            <p>Close</p>
                        </button>
                        <button className={styles.disable}>
                            <p>Disable User</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSearchDetails;
