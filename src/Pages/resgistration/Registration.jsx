import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './Registration.module.css';

import merit from './merit.png'
import participation from './participation.png'

const Registration = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleRegisterClick = () => {
    navigate('/form'); // Navigate to the Form component when the button is clicked
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>REGISTRATION</h1>
        <h3>Ready to showcase your innovation? Register now and take the first step towards winning!</h3>
        <button className={styles.registerButton} onClick={handleRegisterClick}>
          Register Now
        </button>

        <div className={styles.certificates}>
          <div className={styles.merit}>
            <img src={merit} alt="Merit certeficate" />
            <h5>Merit certificate</h5>
          </div>
          <div className={styles.participation}>
            <img src={participation} alt="Merit certeficate" />
            <h5>Participation certificate</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
