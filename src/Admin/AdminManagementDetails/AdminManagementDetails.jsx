import React from 'react'
import styles from './AdminManagementDetails.module.css'
import edit from '../Assets/edit.png'
const AdminManagementDetails = () => {
    return (
        <div>
            <div className={styles.admindetailsContainer}>
                <div className={styles.admindetailsheader}>
                    <h4>Admin Details</h4>
                    <img src={edit} alt="" />
                </div>
                <div className={styles.admincontent}>
                    <h5>Account Details</h5>
                </div>
                <div className={styles.admincontentrow}>
                    <h5>Admin Username:</h5>
                    <h5>johnWash</h5>
                </div>
                <div className={styles.admincontentrow2}>
                    <h5>Full Name :</h5>
                    <h5>Registration Date</h5>
                </div>
                <div className={styles.admincontentrow3}>
                    <h5>James Hall</h5>
                    <h5>08-29-2024</h5>
                </div>
                <div className={styles.admincontentrow4}>
                    <h5>Admin Email : </h5>
                    <h5>johnWash@oneworld.com</h5>
                </div>
                <hr />
                <div className={styles.action}>
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
    )
}

export default AdminManagementDetails
