import React from 'react';
import styles from './Home.module.css';
import BackgroundGrid from '../../Components/Background/Background';
import Nirmaan from '../../Components/Nirmaan/Nirmaan';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleRegisterClick = () => {
    navigate('/form'); // Navigate to the Form component when the button is clicked
  };

  return (
    <div className={styles.homeContainer}>
      <BackgroundGrid />
      <div className={styles.content}>
        <Nirmaan className={styles.nirmaan} />
        <h2>Crafting Innovation, Empowering Minds</h2>
        <h3>
          A project competition under the department of Electronics and
          Telecommunication, ZCOER
        </h3>
        <button className={styles.registerButton} onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Home;
