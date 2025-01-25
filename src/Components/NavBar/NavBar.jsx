import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import logo from "./logo.jpg";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Cyborg logo" className={styles.logo} />
      </div>
      <div className={styles.menuIcon} onClick={toggleSidebar}>
        &#9776; {/* Hamburger menu icon */}
      </div>
      <ul
        className={`${styles.navLinks} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.closeIcon} onClick={closeSidebar}>
          &times; {/* Close icon */}
        </div>
        <li>
          <Link
            to="prize-pool"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Prize Pool
          </Link>
        </li>
        <li>
          <Link
            to="timeline"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Timeline
          </Link>
        </li>
        <li>
          <Link
            to="guidelines"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Guidelines
          </Link>
        </li>
        <li>
          <Link
            to="registrations"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Registrations
          </Link>
        </li>
        <li>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            activeClass={styles.activeLink}
            className={styles.navLink}
            spy={true}
            onClick={closeSidebar}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
