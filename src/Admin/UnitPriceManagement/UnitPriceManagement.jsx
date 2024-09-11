import React, { useState } from 'react';
import styles from './UnitPriceManagement.module.css';
import Sidebar from '../Sidebar/Sidebar';
import edit from '../Assets/editnew.svg';
import trash from '../Assets/trash.svg';
import Modal from '../Modal/Modal'; // Import your modal component

const UnitPriceManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div>
            <Sidebar />
            <div className={styles.unitpricecontent}>
                <div className={styles.unitpriceheader}>
                    <h4>Unit Price Management</h4>
                </div>
                <div className={styles.divcontainer}>
                    <div className={styles.content}>
                        <h4>Unit Price 5.0</h4>
                        <div className={styles.icons}>
                            <img src={edit} alt="Edit" />
                            <img src={trash} alt="Delete" />
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <h5 onClick={handleOpenModal} className={styles.createNew}>
                            Create New
                        </h5>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default UnitPriceManagement;
