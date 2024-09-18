"use client";

import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    // Check if user is logged in by checking the token in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);

      // Optionally, you can fetch user info like name from the token or from an API
      const storedUserName = localStorage.getItem("userName"); // Assuming username is stored in localStorage
      setUserName(storedUserName || "User"); // Default to "User" if the name is not available
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    router.push("/login"); // Redirect to login page
  };

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-two ${navbar ? "fixed" : ""
        }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="login-btn-one fs-17 fw-500 tran3s me-3"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="contact-btn-two fs-17 fw-500 tran3s d-none d-lg-block"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <span className="fs-17 fw-500 me-3">Hello, {userName}</span>
                <button
                  onClick={handleLogout}
                  className="login-btn-one fs-17 fw-500 tran3s"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
