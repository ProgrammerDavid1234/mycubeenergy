import React, { useState } from 'react';
import styles from './Faq.module.css';
import Navbar from '../Navbar/Navbar';
import vector from '../FAQ/Vector.png';
import Footer from '../Footer/Footer';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How does MyCubeEnergy’s pay-as-you-go model work?",
            answer: "Our pay-as-you-go model allows you to purchase electricity credits based on your needs and budget. You can easily top up your account through our online platform or mobile app. As you use electricity, the smart meter deducts the corresponding amount from your credits. This model ensures transparency and flexibility, so you only pay for the electricity you consume."
        },
        {
            question: "What makes MyCubeEnergy different from traditional electricity providers?",
            answer: "MyCubeEnergy uses advanced programming and smart meters to optimize electricity generation and distribution. This allows us to provide 24/7 electricity at a lower cost compared to traditional providers. Our technology-driven approach ensures real-time monitoring and management of energy consumption, giving you greater control and reliability."
        },
        {
            question: "How do I monitor my electricity usage with MyCubeEnergy?",
            answer: "You can monitor your electricity usage in real-time through our user-friendly mobile app or online dashboard. These tools provide detailed insights into your consumption patterns, allowing you to manage your energy usage efficiently and make informed decisions to save on costs."
        },
        {
            question: "Is MyCubeEnergy available in my area?",
            answer: "MyCubeEnergy is rapidly expanding across Nigeria. To check availability in your area, simply visit our website or contact our customer service team. We are committed to bringing reliable electricity to as many communities as possible."
        },
        {
            question: "What happens if I run out of electricity credits?",
            answer: "If your credits run low, you'll receive notifications via SMS or our mobile app. You can easily top up your account online, ensuring uninterrupted service. If your credits run out, the electricity will be temporarily disconnected until you purchase more credits. Once topped up, your power will be restored immediately."
        },
        {
            question: "How do I install a MyCubeEnergy smart meter?",
            answer: "Installation of our smart meter is quick and hassle-free. Once you sign up, our team of certified technicians will schedule an appointment to install the meter at your location. The installation process typically takes less than an hour, and you'll be guided on how to manage your electricity through our app."
        },
        {
            question: "How secure is my data with MyCubeEnergy?",
            answer: "We take your privacy and data security very seriously. Our systems use advanced encryption technologies to protect your personal information and energy usage data. We are committed to maintaining the highest standards of security to ensure that your data is safe with us."
        }
    ];

    return (
        <div>
            <div className={styles.faqSection}>
                <Navbar />
                <div className={styles.textContainer}>
                    <h4 className={styles.textTitle}>FAQ</h4>
                    <p className={styles.textParagraph}>Ask us, We are here to always answer.</p>
                </div>
            </div>
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button className={styles.faqQuestion} onClick={() => toggleAnswer(index)}>
                            {faq.question} <img src={vector} alt="Toggle" />
                        </button>
                        {activeIndex === index && (
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Faq;
