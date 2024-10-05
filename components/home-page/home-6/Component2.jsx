"use client";

import PropTypes from "prop-types";

const Component2 = ({ className = "" }) => {
  return (
    <div
      style={{ height: "31.8px", width: "35.5px", position: "relative" }}
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
            top: "0px",
            left: "0px",
            borderRadius: "10px 0px 10px 0px",
            backgroundColor: "#fd721b",
            width: "100%",
            height: "100%",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "calc(50% - 6.9px)",
            left: "calc(50% - 7.75px)",
            width: "15.6px",
            height: "13.8px",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
};

export default Component2;
