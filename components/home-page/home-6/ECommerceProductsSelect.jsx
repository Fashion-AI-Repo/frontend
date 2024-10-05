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
  Button,
} from "@mui/material";
import FrameComponent from "./FrameComponent";
import Component2 from "./Component2";
import Component1 from "./Component1";
import Sidebar from "./Sidebar";
import MenWomen from "./Componets/MenWomen";
import Footer from "./Componets/Footer";
import ModelDressingRoom from "./Componets/ModelDressingRoom";


const ECommerceProductsSelect = () => {
  return (
    <div className="hero-banner-two position-relative pt-120 lg-pt-200 md-pt-150">
      <div
        style={{
          width: "100%",
          height: "1826px",
          position: "relative",
          backgroundColor: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "20px 0px 160px",
          boxSizing: "border-box",
          gap: "101.9px",
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          fontSize: "18px",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <main
          style={{
            width: "1402.5px",
            height: "1646px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "0px 20px 1564.4px 0px",
            boxSizing: "border-box",
            gap: "29px",
            maxWidth: "100%",
          }}
        >
          {/* <FrameComponent /> */}
          <section
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "13.3px",
              maxWidth: "100%",
              textAlign: "left",
              fontSize: "24px",
              color: "#ff733b",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "20px",
                maxWidth: "calc(100% - 294px)",
              }}
            >
              <div
                style={{
                  height: "1369.4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "19.9px",
                  minWidth: "290px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 58px",
                  }}
                >
                  {/* men&women */}
                  <MenWomen />
                </div>

                {/* sidebar */}
                <Sidebar />
              </div>


              {/* cards */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "11px 0px 0px",
                  boxSizing: "border-box",
                  minWidth: "506px",
                  maxWidth: "100%",
                  fontSize: "18px",
                  color: "#fff",
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
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      gap: "20px",
                      color: "#090f32",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",
                        padding: "0px 0px 2.5px",
                        boxSizing: "border-box",
                        minWidth: "183px",
                        color: "#fff",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "33.4px",
                        }}
                      >

                        {/* search bar */}

                        {/* <TextField
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                            width: "235px",
                            fontFamily: "Inter",
                            fontSize: "18px",
                            color: "rgba(0, 0, 0, 0.2)",
                          }}
                          placeholder="Search"
                          variant="outlined"
                          sx={{
                            "& fieldset": {
                              borderColor: "rgba(253, 114, 27, 0.2)",
                            },
                            "& .MuiInputBase-root": {
                              height: "46px",
                              backgroundColor: "rgba(9, 15, 50, 0.05)",
                              borderRadius: "50px",
                              fontSize: "18px",
                            },
                            "& .MuiInputBase-input": {
                              color: "rgba(0, 0, 0, 0.2)",
                            },
                            width: "235px",
                          }}
                        /> */}

                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start"
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
                              justifyContent: "space-between",
                              backgroundImage:
                                "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg@3x.png')",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              gap: "20px",
                            }}
                          >
                            {/* <Component2 /> */}

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                justifyContent: "flex-start",
                                gap: "259px",
                              }}
                            >
                              {/* <Component1 /> */}

                              <div
                                style={{
                                  borderRadius: "10px 0px 10px 0px",
                                  backgroundColor: "#090f32",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  padding: "6px 19px 6px 20px",
                                  flexShrink: "0",
                                }}
                              >
                                <b
                                  style={{
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "inline-block",
                                    minWidth: "47px",
                                  }}
                                >
                                  100$
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

                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "1px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  gap: "10px",
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
                                  <div
                                    style={{
                                      position: "relative",
                                      textTransform: "capitalize",
                                      display: "inline-block",
                                      minWidth: "70px",
                                    }}
                                  >
                                    Item Code
                                  </div>
                                  <b
                                    style={{
                                      position: "relative",
                                      textTransform: "capitalize",
                                      display: "inline-block",
                                      color: "#121212",
                                      minWidth: "80px",
                                    }}
                                  >
                                    SP-240100
                                  </b>
                                </div>

                                <div
                                  style={{
                                    width: "148px",
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  Dress
                                </div>
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  fontSize: "16px",
                                  textTransform: "capitalize",
                                  color: "#121212",
                                }}
                              >{`dolce & gabbana`}</b>
                            </div>


                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "10px",
                                fontSize: "16px",
                                color: "#232323",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                }}
                              >
                                Orange
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  padding: "3.3px 0px 0px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "12.5px",
                                      width: "12.5px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#fd721b",
                                    }}
                                  />
                                </div>
                              </div>
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
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        gap: "35.8px",
                        minWidth: "183px",
                      }}
                    >
                      <div
                        style={{
                          width: "226.6px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-end",
                          padding: "0px 15px",
                          boxSizing: "border-box",
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
                            gap: "15px",
                          }}
                        >
                          {/* Color */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "7.5px 0px 0px",
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
                          {/* All */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "7.5px 0px 0px",
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
                          {/* Palate */}
                          <div
                            style={{
                              height: "37px",
                              flex: "1",
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
                      </div>

                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "20px",
                          color: "#fff",
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
                            padding: "0.3px 0px 0.7px",
                            backgroundImage:
                              "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg1@3x.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px 0px 10px 0px",
                              backgroundColor: "#090f32",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px 20px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                              }}
                            >
                              100$
                            </b>
                          </div>
                          <div
                            style={{
                              flex: "1",
                              borderRadius: "10px",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-end",
                              padding: "290px 0px 0px",
                              backgroundImage:
                                "url('/1276c66ca75e48f3b4776dd460759352-ghostjpg@3x.png')",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              zIndex: "1",
                            }}
                          >
                            <div
                              style={{
                                borderRadius: "10px 0px 10px 0px",
                                backgroundColor: "#090f32",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                padding: "6px 19px 6px 20px",
                              }}
                            >
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  minWidth: "47px",
                                }}
                              >
                                100$
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
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "1px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "10px",
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
                                <div
                                  style={{
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "inline-block",
                                    minWidth: "70px",
                                  }}
                                >
                                  Item Code
                                </div>
                                <b
                                  style={{
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "inline-block",
                                    color: "#121212",
                                    minWidth: "80px",
                                  }}
                                >
                                  SP-240100
                                </b>
                              </div>
                              <div
                                style={{
                                  width: "148px",
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                Dress
                              </div>
                            </div>
                            <b
                              style={{
                                position: "relative",
                                fontSize: "16px",
                                textTransform: "capitalize",
                                color: "#121212",
                              }}
                            >{`dolce & gabbana`}</b>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
                              fontSize: "16px",
                              color: "#232323",
                            }}
                          >
                            <div
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                              }}
                            >
                              Orange
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                padding: "3.3px 0px 0px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  style={{
                                    height: "12.5px",
                                    width: "12.5px",
                                    position: "relative",
                                    borderRadius: "50%",
                                    backgroundColor: "#fd721b",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* Brand and rec */}
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
                                style={{ marginRight: "7.105427357601002e-15px" }}
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
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                              display: "inline-block",
                              minWidth: "114px",
                              flexShrink: "0",
                            }}
                          >
                            Recomended
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "5.7px 0px 0px",
                              flexShrink: "0",
                            }}
                          >
                            <img
                              style={{
                                width: "6.8px",
                                height: "10.5px",
                                position: "relative",
                                flexShrink: "0",
                              }}
                              loading="lazy"
                              alt=""
                              src="/group-7.svg"
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
                              padding: "0.4px 0px 0px 2px",
                              backgroundImage:
                                "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg2@3x.png')",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                            }}
                          >
                            <div
                              style={{
                                borderRadius: "10px 0px 10px 0px",
                                backgroundColor: "#090f32",
                                display: "none",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "6px 20px",
                              }}
                            >
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                }}
                              >
                                100$
                              </b>
                            </div>
                            <div
                              style={{
                                flex: "1",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-end",
                                padding: "290.8px 0px 0px",
                                backgroundImage:
                                  "url('/1a9e20d1b77a400ca18ebf959d45f78a-ghostjpg@3x.png')",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top",
                                zIndex: "1",
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: "10px 0px 10px 0px",
                                  backgroundColor: "#090f32",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  padding: "6px 19px 6px 20px",
                                }}
                              >
                                <b
                                  style={{
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "inline-block",
                                    minWidth: "47px",
                                  }}
                                >
                                  100$
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
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "1px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  gap: "10px",
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
                                  <div
                                    style={{
                                      position: "relative",
                                      textTransform: "capitalize",
                                      display: "inline-block",
                                      minWidth: "70px",
                                    }}
                                  >
                                    Item Code
                                  </div>
                                  <b
                                    style={{
                                      position: "relative",
                                      textTransform: "capitalize",
                                      display: "inline-block",
                                      color: "#121212",
                                      minWidth: "80px",
                                    }}
                                  >
                                    SP-240100
                                  </b>
                                </div>
                                <div
                                  style={{
                                    width: "148px",
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  Dress
                                </div>
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  fontSize: "16px",
                                  textTransform: "capitalize",
                                  color: "#121212",
                                }}
                              >{`dolce & gabbana`}</b>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "10px",
                                fontSize: "16px",
                                color: "#232323",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                }}
                              >
                                Orange
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  padding: "3.3px 0px 0px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "12.5px",
                                      width: "12.5px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#fd721b",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "20.1px",
                    }}
                  >
                    <div
                      style={{
                        height: "437.8px",
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 0px 113px",
                        boxSizing: "border-box",
                        gap: "20.1px",
                        minWidth: "183px",
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
                          padding: "0.3px 0px 0px 3px",
                          backgroundImage:
                            "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg3@3x.png')",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top",
                          flexShrink: "0",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "10px 0px 10px 0px",
                            backgroundColor: "#090f32",
                            display: "none",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px 20px",
                          }}
                        >
                          <b
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            100$
                          </b>
                        </div>
                        <div
                          style={{
                            flex: "1",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-end",
                            padding: "290.9px 0px 0px",
                            backgroundImage:
                              "url('/bfbda01a64784a5092ded083c58a4cbb-ghostjpg@3x.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px 0px 10px 0px",
                              backgroundColor: "#090f32",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 19px 6px 20px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                display: "inline-block",
                                minWidth: "47px",
                              }}
                            >
                              100$
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
                          flexShrink: "0",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "1px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
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
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  minWidth: "70px",
                                }}
                              >
                                Item Code
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  color: "#121212",
                                  minWidth: "80px",
                                }}
                              >
                                SP-240100
                              </b>
                            </div>
                            <div
                              style={{
                                width: "148px",
                                position: "relative",
                                textTransform: "capitalize",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Dress
                            </div>
                          </div>
                          <b
                            style={{
                              position: "relative",
                              fontSize: "16px",
                              textTransform: "capitalize",
                              color: "#121212",
                            }}
                          >{`dolce & gabbana`}</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "10px",
                            fontSize: "16px",
                            color: "#232323",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            Orange
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "3.2px 0px 0px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  height: "12.5px",
                                  width: "12.5px",
                                  position: "relative",
                                  borderRadius: "50%",
                                  backgroundColor: "#fd721b",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        height: "437.8px",
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 0px 113px",
                        boxSizing: "border-box",
                        gap: "20.1px",
                        minWidth: "183px",
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
                          padding: "0.3px 0px 0px 3px",
                          backgroundImage:
                            "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg4@3x.png')",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top",
                          flexShrink: "0",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "10px 0px 10px 0px",
                            backgroundColor: "#090f32",
                            display: "none",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px 20px",
                          }}
                        >
                          <b
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            100$
                          </b>
                        </div>
                        <div
                          style={{
                            flex: "1",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "290.9px 0px 0px 157px",
                            backgroundImage:
                              "url('/567c41cfcb6e4a88b796e0e41a5fdd48-ghostjpg@3x.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px 0px 10px 0px",
                              backgroundColor: "#090f32",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 19px 6px 20px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                display: "inline-block",
                                minWidth: "47px",
                              }}
                            >
                              100$
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
                          flexShrink: "0",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "1px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
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
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  minWidth: "70px",
                                }}
                              >
                                Item Code
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  color: "#121212",
                                  minWidth: "80px",
                                }}
                              >
                                SP-240100
                              </b>
                            </div>
                            <div
                              style={{
                                width: "148px",
                                position: "relative",
                                textTransform: "capitalize",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Dress
                            </div>
                          </div>
                          <b
                            style={{
                              position: "relative",
                              fontSize: "16px",
                              textTransform: "capitalize",
                              color: "#121212",
                            }}
                          >{`dolce & gabbana`}</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "10px",
                            fontSize: "16px",
                            color: "#232323",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            Orange
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "3.2px 0px 0px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  height: "12.5px",
                                  width: "12.5px",
                                  position: "relative",
                                  borderRadius: "50%",
                                  backgroundColor: "#fd721b",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        height: "437.8px",
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 0px 113px",
                        boxSizing: "border-box",
                        gap: "20.1px",
                        minWidth: "183px",
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
                          padding: "0.3px 0px 0px 2px",
                          backgroundImage:
                            "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg5@3x.png')",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top",
                          flexShrink: "0",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "10px 0px 10px 0px",
                            backgroundColor: "#090f32",
                            display: "none",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px 20px",
                          }}
                        >
                          <b
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            100$
                          </b>
                        </div>
                        <div
                          style={{
                            flex: "1",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-end",
                            padding: "290.9px 0px 0px",
                            backgroundImage:
                              "url('/640c58f6aa994950b4baf2401b1f0951-ghostjpg@3x.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px 0px 10px 0px",
                              backgroundColor: "#090f32",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 19px 6px 20px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                display: "inline-block",
                                minWidth: "47px",
                              }}
                            >
                              100$
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
                          flexShrink: "0",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "1px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
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
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  minWidth: "70px",
                                }}
                              >
                                Item Code
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  color: "#121212",
                                  minWidth: "80px",
                                }}
                              >
                                SP-240100
                              </b>
                            </div>
                            <div
                              style={{
                                width: "148px",
                                position: "relative",
                                textTransform: "capitalize",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Dress
                            </div>
                          </div>
                          <b
                            style={{
                              position: "relative",
                              fontSize: "16px",
                              textTransform: "capitalize",
                              color: "#121212",
                            }}
                          >{`dolce & gabbana`}</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "10px",
                            fontSize: "16px",
                            color: "#232323",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            Orange
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "3.2px 0px 0px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  height: "12.5px",
                                  width: "12.5px",
                                  position: "relative",
                                  borderRadius: "50%",
                                  backgroundColor: "#fd721b",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "20px",
                        minWidth: "243.6px",
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
                          padding: "0.1px 0px 0px 3px",
                          backgroundImage:
                            "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg6@3x.png')",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top",
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "10px 0px 10px 0px",
                            backgroundColor: "#090f32",
                            display: "none",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px 20px",
                          }}
                        >
                          <b
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            100$
                          </b>
                        </div>
                        <div
                          style={{
                            flex: "1",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-end",
                            padding: "290.9px 0px 0px",
                            backgroundImage:
                              "url('/9dab7b5311234ae380534c882ef3e9e1-ghostjpg@3x.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top",
                            zIndex: "1",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px 0px 10px 0px",
                              backgroundColor: "#090f32",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "6px 19px 6px 20px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                                display: "inline-block",
                                minWidth: "47px",
                              }}
                            >
                              100$
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
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "1px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
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
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  minWidth: "70px",
                                }}
                              >
                                Item Code
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  color: "#121212",
                                  minWidth: "80px",
                                }}
                              >
                                SP-240100
                              </b>
                            </div>
                            <div
                              style={{
                                width: "148px",
                                position: "relative",
                                textTransform: "capitalize",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              Dress
                            </div>
                          </div>
                          <b
                            style={{
                              position: "relative",
                              fontSize: "16px",
                              textTransform: "capitalize",
                              color: "#121212",
                            }}
                          >{`dolce & gabbana`}</b>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "10px",
                            fontSize: "16px",
                            color: "#232323",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              textTransform: "capitalize",
                            }}
                          >
                            Orange
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "3.3px 0px 0px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  height: "12.5px",
                                  width: "12.5px",
                                  position: "relative",
                                  borderRadius: "50%",
                                  backgroundColor: "#fd721b",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "20.1px",
                        minWidth: "330px",
                        maxWidth: "100%",
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
                          minWidth: "159px",
                          flexShrink: "0",
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
                            padding: "0.1px 0px 0px 3px",
                            backgroundImage:
                              "url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg7@3x.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "10px 0px 10px 0px",
                              backgroundColor: "#090f32",
                              display: "none",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px 20px",
                            }}
                          >
                            <b
                              style={{
                                position: "relative",
                                textTransform: "capitalize",
                              }}
                            >
                              100$
                            </b>
                          </div>
                          <div
                            style={{
                              flex: "1",
                              overflow: "hidden",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "290.9px 0px 0px 157px",
                              backgroundImage:
                                "url('/623cf127514741ffaf16ebdd96c0b2f5-ghostjpg@3x.png')",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "top",
                              zIndex: "1",
                            }}
                          >
                            <div
                              style={{
                                borderRadius: "10px 0px 10px 0px",
                                backgroundColor: "#090f32",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                padding: "6px 19px 6px 20px",
                              }}
                            >
                              <b
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                  display: "inline-block",
                                  minWidth: "47px",
                                }}
                              >
                                100$
                              </b>
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            width: "221.8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "40px",
                            fontSize: "14px",
                            color: "#666",
                          }}
                        >


                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "1px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  gap: "10px",
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
                                  <div
                                    style={{
                                      position: "relative",
                                      textTransform: "capitalize",
                                      display: "inline-block",
                                      minWidth: "70px",
                                    }}
                                  >
                                    Item Code
                                  </div>
                                  <b
                                    style={{
                                      position: "relative",
                                      textTransform: "capitalize",
                                      display: "inline-block",
                                      color: "#121212",
                                      minWidth: "80px",
                                    }}
                                  >
                                    SP-240100
                                  </b>
                                </div>
                                <div
                                  style={{
                                    width: "148px",
                                    position: "relative",
                                    textTransform: "capitalize",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  Dress
                                </div>
                              </div>
                              <b
                                style={{
                                  position: "relative",
                                  fontSize: "16px",
                                  textTransform: "capitalize",
                                  color: "#121212",
                                }}
                              >{`dolce & gabbana`}</b>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "10px",
                                fontSize: "16px",
                                color: "#232323",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  textTransform: "capitalize",
                                }}
                              >
                                Orange
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                  padding: "3.3px 0px 0px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "12.5px",
                                      width: "12.5px",
                                      position: "relative",
                                      borderRadius: "50%",
                                      backgroundColor: "#fd721b",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>



                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              padding: "0px 0px 0px 21px",
                            }}
                          >
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
                              Generate
                            </Button>
                          </div>
                        </div>


                      </div>
                      <img
                        style={{
                          height: "324.8px",
                          flex: "1",
                          position: "relative",
                          maxWidth: "100%",
                          overflow: "hidden",
                          objectFit: "cover",
                          minWidth: "159px",
                          flexShrink: "0",
                        }}
                        loading="lazy"
                        alt=""
                        src="/group-4@2x.png"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right side Model - DressingRoom */}
            <ModelDressingRoom />

          </section>

        </main>

        {/* footer  */}
        <Footer />

      </div>
    </div>
  );
};

export default ECommerceProductsSelect;
