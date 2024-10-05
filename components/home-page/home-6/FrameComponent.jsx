"use client";


import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <header
      style={{
        width: "1344.5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 1px 20px",
        boxSizing: "border-box",
        gap: "26.6px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "18px",
        color: "#666",
        fontFamily: "Inter",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "208.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0px 0px 13.2px",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              width: "87px",
              height: "27.5px",
              position: "relative",
              objectFit: "cover",
            }}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <div
          style={{
            width: "544px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0px 0px 13px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "22px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexShrink: "0",
              }}
            >
              <span style={{ width: "100%" }}>
                <span
                  style={{ whiteSpace: "pre-wrap" }}
                >{`Home           `}</span>
                <span style={{ fontWeight: "600", color: "#fd721b" }}>
                  Showroom
                </span>
                <span style={{ whiteSpace: "pre-wrap" }}>
                  {" "}
                  Pricing Products Blog
                </span>
              </span>
            </div>
            <img
              style={{
                position: "absolute",
                top: "7.4px",
                left: "450.2px",
                width: "11.7px",
                height: "7.6px",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>
        <div
          style={{
            width: "287px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "40px",
            color: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "16px 0px 0px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                position: "relative",
                color: "inherit",
              }}
            >
              Login
            </a>
          </div>
          <Button
            style={{ height: "54px", flex: "1" }}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#ff733b",
              borderRadius: "60px",
              "&:hover": { background: "#ff733b" },
              height: 54,
            }}
          >
            Sign up For Free
          </Button>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "1px",
          position: "relative",
          borderTop: "1px solid #000",
          boxSizing: "border-box",
          opacity: "0.52",
        }}
      />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
