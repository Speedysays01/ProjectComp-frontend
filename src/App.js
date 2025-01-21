import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './Components/NavBar/NavBar.jsx';

import Home from './Pages/Home/Home.jsx';
import PrizePool from './Pages/prizepool/PrizePool.jsx';

import './App.css'; // Global styles

const App = () => {
  return (
    <>
      <NavBar />
      <div className="scrollableContainer">
        <section id="home">
          <Home />
        </section>

        <section id="prize-pool">
          <PrizePool />
        </section>

        <section id="guidelines">
          <h1>Guidelines</h1>
        </section>

        <section id="registrations">
          <h1>Registrations</h1>
        </section>

        <section id="contact-us">
          <h1>Contact Us</h1>
        </section>
      </div>
    </>
  );
};

export default App;
