"use client";

import React, { useState } from "react";

const Hero = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      padding: "20px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    leftSection: {
      flex: 2,
      marginRight: "20px",
    },
    rightSection: {
      flex: 1,
      padding: "15px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      border: "1px solid #f97316",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    filters: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    filterButton: {
      padding: "5px 10px",
      backgroundColor: "transparent",
      border: "1px solid #f97316",
      borderRadius: "5px",
      cursor: "pointer",
      color: "#f97316",
      fontWeight: "bold",
    },
    filterInput: {
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    colors: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    colorOptions: {
      display: "flex",
      gap: "5px",
    },
    colorOption: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      cursor: "pointer",
      border: "2px solid transparent",
    },
    colorOptionSelected: {
      border: "2px solid #f97316",
    },
    brandFilter: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    generationHeader: {
      fontWeight: "bold",
      fontSize: "18px",
      marginBottom: "10px",
    },
    generateText: {
      color: "#f97316",
      marginLeft: "5px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      justifyContent: "space-between",
    },
    itemCard: {
      padding: "15px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      border: "1px solid #f97316",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    itemImage: {
      width: "100%",
      borderRadius: "10px",
      objectFit: "cover",
    },
    itemDetails: {
      marginTop: "10px",
      textAlign: "center",
    },
    itemType: {
      fontWeight: "bold",
    },
    itemBrand: {
      color: "#f97316",
    },
    itemPrice: {
      marginTop: "5px",
    },
  };

  const colorOptions = [
    { color: "black" },
    { color: "red" },
    { color: "yellow" },
    { color: "blue" },
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="hero-banner-two position-relative pt-120 lg-pt-200 md-pt-150">
      <div style={styles.container}>
        {/* Left section with the generated items */}
        <div style={styles.leftSection}>
          <header style={styles.header}>
            <div style={styles.filters}>
              <button style={styles.filterButton}>Filter</button>
              <input type="date" defaultValue="Today" style={styles.filterInput} />
              <input type="search" placeholder="Search" style={styles.filterInput} />
            </div>
            <div style={styles.colors}>
              <span>Color</span>
              <div style={styles.colorOptions}>
                {colorOptions.map((option) => (
                  <div
                    key={option.color}
                    style={{
                      ...styles.colorOption,
                      backgroundColor: option.color,
                      ...(selectedColor === option.color
                        ? styles.colorOptionSelected
                        : {}),
                    }}
                    onClick={() => handleColorClick(option.color)}
                  ></div>
                ))}
              </div>
            </div>
            <div style={styles.brandFilter}>
              <span>Brand</span>
              <select style={styles.filterInput}>
                <option>All</option>
                <option>PAUL SMITH</option>
                <option>DOLCE & GABBANA</option>
                <option>DRIES VAN NOTEN</option>
              </select>
            </div>
          </header>

          {/* Grid for generated items */}
          <div>
            <div style={styles.generationHeader}>
              11/06/2024 <span style={styles.generateText}>Generate #23</span>
            </div>
            <div style={styles.grid}>
              <div style={styles.itemCard}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Cloth 1"
                  style={styles.itemImage}
                />
                <div style={styles.itemDetails}>
                  <p style={styles.itemType}>T-shirt</p>
                  <span style={styles.itemBrand}>PAUL SMITH</span>
                  <p style={styles.itemPrice}>100$</p>
                </div>
              </div>

              <div style={styles.itemCard}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Cloth 2"
                  style={styles.itemImage}
                />
                <div style={styles.itemDetails}>
                  <p style={styles.itemType}>Shorts</p>
                  <span style={styles.itemBrand}>PAUL SMITH</span>
                  <p style={styles.itemPrice}>100$</p>
                </div>
              </div>

              <div style={styles.itemCard}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Cloth 3"
                  style={styles.itemImage}
                />
                <div style={styles.itemDetails}>
                  <p style={styles.itemType}>Dress</p>
                  <span style={styles.itemBrand}>DOLCE & GABBANA</span>
                  <p style={styles.itemPrice}>100$</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section for Cloths from Generation */}
        <div style={styles.rightSection}>
          <h3>Cloths From Generation</h3>
          <div>
            <div style={styles.itemCard}>
              <img
                src="https://via.placeholder.com/150"
                alt="Cloth 1"
                style={styles.itemImage}
              />
              <div style={styles.itemDetails}>
                <p style={styles.itemType}>T-shirt</p>
                <span style={styles.itemBrand}>PAUL SMITH</span>
                <p style={styles.itemPrice}>100$</p>
              </div>
            </div>

            <div style={styles.itemCard}>
              <img
                src="https://via.placeholder.com/150"
                alt="Cloth 2"
                style={styles.itemImage}
              />
              <div style={styles.itemDetails}>
                <p style={styles.itemType}>Shorts</p>
                <span style={styles.itemBrand}>PAUL SMITH</span>
                <p style={styles.itemPrice}>100
                  $</p> </div> </div>
            <div style={styles.itemCard}>
              <img
                src="https://via.placeholder.com/150"
                alt="Cloth 3"
                style={styles.itemImage}
              />
              <div style={styles.itemDetails}>
                <p style={styles.itemType}>Dress</p>
                <span style={styles.itemBrand}>DOLCE & GABBANA</span>
                <p style={styles.itemPrice}>100$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;