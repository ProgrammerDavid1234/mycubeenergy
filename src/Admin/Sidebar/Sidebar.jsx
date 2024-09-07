import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css'; // Import CSS Module
import logo from '../../Components/Assets/logo.png';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname); // Update active tab on location change
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className={styles.sidebarContainer}>
      <Link to='/'>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </Link>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link
            to="/dashboard"
            className={`${styles.menuLink} ${activeTab === "/dashboard" ? styles.active : ""}`}
            onClick={() => handleTabClick("/dashboard")}
          >
            <IoHomeOutline className={styles.icon} />Dashboard
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/transactions"
            className={`${styles.menuLink} ${activeTab === "/transactions" ? styles.active : ""}`}
            onClick={() => handleTabClick("/transactions")}
          >
            <FaRegChartBar className={styles.icon} />Transactions
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/bills"
            className={`${styles.menuLink} ${activeTab === "/bills" ? styles.active : ""}`}
            onClick={() => handleTabClick("/bills")}
          >
            <FaRegHeart className={styles.icon} />Bill Payment
          </Link>
        </li>
      </ul>
      <ul className={styles.bottomList}>
        <li className={styles.bottomItem}>
          <Link
            to="/settings"
            className={`${styles.bottomLink} ${activeTab === "/settings" ? styles.active : ""}`}
            onClick={() => handleTabClick("/settings")}
          >
            <CiSettings className={styles.icon} />Settings
          </Link>
        </li>
        <li className={styles.bottomItem}>
          <Link
            to="/"
            className={`${styles.bottomLink} ${activeTab === "/logout" ? styles.active : ""}`}
            onClick={() => handleTabClick("/logout")}
          >
            <MdOutlinePowerSettingsNew className={styles.icon} />Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;