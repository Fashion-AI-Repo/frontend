"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Snackbar, Alert, CircularProgress } from "@mui/material";
import styles from "./PopUp.module.css";

const PopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    item_code: "",
    category_id: "",
    style_id: "",
    year: "",
    season_id: "",
    price: "",
    color_id: "",
    image: null,
  });

  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [categories, setCategories] = useState([]);
  const [styleApi, setStyles] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [colors, setColors] = useState([]);
  const [years] = useState(["2023", "2024", "2025"]);



  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const [categoriesResponse, stylesResponse, seasonsResponse, colorsResponse] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fashion/categories`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fashion/styles`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fashion/seasons`),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fashion/colors`),
        ]);
        console.log(categoriesResponse, " categoriesResponse")
        setCategories(categoriesResponse?.data);
        setStyles(stylesResponse?.data);
        setSeasons(seasonsResponse?.data);
        setColors(colorsResponse?.data);
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      }
    };

    fetchDropdownOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      setSnackbar({
        open: true,
        message: "Please upload an image.",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    try {
      const token = localStorage.getItem("authToken");

      if (token) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/fashion/clothes`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setSnackbar({
          open: true,
          message: "Cloth saved successfully!",
          severity: "success",
        });
        setPreviewImage(null);
        setFormData({
          item_code: "",
          category_id: "",
          style_id: "",
          year: "",
          season_id: "",
          price: "",
          color_id: "",
          image: null,
        });
        onClose();
      } else {
        setSnackbar({
          open: true,
          message: "No auth token found.",
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error saving cloth.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleColorSelect = (colorId) => {
    setFormData({ ...formData, color_id: colorId });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.columns}>
          <div className={styles.uploadSection}>
            <label className={styles.uploadLabel}>
              <input type="file" name="image" onChange={handleFileChange} className={styles.fileInput} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFzzdBy2IJIrZIlgmdqrwfOqDuESRnl0pRA&s" alt="upload icon" className={styles.uploadIcon} />
            </label>
            {previewImage && (
              <div className={styles.imagePreview}>
                <img src={previewImage} alt="Preview" className={styles.previewImg} />
              </div>
            )}
          </div>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Item Code:</label>
                <input
                  type="text"
                  name="item_code"
                  value={formData.item_code}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Category:</label>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select</option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Style:</label>
                <select name="style_id" value={formData.style_id} onChange={handleChange} required className={styles.select}>
                  <option value="">Select</option>
                  {styleApi?.map((style) => (
                    <option key={style._id} value={style._id}>{style.style_name}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Year:</label>
                <select name="year" value={formData.year} onChange={handleChange} required className={styles.select}>
                  <option value="">Select</option>
                  {years?.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Season:</label>
                <select name="season_id" value={formData.season_id} onChange={handleChange} required className={styles.select}>
                  <option value="">Select</option>
                  {seasons?.map((season) => (
                    <option key={season._id} value={season._id}>{season.season_name}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Price:</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="$"
                />
              </div>
              <div className={styles.formGroup}>
                <label>Color:</label>
                <div className={styles.colorOptions}>
                  {colors?.map((color) => (
                    <div
                      key={color._id}
                      className={`${styles.colorOption} ${formData.color_id === color._id ? styles.selected : ""}`}
                      style={{ backgroundColor: color.hexadecimal_value }}
                      onClick={() => handleColorSelect(color._id)}
                    >
                      <span className={styles.colorLabel}>{color.color_name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Upload"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PopUp;
