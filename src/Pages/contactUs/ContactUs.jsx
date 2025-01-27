import React from "react";
import styles from "./ContactUs.module.css";
import cyborg from '../../Components/NavBar/logo.jpg';
import ethos from './ethos.jpg'
import { FaPhone } from "react-icons/fa6";


const ContactUs = () => {
  return (

    <div className={styles.contactContainer}>
      <h4 className={styles.title}>Contact Us</h4>
      <div className={styles.contactWrapper}>
        {/* Contact 1 */}
        <div className={styles.contactCard}>
          <img
            src={cyborg} // Replace with the actual path to your logo image
            alt="Logo 1"
            className={styles.cyblogo}
          />
          <h5 className={styles.contactTitle}>CYBORG CLUB</h5>
          <p className={styles.description}>
          Contact the technical support team for help with registrations and submissions.
          </p>
          <div className={styles.numbers}>
  <FaPhone className={styles.phoneIcon} />
            <div className={styles.picon}>
          <p className={styles.name}>Surabhi Mhamane (President)</p>
          <p className={styles.phone}>9326004793</p>
          <p className={styles.name}>Paras Gandhi (Vice-President)</p>
          <p className={styles.phone}> 9503019680</p>
          </div>
          </div>
        </div>

        {/* Contact 2 */}
        <div className={styles.contactCard}>
          <img
            src={ethos} // Replace with the actual path to your logo image
            alt="Logo 2"
            className={styles.logo}
          />
          <h5 className={styles.contactTitle}>ETHOS CLUB</h5>
          <p className={styles.description}>
          Reach out to the event cordinator for general inquires and assistance

          </p>
          
          <div className={styles.numbers}>
          <FaPhone className={styles.phoneIcon} />
            <div className={styles.picon}>
          <p className={styles.name}> Sanket Patil (President)</p>
          <p className={styles.phone}>9172859151</p>
          <p className={styles.name}>Tejas Pawar (Vice-President)</p>
          <p className={styles.phone}>7588507120</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
