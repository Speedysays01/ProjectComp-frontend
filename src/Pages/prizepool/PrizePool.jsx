import React from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import styles from "./PrizePool.module.css";
import { FaTrophy } from "react-icons/fa";

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
          <div className={styles.rectangle + " " + styles.largeRectangle}>
          <FaTrophy className={styles.trophyIcon} />
    <h5 className={styles.pool}>
      <span className={styles.light}>upto</span> <span className={styles.bold}>20K</span> in cash prizes
    </h5>
          </div>
        </div>

        {/* Small rectangles container */}
        <div
          className={`${styles.smallContainer} ${
            inView ? styles.smallRectangleAnimate : styles.smallRectangleExit
          }`}
        >
          <div className={styles.rectangle + " " + styles.smallRectangle}>
            <h5 className={styles.small}> <span className={styles.certificate}>Participation Certificates</span> <br/> for everyone! </h5>
          </div>
          <div className={styles.rectangle + " " + styles.smallRectangle}>
          <h5 className={styles.small}> <span className={styles.certificate}> Merit Certificates</span> <br/> for top 50 teams </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
