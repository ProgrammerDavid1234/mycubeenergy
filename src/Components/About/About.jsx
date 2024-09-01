import React from 'react';
import styles from './About.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import light from './light.png';

const About = () => {
  return (
    <div>
      <div className={styles.aboutSection}>
        <Navbar />
        <div className={styles.textContainer}>
          <h4 className={styles.textTitle}>About Us</h4>
          <p className={styles.textParagraph}>Something about us to let you know what we do.</p>
        </div>
      </div>
      <div className={styles.aboutDetails}>
        <h5 className={styles.detailsText}>
          Welcome to MyCubeEnergy, Nigeria’s innovative solution to reliable, affordable, and sustainable electricity. Born out of the need to revolutionize the energy landscape, MyCubeEnergy is committed to delivering 24/7 electricity to homes and businesses across Nigeria at the most competitive rates. We believe that access to electricity should not be a luxury but a basic right for everyone.
          At MyCubeEnergy, we harness the power of cutting-edge technology and smart programming to ensure that our customers never experience a blackout. Our unique approach integrates smart meters and advanced algorithms to optimize electricity generation and distribution, ensuring maximum efficiency and cost-effectiveness. This technology allows us to monitor and manage energy consumption in real time, providing our customers with a seamless experience and total control over their energy use.
          Our pay-as-you-go model is designed with the customer in mind, offering flexibility and transparency. With MyCubeEnergy, you only pay for the electricity you use—no hidden charges, no unexpected bills. This model empowers you to manage your energy consumption according to your budget, ensuring that you get the most out of every naira.
          Our mission is to bridge the energy gap in Nigeria by providing reliable electricity that empowers individuals, communities, and businesses to thrive. We are passionate about leveraging the power of programming and smart technology to drive change and create a brighter, more sustainable future for all.
          Join us on our journey to light up Nigeria, one cube of energy at a time. Welcome to the future of electricity. Welcome to MyCubeEnergy.
        </h5>
        <img src={light} alt="Light" className={styles.detailsImage} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
