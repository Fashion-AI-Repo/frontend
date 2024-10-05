"use client";

import PropTypes from "prop-types";

const NavbarElements = ({ className = "" }) => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 1px",
        boxSizing: "border-box",
        gap: "12.2px",
        flexShrink: "0",
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
            width: "182.4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0px 0px 11px",
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
            padding: "0px 0px 13.1px",
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
            <h3
              style={{
                margin: "0",
                position: "absolute",
                top: "0px",
                left: "0px",
                fontSize: "inherit",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexShrink: "0",
                fontFamily: "inherit",
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
            </h3>
            <img
              style={{
                position: "absolute",
                top: "7.1px",
                left: "450.3px",
                width: "11.7px",
                height: "7.6px",
                zIndex: "1",
              }}
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "20px",
            color: "#ff733b",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "11.9px 0px 0px",
            }}
          >
            <img
              style={{ width: "30px", height: "25.5px", position: "relative" }}
              loading="lazy"
              alt=""
              src="/union.svg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "13.7px 0px 0px",
            }}
          >
            <a
              style={{
                textDecoration: "underline",
                position: "relative",
                fontWeight: "500",
                color: "inherit",
                display: "inline-block",
                minWidth: "64px",
              }}
            >
              History
            </a>
          </div>
          <img
            style={{
              height: "49.4px",
              width: "49.4px",
              position: "relative",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            loading="lazy"
            alt=""
            src="/ellipse-6@2x.png"
          />
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

NavbarElements.propTypes = {
  className: PropTypes.string,
};

export default NavbarElements;
