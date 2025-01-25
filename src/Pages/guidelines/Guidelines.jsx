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
      ></div>
      <div
        className={`${styles.boxOrange} ${inView ? styles.slideInRight : styles.slideOutRight}`}
      ></div>
      <div
        className={`${styles.boxCyan} ${inView ? styles.slideInLeft : styles.slideOutLeft}`}
      ></div>
      <div
        className={`${styles.boxOrange} ${inView ? styles.slideInRight : styles.slideOutRight}`}
      ></div>
      <div
        className={`${styles.boxCyan} ${inView ? styles.slideInLeft : styles.slideOutLeft}`}
      ></div>
      <div
        className={`${styles.boxOrange} ${inView ? styles.slideInRight : styles.slideOutRight}`}
      ></div>
    </div>
  );
};

export default Guidelines;
