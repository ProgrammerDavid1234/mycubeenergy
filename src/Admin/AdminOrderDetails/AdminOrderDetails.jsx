import React from 'react';
import styles from './AdminOrderDetails.module.css'; // Adjusted filename
import print from '../Assets/print.png';

const OrderDetails = () => {
    return (
        <div className={styles.orderDetailsContainer}>
            <div className={styles.printing}>
                <h2>New Order Details</h2>
                <img src={print} alt="Print" />
            </div>

            <div className={styles.content}>
                <div className={styles.firstrow}>
                    <p>Transaction Ref:</p>
                    <p>WXRF-4389374</p>
                </div>
                <div className={styles.next}>
                    <div className={styles.firstone}>
                        <p>Payment Received From:</p>
                        <p>Date</p>
                    </div>
                    <div className={styles.secondone}>
                        <p>James Hall</p>
                        <p>08-29-2024</p>
                    </div>
                    <hr />
                </div>
                <div className={styles.next2}>
                    <div className={styles.firstone}>
                        <p>Package Type</p>
                        <p>Days</p>
                    </div>
                    <div className={styles.secondone}>
                        <p>Lite</p>
                        <p>30 Days</p>
                    </div>
                    <hr />
                </div>
                <div className={styles.next3}>
                    <div className={styles.firstone1}>
                        <p>Payment Method</p>
                        <p>Card</p>
                    </div>
                    <div className={styles.secondone}>
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <hr />
                <div className={styles.total}>
                    <h3>Total</h3>
                    <h3>12,500</h3>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
