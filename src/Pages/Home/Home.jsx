import React from 'react';
import styles from './Home.module.css';
import BackgroundGrid from '../../Components/Background/Background';
import Nirmaan from '../../Components/Nirmaan/Nirmaan';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <BackgroundGrid />
      {/* <h1>
        NIRMAAN
      </h1> */}
      <Nirmaan/>

      <h2>Crafting Innovation, Empowering Minds</h2>
  
    </div>
  );
};

export default Home;
