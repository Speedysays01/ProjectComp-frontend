import React from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import styles from "./PrizePool.module.css";

const PrizePool = () => {
  const { ref: containerRef, inView } = useInView({
    triggerOnce: false, // Allow animation to trigger multiple times as we scroll up and down
    threshold: 0.5, // Trigger when 50% of the container is visible
  });

  return (
    <div className={styles.PrizePool}>
      <h3>PRIZE POOL</h3>
      <div
        ref={containerRef} // Attach observer here
        className={styles.container}
      >
        {/* Large rectangle container */}
        <div
          className={`${styles.largeContainer} ${
            inView ? styles.largeRectangleAnimate : styles.largeRectangleExit
          }`}
        >
          <div className={styles.rectangle + " " + styles.largeRectangle}></div>
        </div>

        {/* Small rectangles container */}
        <div
          className={`${styles.smallContainer} ${
            inView ? styles.smallRectangleAnimate : styles.smallRectangleExit
          }`}
        >
          <div className={styles.rectangle + " " + styles.smallRectangle}></div>
          <div className={styles.rectangle + " " + styles.smallRectangle}></div>
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
