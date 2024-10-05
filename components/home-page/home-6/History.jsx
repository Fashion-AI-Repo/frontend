"use client";

import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
  } from "@mui/material";
  import NavbarElements from "./Nav";
  
  const History = () => {
    return (
      <div
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "13px 0px 0.1px",
          boxSizing: "border-box",
          gap: "71.1px",
          lineHeight: "normal",
          letterSpacing: "normal",
        }}
      >
        <main
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 58px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <section
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "38.4px",
              maxWidth: "100%",
              textAlign: "left",
              fontSize: "18px",
              color: "#090f32",
              fontFamily: "Inter",
            }}
          >
            <NavbarElements />
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "15.4px",
                flexShrink: "0",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  padding: "0px 0px 8.5px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "60px",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20px",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "48px",
                        maxWidth: "100%",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "40.5px",
                          maxWidth: "100%",
                        }}
                      >
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "0px 6px 0px 0px",
                            boxSizing: "border-box",
                            gap: "5px",
                            maxWidth: "100%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6.5px 10px 0px 0px",
                            }}
                          >
                            <img
                              style={{
                                width: "24px",
                                height: "24px",
                                position: "relative",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                              alt=""
                              src="/mask-group@2x.png"
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "9px 0px 0px",
                              fontSize: "16px",
                              color: "rgba(9, 15, 50, 0.5)",
                            }}
                          >
                            <a
                              style={{
                                textDecoration: "none",
                                position: "relative",
                                textTransform: "capitalize",
                                color: "inherit",
                              }}
                            >
                              Date
                            </a>
                          </div>
                          <div
                            style={{
                              height: "36px",
                              width: "138px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "0px 20px 0px 0px",
                              boxSizing: "border-box",
                              color: "rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                flex: "1",
                                borderRadius: "10px",
                                backgroundColor: "rgba(9, 15, 50, 0.05)",
                                border: "1px solid rgba(253, 114, 27, 0.2)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                padding: "5px 11px 5px 12px",
                                gap: "20px",
                              }}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  position: "relative",
                                  textTransform: "capitalize",
                                  color: "inherit",
                                }}
                              >{`Today `}</a>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  padding: "8.7px 0px 0px",
                                }}
                              >
                                <img
                                  style={{
                                    width: "9.1px",
                                    height: "4.5px",
                                    position: "relative",
                                  }}
                                  alt=""
                                  src="/vector-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              flex: "1",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "1px 15px 0px 0px",
                              boxSizing: "border-box",
                              minWidth: "116px",
                            }}
                          >
                            <TextField
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                                alignSelf: "stretch",
                                fontFamily: "Inter",
                                fontSize: "16px",
                                color: "rgba(0, 0, 0, 0.2)",
                              }}
                              placeholder="Search"
                              variant="outlined"
                              sx={{
                                "& fieldset": {
                                  borderColor: "rgba(253, 114, 27, 0.2)",
                                },
                                "& .MuiInputBase-root": {
                                  height: "35px",
                                  backgroundColor: "rgba(9, 15, 50, 0.05)",
                                  borderRadius: "50px",
                                },
                                "& .MuiInputBase-input": {
                                  color: "rgba(0, 0, 0, 0.2)",
                                },
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "7.5px 9px 0px 0px",
                            }}
                          >
                            <a
                              style={{
                                textDecoration: "none",
                                position: "relative",
                                textTransform: "capitalize",
                                fontWeight: "600",
                                color: "inherit",
                                display: "inline-block",
                                minWidth: "49px",
                              }}
                            >
                              Color
                            </a>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "7.5px 9px 0px 0px",
                            }}
                          >
                            <a
                              style={{
                                textDecoration: "none",
                                position: "relative",
                                textTransform: "capitalize",
                                color: "inherit",
                              }}
                            >
                              All
                            </a>
                          </div>
                          <div
                            style={{
                              height: "37px",
                              width: "92px",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "102px",
                                borderRadius: "50%",
                                backgroundColor: "#000",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "21.5px",
                                left: "102px",
                                borderRadius: "50%",
                                backgroundColor: "#ff3434",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                borderRadius: "50%",
                                backgroundColor: "#fd721b",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "25.5px",
                                borderRadius: "50%",
                                backgroundColor: "#008000",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "51px",
                                borderRadius: "50%",
                                backgroundColor: "#ffc0cb",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "0px",
                                left: "76.5px",
                                borderRadius: "50%",
                                backgroundColor: "#ffff00",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "21.5px",
                                left: "0px",
                                borderRadius: "50%",
                                backgroundColor: "#480999",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "21.5px",
                                left: "25.5px",
                                borderRadius: "50%",
                                backgroundColor: "#bd8dfa",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "21.5px",
                                left: "51px",
                                borderRadius: "50%",
                                backgroundColor: "#5200ff",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: "21.5px",
                                left: "76.5px",
                                borderRadius: "50%",
                                backgroundColor: "#466fff",
                                width: "15.5px",
                                height: "15.5px",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            width: "165.2px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "7.5px 0px 0px",
                            boxSizing: "border-box",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "20px",
                            }}
                          >
                            <FormControl
                              style={{
                                height: "22px",
                                flex: "1",
                                fontFamily: "Inter",
                                fontSize: "18px",
                                color: "#090f32",
                                width: "auto",
                              }}
                              variant="standard"
                              sx={{
                                borderTopWidth: "0px",
                                borderRightWidth: "0px",
                                borderBottomWidth: "0px",
                                borderLeftWidth: "0px",
                                borderRadius: "0px 0px 0px 0px",
                                width: "74.4px",
                                height: "22px",
                                m: 0,
                                p: 0,
                                "& .MuiInputBase-root": {
                                  m: 0,
                                  p: 0,
                                  minHeight: "22px",
                                  justifyContent: "center",
                                  display: "inline-flex",
                                },
                                "& .MuiInputLabel-root": {
                                  m: 0,
                                  p: 0,
                                  minHeight: "22px",
                                  display: "inline-flex",
                                },
                                "& .MuiMenuItem-root": {
                                  m: 0,
                                  p: 0,
                                  height: "22px",
                                  display: "inline-flex",
                                },
                                "& .MuiSelect-select": {
                                  m: 0,
                                  p: 0,
                                  height: "22px",
                                  alignItems: "center",
                                  display: "inline-flex",
                                },
                                "& .MuiInput-input": { m: 0, p: 0 },
                                "& .MuiInputBase-input": {
                                  color: "#090f32",
                                  fontSize: 18,
                                  fontWeight: "Regular",
                                  fontFamily: "Inter",
                                  textAlign: "left",
                                  p: "0 !important",
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
                                    style={{
                                      marginRight: "7.105427357601002e-15px",
                                    }}
                                  />
                                )}
                              >
                                <MenuItem>brand</MenuItem>
                              </Select>
                              <FormHelperText />
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
                              <a
                                style={{
                                  textDecoration: "none",
                                  position: "relative",
                                  textTransform: "capitalize",
                                  color: "inherit",
                                  display: "inline-block",
                                  minWidth: "55px",
                                }}
                              >
                                Latest
                              </a>
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
                                  style={{
                                    width: "6.8px",
                                    height: "10.5px",
                                    position: "relative",
                                  }}
                                  alt=""
                                  src="/group-7.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "20px",
                          fontSize: "20px",
                          color: "rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            textTransform: "capitalize",
                            display: "inline-block",
                            minWidth: "120px",
                          }}
                        >
                          11/ 06/ 2024
                        </div>
                        <h2
                          style={{
                            margin: "0",
                            position: "relative",
                            fontSize: "inherit",
                            textTransform: "capitalize",
                            fontWeight: "400",
                            fontFamily: "inherit",
                          }}
                        >
                          Generate # 23
                        </h2>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "431.1px",
                          flex: "1",
                          position: "relative",
                          boxShadow: "0px 0px 16px rgba(253, 114, 27, 0.25)",
                          borderRadius: "20px",
                          background: "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                          minWidth: "191px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                            width: "100%",
                            height: "100%",
                            display: "none",
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2.4px)",
                            top: "1.2px",
                            bottom: "1.2px",
                            left: "38.1px",
                            maxHeight: "100%",
                            width: "178.6px",
                            objectFit: "cover",
                            zIndex: "1",
                          }}
                          loading="lazy"
                          alt=""
                          src="/image-4@2x.png"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            zIndex: "2",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "431.1px",
                            left: "254.8px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            border: "2px solid #fd721b",
                            boxSizing: "border-box",
                            width: "100%",
                            height: "100%",
                            transform: " rotate(180deg)",
                            transformOrigin: "0 0",
                            zIndex: "3",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "431.1px",
                          flex: "1",
                          position: "relative",
                          borderRadius: "20px",
                          background: "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                          minWidth: "191px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                            width: "100%",
                            height: "100%",
                            display: "none",
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2.4px)",
                            top: "1.2px",
                            bottom: "1.2px",
                            left: "38.1px",
                            maxHeight: "100%",
                            width: "178.6px",
                            objectFit: "cover",
                            zIndex: "1",
                          }}
                          alt=""
                          src="/image-4-1@2x.png"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            zIndex: "2",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "431.1px",
                            left: "254.8px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            transform: " rotate(180deg)",
                            transformOrigin: "0 0",
                            zIndex: "3",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "431.1px",
                          flex: "1",
                          position: "relative",
                          borderRadius: "20px",
                          background: "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                          minWidth: "191px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                            width: "100%",
                            height: "100%",
                            display: "none",
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2.4px)",
                            top: "1.2px",
                            bottom: "1.2px",
                            left: "38.1px",
                            maxHeight: "100%",
                            width: "178.6px",
                            objectFit: "cover",
                            zIndex: "1",
                          }}
                          alt=""
                          src="/image-4-2@2x.png"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            zIndex: "2",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "431.1px",
                            left: "254.8px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            transform: " rotate(180deg)",
                            transformOrigin: "0 0",
                            zIndex: "3",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20px",
                      maxWidth: "100%",
                      fontSize: "20px",
                      color: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <div
                      style={{
                        width: "333px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        maxWidth: "100%",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          textTransform: "capitalize",
                        }}
                      >
                        10/ 06/ 2024
                      </div>
                      <h2
                        style={{
                          margin: "0",
                          position: "relative",
                          fontSize: "inherit",
                          textTransform: "capitalize",
                          fontWeight: "400",
                          fontFamily: "inherit",
                        }}
                      >
                        Generate # 23
                      </h2>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          height: "431.1px",
                          flex: "1",
                          position: "relative",
                          borderRadius: "20px",
                          background: "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                          minWidth: "191px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                            width: "100%",
                            height: "100%",
                            display: "none",
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2.4px)",
                            top: "1.2px",
                            bottom: "1.2px",
                            left: "38.1px",
                            maxHeight: "100%",
                            width: "178.6px",
                            objectFit: "cover",
                            zIndex: "1",
                          }}
                          alt=""
                          src="/image-4-3@2x.png"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            zIndex: "2",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "431.1px",
                            left: "254.8px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            transform: " rotate(180deg)",
                            transformOrigin: "0 0",
                            zIndex: "3",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "431.1px",
                          flex: "1",
                          position: "relative",
                          borderRadius: "20px",
                          background: "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                          minWidth: "191px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                            width: "100%",
                            height: "100%",
                            display: "none",
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2.4px)",
                            top: "1.2px",
                            bottom: "1.2px",
                            left: "38.1px",
                            maxHeight: "100%",
                            width: "178.6px",
                            objectFit: "cover",
                            zIndex: "1",
                          }}
                          alt=""
                          src="/image-4-4@2x.png"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            zIndex: "2",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "431.1px",
                            left: "254.8px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            transform: " rotate(180deg)",
                            transformOrigin: "0 0",
                            zIndex: "3",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          height: "431.1px",
                          flex: "1",
                          position: "relative",
                          borderRadius: "20px",
                          background: "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                          minWidth: "191px",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(180deg, #e0dad5, #d7d1cf)",
                            width: "100%",
                            height: "100%",
                            display: "none",
                          }}
                        />
                        <img
                          style={{
                            position: "absolute",
                            height: "calc(100% - 2.4px)",
                            top: "1.2px",
                            bottom: "1.2px",
                            left: "38.1px",
                            maxHeight: "100%",
                            width: "178.6px",
                            objectFit: "cover",
                            zIndex: "1",
                          }}
                          alt=""
                          src="/image-4-5@2x.png"
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            zIndex: "2",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "431.1px",
                            left: "254.8px",
                            borderRadius: "20px",
                            background:
                              "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                            width: "100%",
                            height: "100%",
                            transform: " rotate(180deg)",
                            transformOrigin: "0 0",
                            zIndex: "3",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "40px",
                  maxWidth: "100%",
                  fontSize: "40px",
                  color: "#121212",
                }}
              >
                <h1
                  style={{
                    margin: "0",
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "inherit",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    fontFamily: "inherit",
                  }}
                >
                  Cloths From Generation
                </h1>
                <div
                  style={{
                    alignSelf: "stretch",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(180deg, rgba(255, 115, 59, 0.1) 38.75%, rgba(255, 115, 59, 0.06))",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "21.2px 16px 393.9px",
                    boxSizing: "border-box",
                    gap: "19.7px",
                    maxWidth: "100%",
                    fontSize: "12px",
                    color: "#666",
                  }}
                >
                  <div
                    style={{
                      height: "930.7px",
                      width: "499.4px",
                      position: "relative",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(180deg, rgba(255, 115, 59, 0.1) 38.75%, rgba(255, 115, 59, 0.06))",
                      display: "none",
                      maxWidth: "100%",
                    }}
                  />
                  <div
                    style={{
                      height: "515.3px",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 0px 76.5px",
                      boxSizing: "border-box",
                      gap: "9.5px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: "170.9px",
                        position: "relative",
                        zIndex: "1",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          borderRadius: "20px",
                          background:
                            "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                          width: "100%",
                          height: "100%",
                          display: "none",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "170.9px",
                          left: "141.1px",
                          borderRadius: "10px",
                          backgroundColor: "#f0efed",
                          border: "1.5px solid #fd721b",
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
                          top: "calc(50% - 59.65px)",
                          left: "calc(50% - 53.55px)",
                          width: "107.1px",
                          height: "119.2px",
                          objectFit: "contain",
                          zIndex: "1",
                        }}
                        loading="lazy"
                        alt=""
                        src="/rectangle-9@2x.png"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 5px 11px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            height: "12.5px",
                            width: "12.5px",
                            margin: "0",
                            position: "absolute",
                            right: "-11.5px",
                            bottom: "20.3px",
                            zIndex: "1",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "2px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                zIndex: "1",
                              }}
                            >
                              T-Shirt
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                color: "#ff733b",
                                zIndex: "1",
                                marginTop: "-1px",
                              }}
                            >
                              PAUL SMITH
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "2px",
                              color: "#232323",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "10px",
                              }}
                            >
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  zIndex: "1",
                                }}
                              >
                                Color
                              </b>
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  zIndex: "1",
                                }}
                              >
                                Black
                              </div>
                            </div>
                            <b
                              style={{
                                position: "relative",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                display: "inline-block",
                                color: "#ff733b",
                                minWidth: "37px",
                                zIndex: "1",
                              }}
                            >
                              100$
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: "170.9px",
                        position: "relative",
                        zIndex: "1",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                          borderRadius: "20px",
                          background:
                            "linear-gradient(-90deg, rgba(224, 218, 213, 0) 73.3%, #d7d1cf 86.65%)",
                          width: "100%",
                          height: "100%",
                          display: "none",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "170.9px",
                          left: "141.1px",
                          borderRadius: "10px",
                          backgroundColor: "#f0efed",
                          border: "1px solid rgba(0, 0, 0, 0.1)",
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
                          width: "calc(100% - 21.4px)",
                          top: "calc(50% - 66.65px)",
                          right: "10.7px",
                          left: "10.7px",
                          maxWidth: "100%",
                          overflow: "hidden",
                          height: "133.2px",
                          objectFit: "contain",
                          zIndex: "1",
                        }}
                        alt=""
                        src="/rectangle-9-1@2x.png"
                      />
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 10px 0px 5px",
                      }}
                    >
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                              zIndex: "1",
                            }}
                          >
                            Dress
                          </div>
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              textTransform: "capitalize",
                              color: "#ff733b",
                              display: "inline-block",
                              minWidth: "127px",
                              zIndex: "2",
                              marginTop: "-1px",
                            }}
                          >
                            DRIES VAN NOTEN
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "2px",
                            color: "#232323",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                zIndex: "1",
                              }}
                            >
                              Color
                            </b>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  zIndex: "1",
                                }}
                              >
                                Orange
                              </div>
                              <div
                                style={{
                                  height: "12.5px",
                                  width: "12.5px",
                                  margin: "0",
                                  position: "absolute",
                                  top: "1.2px",
                                  right: "-11.5px",
                                  zIndex: "2",
                                }}
                              />
                            </div>
                          </div>
                          <b
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              textTransform: "capitalize",
                              display: "inline-block",
                              color: "#ff733b",
                              minWidth: "37px",
                              zIndex: "1",
                            }}
                          >
                            100$
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "247.9px",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        flex: "1",
                        borderRadius: "10px",
                        backgroundColor: "#f0efed",
                        border: "1.5px solid #fd721b",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "28px 21px",
                        zIndex: "1",
                      }}
                    >
                      <div
                        style={{
                          height: "170.9px",
                          width: "142.8px",
                          position: "relative",
                          borderRadius: "10px",
                          backgroundColor: "#f0efed",
                          border: "1.5px solid #fd721b",
                          boxSizing: "border-box",
                          display: "none",
                        }}
                      />
                      <img
                        style={{
                          height: "110.1px",
                          flex: "1",
                          position: "relative",
                          maxWidth: "100%",
                          overflow: "hidden",
                          objectFit: "contain",
                          zIndex: "1",
                        }}
                        loading="lazy"
                        alt=""
                        src="/rectangle-8@2x.png"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 5px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            height: "12.5px",
                            width: "12.5px",
                            margin: "0",
                            position: "absolute",
                            right: "-11.5px",
                            bottom: "20.2px",
                            zIndex: "1",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "2px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                zIndex: "1",
                              }}
                            >
                              Shorts
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                color: "#ff733b",
                                zIndex: "1",
                                marginTop: "-1px",
                              }}
                            >
                              PAUL SMITH
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "2px",
                              color: "#232323",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "10px",
                              }}
                            >
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  zIndex: "1",
                                }}
                              >
                                Color
                              </b>
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  zIndex: "1",
                                }}
                              >
                                Black
                              </div>
                            </div>
                            <b
                              style={{
                                position: "relative",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                display: "inline-block",
                                color: "#ff733b",
                                minWidth: "37px",
                                zIndex: "1",
                              }}
                            >
                              100$
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "10px",
                        backgroundColor: "#f0efed",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "22px 15px",
                        zIndex: "1",
                      }}
                    >
                      <div
                        style={{
                          height: "170.9px",
                          width: "142.8px",
                          position: "relative",
                          borderRadius: "10px",
                          backgroundColor: "#f0efed",
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                          boxSizing: "border-box",
                          display: "none",
                        }}
                      />
                      <img
                        style={{
                          height: "124.1px",
                          flex: "1",
                          position: "relative",
                          maxWidth: "100%",
                          overflow: "hidden",
                          objectFit: "contain",
                          zIndex: "1",
                        }}
                        alt=""
                        src="/rectangle-8-1@2x.png"
                      />
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 8px 0px 3px",
                      }}
                    >
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                              zIndex: "1",
                            }}
                          >
                            Dress
                          </div>
                          <div
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              textTransform: "capitalize",
                              color: "#ff733b",
                              zIndex: "2",
                              marginTop: "-1px",
                            }}
                          >{`DOLCE & GABBANA`}</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "2px",
                            color: "#232323",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                zIndex: "1",
                              }}
                            >
                              Color
                            </b>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                position: "relative",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  zIndex: "1",
                                }}
                              >
                                Orange
                              </div>
                              <div
                                style={{
                                  height: "12.5px",
                                  width: "12.5px",
                                  margin: "0",
                                  position: "absolute",
                                  right: "-11.5px",
                                  bottom: "1.2px",
                                  zIndex: "2",
                                }}
                              />
                            </div>
                          </div>
                          <b
                            style={{
                              position: "relative",
                              fontSize: "14px",
                              textTransform: "capitalize",
                              display: "inline-block",
                              color: "#ff733b",
                              minWidth: "37px",
                              zIndex: "1",
                            }}
                          >
                            100$
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer
          style={{
            backgroundColor: "#ff733b",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "18.6px 567px 18.5px 591px",
            boxSizing: "border-box",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "18px",
            color: "#fff",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              height: "59.1px",
              width: "1440px",
              position: "relative",
              backgroundColor: "#ff733b",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <h3
            style={{
              margin: "0",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "500",
              fontFamily: "inherit",
              zIndex: "1",
            }}
          >
            Copyright © 2024
          </h3>
        </footer>
      </div>
    );
  };
  
  export default History;
  