import React, { useState, useEffect } from "react";
import styles from "./Nirmaan.module.css";

const Nirmaan = () => {
  const [text, setText] = useState("NIRMAAN"); // Default text is NIRMAAN
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Random letters for animation

  const startAnimation = (originalText) => {
    let iteration = 0;

    const interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval); // Stop once the text is fully revealed
      }

      iteration += 1 / 3;
    }, 60); // Speed of the animation
  };

  // Effect to run the animation on page load
  useEffect(() => {
    startAnimation("NIRMAAN"); // Trigger animation on load
  }, []);

  return (
    <div className={styles.container}>
      <h1
        className={styles.heading}
        data-value="NIRMAAN"
        onMouseOver={() => startAnimation("NIRMAAN")} // Trigger animation on hover
      >
        {text}
      </h1>
    </div>
  );
};

export default Nirmaan;
