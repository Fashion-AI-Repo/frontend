"use client";

import React from 'react';

const ItemCard = ({ brand, type, color, price }) => {
  const styles = {
    itemCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    itemDetails: {
      textAlign: 'left',
    },
    itemType: {
      fontWeight: 'bold',
      fontSize: '18px',
    },
    itemBrand: {
      display: 'block',
      margin: '4px 0',
      color: '#555',
    },
    itemColor: {
      margin: '4px 0',
    },
    itemPrice: {
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.itemCard}>
      <div style={styles.itemDetails}>
        <p style={styles.itemType}>{type}</p>
        <span style={styles.itemBrand}>{brand}</span>
        <p style={styles.itemColor}>Color: {color}</p>
        <p style={styles.itemPrice}>Price: {price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
