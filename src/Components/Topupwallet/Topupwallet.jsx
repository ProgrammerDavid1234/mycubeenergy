import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Topupwallet.module.css';
import vector from '../FAQ/Vector.png';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';  // Import the Modal component

const Topupwallet = () => {
    const [showPaymentMenu, setShowPaymentMenu] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [savedCards, setSavedCards] = useState([
        { id: 1, type: 'Mastercard', number: '**** **** **** 1234', expiry: '12/23' },
        { id: 2, type: 'Visa', number: '**** **** **** 5678', expiry: '09/24' },
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [newCard, setNewCard] = useState({ type: '', number: '', expiry: '' });
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [modalContent, setModalContent] = useState(null); // State to store modal content

    const navigate = useNavigate();

    const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];

    const togglePaymentMenu = () => {
        setShowPaymentMenu(!showPaymentMenu);
    };

    const handlePaymentMethodClick = (method) => {
        setSelectedPaymentMethod(method);
        setShowPaymentMenu(false);
    };

    const handleProceed = () => {
        navigate('/payment');
    };

    const handleEditCard = (id) => {
        const card = savedCards.find(card => card.id === id);
        setCurrentCard(card);
        setNewCard({ type: card.type, number: card.number, expiry: card.expiry });
        setIsEditing(true);
        setModalContent('edit'); // Set modal content to edit mode
        setIsModalOpen(true); // Open modal
    };

    const handleDeleteCard = (id) => {
        setCurrentCard(savedCards.find(card => card.id === id));
        setModalContent('delete'); // Set modal content to delete mode
        setIsModalOpen(true); // Open modal
    };

    const handleConfirmDelete = () => {
        setSavedCards(savedCards.filter(card => card.id !== currentCard.id));
        setIsModalOpen(false); // Close modal after deletion
    };

    const handleAddCard = () => {
        setModalContent('add'); // Set modal content to add mode
        setIsModalOpen(true); // Open modal
    };

    const handleSaveCard = () => {
        if (isEditing) {
            setSavedCards(savedCards.map(card =>
                card.id === currentCard.id ? { ...currentCard, ...newCard } : card
            ));
            setIsEditing(false);
            setCurrentCard(null);
        } else {
            setSavedCards([...savedCards, { id: Date.now(), ...newCard }]);
        }
        setNewCard({ type: '', number: '', expiry: '' });
        setIsModalOpen(false); // Close modal after saving card
    };

    const maskCardNumber = (number) => {
        return `**** **** **** ${number.slice(-4)}`;
    };

    return (
        <div>
            <Sidebar />
            <div className={styles.topupWallet}>
                <div className={styles.header}>
                    <h4>Top up Wallet</h4>
                </div>
                <div className={styles.dropdownContainer}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="paymentMethodSelect">Fund With</label>
                        <input
                            id="paymentMethodSelect"
                            type="text"
                            className={styles.dateInput}
                            placeholder="Select Payment Method"
                            value={selectedPaymentMethod}
                            readOnly
                        />
                        <img
                            src={vector}
                            alt="Dropdown icon"
                            className={styles.vectorIcon}
                            onClick={togglePaymentMenu}
                        />
                        {showPaymentMenu && (
                            <div className={styles.dropdownMenu}>
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method}
                                        className={styles.dropdownMenuItem}
                                        onClick={() => handlePaymentMethodClick(method)}
                                    >
                                        {method}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {selectedPaymentMethod && (
                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.proceedButton}
                            onClick={handleProceed}
                        >
                            Proceed to Payment
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.savedCards}>
                <h4>Saved Cards</h4>

                {savedCards.map(card => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.cardDetails}>
                            <p className={styles.cardNumber}>{maskCardNumber(card.number)}</p>
                            <p className={styles.expiryDate}>Expiry: {card.expiry}</p>
                        </div>
                        <div className={styles.cardActions}>
                            <button
                                className={styles.editButton}
                                onClick={() => handleEditCard(card.id)}
                            >
                                Edit
                            </button>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDeleteCard(card.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    className={styles.proceedButton}
                    onClick={handleAddCard}
                >
                    Add Card
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {modalContent === 'edit' && (
                    <div className={styles.addCardForm}>
                        <h4>Edit Card</h4>
                        <input
                            type="text"
                            placeholder="Card Type"
                            value={newCard.type}
                            onChange={(e) => setNewCard({ ...newCard, type: e.target.value })}
                            className={styles.dateInput}
                        />
                        <input
                            type="text"
                            placeholder="Card Number"
                            value={newCard.number}
                            onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                            className={styles.dateInput}
                        />
                        <input
                            type="text"
                            placeholder="Expiry Date"
                            value={newCard.expiry}
                            onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                            className={styles.dateInput}
                        />
                        <button
                            className={styles.proceedButton}
                            onClick={handleSaveCard}
                        >
                            Save Changes
                        </button>
                    </div>
                )}

                {modalContent === 'delete' && (
                    <div className={styles.confirmDelete}>
                        <p>Are you sure you want to delete this card?</p>
                        <button className={styles.proceedButton} onClick={handleConfirmDelete}>
                            Confirm Delete
                        </button>
                    </div>
                )}

                {modalContent === 'add' && (
                    <div className={styles.addCardForm}>
                        <h4>Add New Card</h4>
                        <input
                            type="text"
                            placeholder="Card Type"
                            value={newCard.type}
                            onChange={(e) => setNewCard({ ...newCard, type: e.target.value })}
                            className={styles.dateInput}
                        />
                        <input
                            type="text"
                            placeholder="Card Number"
                            value={newCard.number}
                            onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                            className={styles.dateInput}
                        />
                        <input
                            type="text"
                            placeholder="Expiry Date"
                            value={newCard.expiry}
                            onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                            className={styles.dateInput}
                        />
                        <button
                            className={styles.proceedButton}
                            onClick={handleSaveCard}
                        >
                            Save Card
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Topupwallet;
