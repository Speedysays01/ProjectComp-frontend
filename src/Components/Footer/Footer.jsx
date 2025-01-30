import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctPassword = "cyborgadmin"; // Change this to your desired password
    if (password === correctPassword) {
      navigate("/admin"); // Navigate to the Admin page
    } else {
      alert("Incorrect password!");
    }
    setShowPrompt(false);
    setPassword("");
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Website Builders</h2>
          <p>Surabhi Mhamane</p>
          <p>President, Cyborg Club</p>
          <p>Developer (MERN stack)</p>
          <br />
          <p>Paras Gandhi</p>
          <p>Vice President, Cyborg Club</p>
          <p>Designer (FIGMA)</p>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Coordinators & Leadership</h2>
          <p>Prof. Sarika Patil</p>
          <p>Coordinator (Cyborg & Ethos Club)</p>
          <br />
          <p>Sanket Patil</p>
          <p>President, ETHOS Club</p>
          <br />
          <p>Tejas Patil</p>
          <p>Vice President, ETHOS Club</p>
        </div>
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>College Management</h2>
          <p>Dr. Vikram Mane</p>
          <p>HOD, E&TC</p>
          <br />
          <p>Dr. Ajit Kate</p>
          <p>Principal, ZCOER</p>
          <br />
          <p>Prof. Uddhav Shid</p>
          <p>Director, Zeal Institutes</p>
        </div>
      </div>

      <button className={styles.adminButton} onClick={() => setShowPrompt(true)}>
        Admin Panel
      </button>

      {showPrompt && (
        <div className={styles.passwordPrompt}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.passwordInput}
          />
          <button className={styles.submitButton} onClick={handleLogin}>
            Submit
          </button>
          <button className={styles.cancelButton} onClick={() => setShowPrompt(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;
