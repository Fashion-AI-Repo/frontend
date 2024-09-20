"use client";

import React from 'react';

const Generation = ({ date, generateNumber }) => {
  const styles = {
    generation: {
      padding: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      margin: '10px 0',
    },
    imageGrid: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    },
    image: {
      width: '100px',
      height: 'auto',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.generation}>
      <p>{date}</p>
      <span>Generate #{generateNumber}</span>
      <div style={styles.imageGrid}>
        {/* Add image elements as in your design */}
        <img src="https://dressing-room.looklet.com/exported/1a9e20d1-b77a-400c-a18e-bf959d45f78a_Look_main.jpg" alt="item1" style={styles.image} />
        <img src="https://dressing-room.looklet.com/exported/1276c66c-a75e-48f3-b477-6dd460759352_Look_main.jpg" alt="item2" style={styles.image} />
        {/* Add more as per design */}
      </div>
    </div>
  );
};

export default Generation;
