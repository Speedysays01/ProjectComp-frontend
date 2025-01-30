import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar.jsx';
import Form from './Components/Form/Form.jsx';
import Home from './Pages/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import PrizePool from './Pages/prizepool/PrizePool.jsx';
import Timeline from './Pages/timeline/TimeLine.jsx';
import Guidelines from './Pages/guidelines/Guidelines.jsx';
import Registration from './Pages/resgistration/Registration.jsx';
import ContactUs from './Pages/contactUs/ContactUs.jsx';
import Admin from './Pages/admin/Admin.jsx'; // Import Admin Page

import './App.css'; // Global styles

const App = () => {
  const location = useLocation(); // Get the current route
  const noNavBarRoutes = ['/form', '/admin']; // Hide NavBar on these pages

  return (
    <>
      {/* Conditionally render NavBar */}
      {!noNavBarRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        {/* Define a single route for the main page with scrolling sections */}
        <Route
          path="/"
          element={
            <div className="scrollableContainer">
              <section id="home">
                <Home />
              </section>

              <section id="prize-pool">
                <PrizePool />
              </section>

              <section id="timeline">
                <Timeline />
              </section>

              <section id="guidelines">
                <Guidelines />
              </section>

              <section id="registrations">
                <Registration />
              </section>

              <section id="contact-us">
                <ContactUs />
              </section>

              <section id="footer">
                <Footer />
              </section>
            </div>
          }
        />
        {/* Separate routes */}
        <Route path="/form" element={<Form />} />
        <Route path="/admin" element={<Admin />} /> {/* Admin route added */}
      </Routes>
    </>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
