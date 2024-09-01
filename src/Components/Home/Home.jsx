import React from 'react'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import heroImage from '../Assets/hero.png';
import Card from '../Card/Card';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
// import Hero from '../Hero/Hero'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h4 className={styles.heroTitle}>
              Uninterrupted Power, <br /> Unbeatable Prices – <br /> Energizing Africa's Future!
            </h4>
            <p className={styles.heroSubtitle}>Discover Unlimited Energy Solutions</p>
            <h5 className={styles.learnMore}>Learn More</h5>
          </div>
          <img src={heroImage} alt="Hero" className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.how}>
        <h4>HOW IT WORKS ?</h4>
      </div>
      <Card />
      <div className={styles.subscribeTitle}>
        <h2>Subscribe</h2>
      </div>
      <div className={styles.newsletterContainer}>
        <form className={styles.newsletterForm}>
          <input
            type="text"
            placeholder="Name in Full"
            className={styles.newsletterInput}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.newsletterInput}
            required
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe to News Letter
          </button>
        </form>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
