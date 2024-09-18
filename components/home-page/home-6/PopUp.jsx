"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./popup.css";
import { Snackbar, Alert, CircularProgress } from "@mui/material"; 
import uploadIcon from '../../../public/upload.png';

const PopUp = () => {
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
    severity: "success", // or "error"
  });

  const [categories, setCategories] = useState([]);
  const [styles, setStyles] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [colors, setColors] = useState([]); // Added colors state
  const [years] = useState(["2023", "2024", "2025"]);

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const [categoriesResponse, stylesResponse, seasonsResponse, colorsResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/fashion/categories"),
          axios.get("http://localhost:8000/api/fashion/styles"),
          axios.get("http://localhost:8000/api/fashion/seasons"),
          axios.get("http://localhost:8000/api/fashion/colors"), // Fetching colors
        ]);
        // Extract and set the actual data from the response
        setCategories(categoriesResponse?.data);
        setStyles(stylesResponse?.data);
        setSeasons(seasonsResponse?.data);
        setColors(colorsResponse?.data); // Setting colors data
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      }
    };

    fetchDropdownOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

      // Create a preview URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show loader
    const form = new FormData();
    
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });
  
    try {
      const token = localStorage.getItem("authToken");
  
      if (token) {
        await axios.post("http://localhost:8000/api/fashion/clothes", form, {
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
        setPreviewImage(null);  // Remove the preview image
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
      setLoading(false);  // Hide loader after request completes
    }
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleColorSelect = (colorId) => {
    setFormData({
      ...formData,
      color_id: colorId, // Set selected color ID
    });
  };

  return (
    <div className="hero-banner-two position-relative pt-120 lg-pt-200 md-pt-150">
      <div className="container">
        <div className="uploadSection">
          <label className="uploadLabel">
            <input type="file" name="image" onChange={handleFileChange} className="fileInput" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFzzdBy2IJIrZIlgmdqrwfOqDuESRnl0pRA&s" alt="upload icon" className="uploadIcon" />
          </label>
          {previewImage && (
            <div className="imagePreview">
              <img src={previewImage} alt="Preview" className="previewImg" />
            </div>
          )}
        </div>
        <div className="formSection">
          <form onSubmit={handleSubmit}>
            {/* Other form fields */}
            <div className="formGroup">
              <label>Item Code:</label>
              <input
                type="text"
                name="item_code"
                value={formData.item_code}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="formGroup">
              <label>Category:</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="select"
              >
                <option value="">Select</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="formGroup">
              <label>Style:</label>
              <select name="style_id" value={formData.style_id} onChange={handleChange} required className="select">
                <option value="">Select</option>
                {styles?.map((style) => (
                  <option key={style._id} value={style._id}>{style.style_name}</option>
                ))}
              </select>
            </div>
            <div className="formGroup">
              <label>Year:</label>
              <select name="year" value={formData.year} onChange={handleChange} required className="select">
                <option value="">Select</option>
                {years?.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="formGroup">
              <label>Season:</label>
              <select name="season_id" value={formData.season_id} onChange={handleChange} required className="select">
                <option value="">Select</option>
                {seasons?.map((season) => (
                  <option key={season._id} value={season._id}>{season.season_name}</option>
                ))}
              </select>
            </div>
            <div className="formGroup">
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="input"
                placeholder="$"
              />
            </div>
            <div className="formGroup">
              <label>Color:</label>
              <div className="colorOptions">
                {colors?.map((color) => (
                  <div
                    key={color._id}
                    className="colorOption"
                    style={{ backgroundColor: color.hexadecimal_value }}
                    onClick={() => handleColorSelect(color._id)} 
                  >
                    <span>{color.color_name}</span>
                  </div>
                ))}
              </div>
            </div>
            <button type="submit" className="submitButton" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Upload"}
            </button>
          </form>
        </div>
      </div>

      {/* MUI Snackbar for messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PopUp;
