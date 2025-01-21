import React from 'react';
import styles from './Background.module.css';

// List of 12 icons from Font Awesome (using solid icons as an example)
const icons = [
  'fa-solid fa-gears',
  'fa-solid fa-code',
  'fa-solid fa-code-pull-request',
  'fa-brands fa-docker',
  'fa-brands fa-windows',
  'fa-brands fa-react',
  'fa-brands fa-node',
  'fa-brands fa-java',
  'fa-brands fa-python',
  'fa-solid fa-computer',
  'fa-solid fa-robot',
  'fa-solid fa-laptop-code',
];

const BackgroundGrid = () => {
  // Function to generate a single row of icons
  const generateRow = (rowIndex) => {
    const rowIcons = Array.from({ length: 66 }, () => {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      return randomIcon;
    });

    return (
      <div
        className={`${styles.rowContainer} ${
          rowIndex % 2 === 0 ? styles.leftToRight : styles.rightToLeft
        }`}
      >
        {rowIcons.map((icon, index) => (
          <div key={index} className={`${styles.icon} ${icon}`}></div>
        ))}
        {rowIcons.map((icon, index) => (
          <div key={`dup-${index}`} className={`${styles.icon} ${icon}`}></div>
        ))}
      </div>
    );
  };

  // Generate 16 rows for the grid
  const rows = Array.from({ length: 16 }, (_, index) => (
    <div key={index} className={styles.rowWrapper}>
      {generateRow(index)}
    </div>
  ));

  return (
    <div className={styles.glassContainer}>
      <div className={styles.gridContainer}>{rows}</div>
    </div>
  );
};

export default BackgroundGrid;
