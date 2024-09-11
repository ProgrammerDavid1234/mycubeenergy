import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>
                    &times; {/* X symbol for close */}
                </button>
                <h5>Unit Management</h5>
                <label htmlFor="unitDetails">Enter Unit Details:</label>
                <input
                    id="unitDetails"
                    type="text"
                    placeholder="Enter details here"
                />
                <div className={styles.modalActions}>
                    <button onClick={onClose} className={styles.saveButton}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
