import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// Reusable ProductCard Component
const ProductCard = ({
  brand,
  price,
  itemCode,
  itemType,
  itemName,
  itemColor,
  colorHex,
  imageSrc,
  bgImageSrc,
}) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        gap: "42.9px",
        minWidth: "187px",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 0px 26px",
          gap: "20px",
        }}
      >
        <FormControl
          style={{
            height: "22px",
            width: "74.4px",
            fontFamily: "Inter",
            fontSize: "18px",
            color: "#090f32",
          }}
          variant="standard"
          sx={{
            width: "74.4px",
            height: "22px",
            "& .MuiInputBase-root": {
              minHeight: "22px",
              justifyContent: "center",
            },
            "& .MuiInputBase-input": {
              color: "#090f32",
              fontSize: 18,
              fontFamily: "Inter",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="18.4px"
                height="12px"
                src="/polygon-1-1.svg"
                alt="dropdown icon"
              />
            )}
          >
            <MenuItem>{brand}</MenuItem>
          </Select>
        </FormControl>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <div
            style={{
              position: "relative",
              textTransform: "capitalize",
              display: "inline-block",
              minWidth: "114px",
            }}
          >
            Recommended
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "5.7px 0px 0px",
            }}
          >
            <img
              style={{ width: "6.8px", height: "10.5px" }}
              src="/group-7.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0px 6px 0px 0px",
          color: "#fff",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
              padding: "0.4px 0px 0px 2px",
              backgroundImage: `url(${bgImageSrc})`,
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: "290.8px 0px 0px",
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            >
              <div
                style={{
                  borderRadius: "10px 0px 10px 0px",
                  backgroundColor: "#090f32",
                  display: "flex",
                  padding: "6px 20px",
                }}
              >
                <b
                  style={{
                    textTransform: "capitalize",
                    minWidth: "47px",
                  }}
                >
                  {price}
                </b>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ textTransform: "capitalize" }}>Item Code</div>
                <b style={{ color: "#121212" }}>{itemCode}</b>
              </div>
              <div style={{ textTransform: "capitalize" }}>{itemType}</div>
            </div>
            <b style={{ fontSize: "16px", color: "#121212" }}>{itemName}</b>
            <div style={{ display: "flex", gap: "10px", fontSize: "16px" }}>
              <div style={{ textTransform: "capitalize" }}>{itemColor}</div>
              <div
                style={{
                  height: "12.5px",
                  width: "12.5px",
                  borderRadius: "50%",
                  backgroundColor: colorHex,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
