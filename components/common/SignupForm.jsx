"use client";

import { useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material"; // MUI for notifications

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    console.log("dddddddddddddddddddddddddddd")
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSnackbarOpen(true);
      return;
    }

    // Prepare the payload
    const payload = { displayName, email, password };

    try {
      const response = await axios.post("http://localhost:8000/auth/register", payload);
      console.log("Registration successful:", response.data);

      setSuccess("Registration successful");
      setError(null);
      setSnackbarOpen(true);

      // Reset form
      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Registration error:", err);
      setError("Failed to register. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <>
      <form className="user-data-form mt-40 lg-mt-30" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>dd</label>
              <input
                type="text"
                name="displayName"
                placeholder="Rashed Kabir"
                value={formData.displayName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="hasan@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="placeholder_icon" onClick={handleTogglePassword}>
                <span className="d-flex align-items-center">
                  {showPassword ? (
                    <i className="fa-regular fa-eye"></i>
                  ) : (
                    <i className="fa-regular fa-eye-slash"></i>
                  )}
                </span>
              </span>
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="placeholder_icon" onClick={handleToggleConfirmPassword}>
                <span className="d-flex align-items-center">
                  {showConfirmPassword ? (
                    <i className="fa-regular fa-eye"></i>
                  ) : (
                    <i className="fa-regular fa-eye-slash"></i>
                  )}
                </span>
              </span>
            </div>
          </div>

          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="agree_to_policy" required />
                <label htmlFor="agree_to_policy">
                  By clicking &quot;SIGN UP&quot; I agree to the Terms and
                  Conditions and Privacy Policy.
                </label>
              </div>
            </div>
          </div>

          <div className="col-12">
            <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
              Sign Up
            </button>
          </div>
        </div>
      </form>

      {/* Snackbar for success/error messages */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {error || success}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignupForm;
