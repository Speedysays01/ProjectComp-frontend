import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Admin.module.css"; // Importing modular CSS

const Admin = () => {
  // State for Competition Stats
  const [stats, setStats] = useState(null);

  // State for E&TC Contacts & Projects
  const [entcContacts, setEntcContacts] = useState([]);
  const [entcProjects, setEntcProjects] = useState([]);

  // State for Other Contacts & Projects
  const [otherContacts, setOtherContacts] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  // Fetch Competition Stats
  useEffect(() => {
    axios
      .get("https://nirmaan-server.onrender.com/api/project/competition-stats")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  // Fetch E&TC Contacts
  useEffect(() => {
    axios
      .get("https://nirmaan-server.onrender.com/api/project/entc-contacts")
      .then((response) => setEntcContacts(response.data.entcContacts || []))
      .catch((error) => console.error("Error fetching E&TC contacts:", error));
  }, []);

  // Fetch E&TC Projects
  useEffect(() => {
    axios
      .get("https://nirmaan-server.onrender.com/api/project/entc-projects")
      .then((response) => setEntcProjects(response.data.entcProjects || []))
      .catch((error) => console.error("Error fetching E&TC projects:", error));
  }, []);

  // Fetch Other Contacts
  useEffect(() => {
    axios
      .get("https://nirmaan-server.onrender.com/api/project/other-contacts")
      .then((response) => setOtherContacts(response.data.otherContacts || []))
      .catch((error) => console.error("Error fetching Other contacts:", error));
  }, []);

  // Fetch Other Projects
  useEffect(() => {
    axios
      .get("https://nirmaan-server.onrender.com/api/project/other-projects")
      .then((response) => setOtherProjects(response.data.otherProjects || []))
      .catch((error) => console.error("Error fetching Other projects:", error));
  }, []);

  return (
    <div className={styles.adminContainer}>
      {/* Stats Section */}
      <h2 className={styles.sectionTitle}>Stats</h2>
      <div className={styles.statsGrid}>
        {stats ? (
          <>
            <div className={styles.statBox}>
              <p>{stats.totalRegistrations}</p>
              <h5>Total Registrations</h5>
            </div>
            <div className={styles.statBox}>
              <p>₹{stats.prizePoolCollected}</p>
              <h5>Prize Pool Collected</h5>
            </div>
            <div className={styles.statBox}>
              <p>{stats.hardwareProjects}</p>
              <h5>Hardware Projects</h5>
            </div>
            <div className={styles.statBox}>
              <p>{stats.softwareProjects}</p>
              <h5>Software Projects</h5>
            </div>
            <div className={styles.statBox}>
              <p>{stats.entcRegistrations}</p>
              <h5>E&TC Registrations</h5>
            </div>
            <div className={styles.statBox}>
              <p>{stats.otherRegistrations}</p>
              <h5>Other Registrations</h5>
            </div>
          </>
        ) : (
          <p>Loading stats...</p>
        )}
      </div>

      {/* Tables Section */}
      <h2 className={styles.sectionTitle}>E&TC Data</h2>
      <div className={styles.tablesContainer}>
        {/* E&TC Contacts Table */}
        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>E&TC Contacts</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Project ID</th>
                <th>Name</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {entcContacts.length > 0 ? (
                entcContacts.map((contact, index) => (
                  <tr key={contact.projectID}>
                    <td>{index + 1}</td>
                    <td>{contact.projectID}</td>
                    <td>{contact.leaderName}</td>
                    <td>{contact.leaderPhoneNo}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

    
        
        {/* Other Contacts Table */}
        <div className={styles.tableWrapper}>
          <h3 className={styles.tableTitle}>Other Contacts</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Project ID</th>
                <th>Name</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {otherContacts.length > 0 ? (
                otherContacts.map((contact, index) => (
                  <tr key={contact.projectID}>
                    <td>{index + 1}</td>
                    <td>{contact.projectID}</td>
                    <td>{contact.leaderName}</td>
                    <td>{contact.leaderPhoneNo}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

   
      </div>
    </div>
  );
};

export default Admin;
