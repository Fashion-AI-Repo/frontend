"use client";

import React from 'react';
import Generation from './Generation';
import ItemCard from './ItemCard';

const Grid = () => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      padding: '16px',
      backgroundColor: '#fff',
    },
  };

  return (
    <div style={styles.grid}>
      <Generation date="11/06/2024" generateNumber="23" />
      <ItemCard brand="PAUL SMITH" type="T-shirt" color="Black" price="100$" />
      <ItemCard brand="PAUL SMITH" type="Shorts" color="Black" price="100$" />
      <ItemCard brand="DOLCE & GABBANA" type="Dress" color="Orange" price="100$" />
      {/* Add more as needed */}
    </div>
  );
};

export default Grid;
