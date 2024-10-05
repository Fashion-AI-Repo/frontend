"use client";

import PropTypes from "prop-types";

const Component1 = ({ className = "" }) => {
  return (
    <div className="hero-banner-two position-relative pt-120 lg-pt-200 md-pt-150">
      <div
        style={{
          width: "35.5px",
          height: "31.8px",
          position: "relative",
          flexShrink: "0",
        }}
        className={className}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "31.8px",
              left: "35.5px",
              borderRadius: "10px 0px 10px 0px",
              border: "1px solid #fd721b",
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
              transform: " rotate(180deg)",
              transformOrigin: "0 0",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "calc(50% - 5.6px)",
              left: "calc(50% - 8.15px)",
              width: "16.3px",
              height: "11.2px",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
