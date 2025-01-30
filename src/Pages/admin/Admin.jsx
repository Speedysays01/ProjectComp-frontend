import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Admin.module.css";

const Admin = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    prizePoolCollected: 0,
    hardwareProjects: 0,
    softwareProjects: 0,
    entcRegistrations: 0,
    otherRegistrations: 0,
  });

  const fetchStats = async () => {
    try {
      const response = await axios.get("https://nirmaan-server.onrender.com/api/project/competition-stats");
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching competition stats:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className={styles.adminContainer}>
      <h2 className={styles.heading}>Admin Panel - Stats</h2>
      <div className={styles.statsGrid}>
        <div className={styles.statBox}>
        <p>{stats.totalRegistrations}</p>
          <h3>Total Registrations</h3>
       
        </div>
        <div className={styles.statBox}>
        <p>{stats.prizePoolCollected}</p>
          <h3>Prize Pool Collected (₹)</h3>
       
        </div>
        <div className={styles.statBox}>
        <p>{stats.hardwareProjects}</p>
          <h3>Hardware Projects</h3>
     
        </div>
        <div className={styles.statBox}>
        <p>{stats.softwareProjects}</p>
          <h3>Software Projects</h3>
      
        </div>
        <div className={styles.statBox}>
        <p>{stats.entcRegistrations}</p>
          <h3>E&TC Registrations</h3>
       
        </div>
        <div className={styles.statBox}>
        <p>{stats.otherRegistrations}</p>
          <h3>Other Registrations</h3>
      
        </div>
      </div>
    </div>
  );
};

export default Admin;
