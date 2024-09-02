import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Topupunit.module.css';
import vector from '../FAQ/Vector.png'; // Ensure the correct path
import { useNavigate } from 'react-router-dom';

const Topupunit = () => {
    const [showPackageMenu, setShowPackageMenu] = useState(false);
    const [showDaysMenu, setShowDaysMenu] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');
    const [selectedDays, setSelectedDays] = useState('');
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const packagePrices = {
        'Package 1': 65,
        'Package 2': 55,
        'Package 3': 45,
    };

    const togglePackageMenu = () => {
        setShowPackageMenu(!showPackageMenu);
    };

    const toggleDaysMenu = () => {
        setShowDaysMenu(!showDaysMenu);
    };

    const handlePackageClick = (pkg) => {
        setSelectedPackage(pkg);
        calculatePrice(pkg, selectedDays);
        setShowPackageMenu(false);
    };

    const handleDaysClick = (days) => {
        setSelectedDays(days);
        calculatePrice(selectedPackage, days);
        setShowDaysMenu(false);
    };

    const calculatePrice = (pkg, days) => {
        if (pkg && days) {
            const dailyPrice = packagePrices[pkg];
            const totalPrice = dailyPrice * parseInt(days, 10);
            setPrice(totalPrice);
        }
    };

    const handleProceed = () => {
        // Navigate to the payment page or handle payment logic here
        navigate('/payment');
    };

    return (
        <div>
            <Sidebar />
            <div className={styles.topupunit}>
                <div className={styles.textHeaderTopUp}>
                    <h4>Top up Units</h4>
                </div>
                <div className={styles.dropdownContainer}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="">Package</label>
                        <input
                            type="text"
                            className={styles.dateInput}
                            placeholder="Select Package"
                            value={selectedPackage}
                            readOnly
                        />
                        <img
                            src={vector}
                            alt="Dropdown icon"
                            className={styles.vectorIcon}
                            onClick={togglePackageMenu}
                        />
                        {showPackageMenu && (
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownMenuItem} onClick={() => handlePackageClick('Package 1')}>Package 1</div>
                                <div className={styles.dropdownMenuItem} onClick={() => handlePackageClick('Package 2')}>Package 2</div>
                                <div className={styles.dropdownMenuItem} onClick={() => handlePackageClick('Package 3')}>Package 3</div>
                            </div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="">Days</label>
                        <input
                            type="text"
                            className={styles.dateInput}
                            placeholder="Select Days"
                            value={selectedDays}
                            readOnly
                        />
                        <img
                            src={vector}
                            alt="Dropdown icon"
                            className={styles.vectorIcon}
                            onClick={toggleDaysMenu}
                        />
                        {showDaysMenu && (
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownMenuItem} onClick={() => handleDaysClick('1')}>1 Day</div>
                                <div className={styles.dropdownMenuItem} onClick={() => handleDaysClick('7')}>7 Days</div>
                                <div className={styles.dropdownMenuItem} onClick={() => handleDaysClick('30')}>30 Days</div>
                            </div>
                        )}
                    </div>
                </div>

                {selectedPackage && selectedDays && (
                    <p className={styles.resultText}>{selectedDays} days of {selectedPackage} at ${price.toFixed(2)}</p>
                )}

                {selectedPackage && selectedDays && (
                    <div className={styles.searchButtonContainer}>
                        <button className={styles.searchButton} onClick={handleProceed}>Proceed to Payment</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Topupunit;
