import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from './Navbar.module.css';
import logo from './logo.jpg';

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
      <ul className={`${styles.navLinks} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.closeIcon} onClick={closeSidebar}>
          &times; {/* Close icon */}
        </div>
        <li>
          <Link
            to="home" // Scroll to the "home" section
            smooth={true}
            duration={500}
            activeClass={styles.activeLink} // Add active class when in view
            className={styles.navLink} // Default class
            spy={true} // Detect the active section
            onClick={closeSidebar}
            offset={-200}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="prize-pool" // Scroll to the "prize-pool" section
            smooth={true}
            duration={500}
            activeClass={styles.activeLink} // Add active class when in view
            className={styles.navLink} // Default class
            spy={true} // Detect the active section
            onClick={closeSidebar}
          >
            Prize Pool
          </Link>
        </li>
        <li>
          <Link
            to="guidelines" // Scroll to the "guidelines" section
            smooth={true}
            duration={500}
            activeClass={styles.activeLink} // Add active class when in view
            className={styles.navLink} // Default class
            spy={true} // Detect the active section
            onClick={closeSidebar}
          >
            Guidelines
          </Link>
        </li>
        <li>
          <Link
            to="registrations" // Scroll to the "registrations" section
            smooth={true}
            duration={500}
            activeClass={styles.activeLink} // Add active class when in view
            className={styles.navLink} // Default class
            spy={true} // Detect the active section
            onClick={closeSidebar}
          >
            Registrations
          </Link>
        </li>
        <li>
          <Link
            to="contact-us" // Scroll to the "contact-us" section
            smooth={true}
            duration={500}
            activeClass={styles.activeLink} // Add active class when in view
            className={styles.navLink} // Default class
            spy={true} // Detect the active section
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
