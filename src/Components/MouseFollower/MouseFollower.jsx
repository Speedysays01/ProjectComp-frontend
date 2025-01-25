import React, { useState, useEffect } from "react";
import styles from "./MouseFollower.module.css";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY + window.scrollY, // Adjust for scroll position
      });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.mouseFollower}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    ></div>
  );
};

export default MouseFollower;
