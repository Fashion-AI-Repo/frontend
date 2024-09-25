"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";

// Function to handle the sign-in process
const signIn = async (email, password) => {
  const payload = { email, password };

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, payload);
    const token = response.data.token;

    localStorage.setItem("authToken", token);

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  
  const router = useRouter();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (token) {
        try {
          localStorage.setItem("authToken", token);

          // Show success message
          setSnackbarMessage("Google sign-in successful!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);

          // Redirect to the homepage or dashboard
          setTimeout(() => {
            router.push("/");
          }, 1000);
        } catch (error) {
          console.error("Error handling Google callback:", error);
        }
      }
    };
    handleGoogleCallback();
  }, [router.query]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const result = await signIn(email, password);
      console.log("Sign in successful:", result);

      // Show success Snackbar
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error("Error signing in:", error);
      
      // Show error Snackbar
      setSnackbarMessage("Login failed! Please check your credentials.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <form className="user-data-form mt-40 lg-mt-30" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>Email</label>
              <input type="email" name="email" placeholder="hasan@gmail.com" required />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
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
            <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
              Login
            </button>
          </div>

          <div className="col-12">
            <button
              type="button"
              className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;
