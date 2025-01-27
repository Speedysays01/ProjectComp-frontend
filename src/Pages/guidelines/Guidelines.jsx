import React from "react";
import { useInView } from "react-intersection-observer"; // For scroll tracking
import styles from "./Guidelines.module.css"; // Modular CSS

const Guidelines = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow the animation to trigger multiple times as we scroll
    threshold: 0.35, // Trigger when 35% of the section is visible
  });

  return (
    <div ref={ref} className={styles.container}>
      <h3>GUIDELINES</h3>
      <div
        className={`${styles.boxCyan} ${inView ? styles.slideInLeft : styles.slideOutLeft}`}
      >
        <h4 className={styles.guideline}>Open to all ZCOER stuents.</h4>
      </div>
      <div
        className={`${styles.boxOrange} ${inView ? styles.slideInRight : styles.slideOutRight}`}
      >
           <h4 className={styles.guideline}>Teams can have a max of 4 members.</h4>
      </div>
      <div
        className={`${styles.boxCyan} ${inView ? styles.slideInLeft : styles.slideOutLeft}`}
      >
           <h4 className={styles.guideline}>Submission of a functional prototype is mandetory.</h4>
      </div>
      <div
        className={`${styles.boxOrange} ${inView ? styles.slideInRight : styles.slideOutRight}`}
      >
           <h4 className={styles.guideline}>Teams must adhere to deadlines and instructions.</h4>
      </div>
      <div
        className={`${styles.boxCyan} ${inView ? styles.slideInLeft : styles.slideOutLeft}`}
      >
           <h4 className={styles.guideline}>Participants must bring their own equipment.</h4>
      </div>
      <div
        className={`${styles.boxOrange} ${inView ? styles.slideInRight : styles.slideOutRight}`}
      >
           <h4 className={styles.guideline}>Bonus points for addressing real-world challanges.</h4>
      </div>
    </div>
  );
};

export default Guidelines;
