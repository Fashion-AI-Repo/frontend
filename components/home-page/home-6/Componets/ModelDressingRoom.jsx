import React from "react";

const ModelDressingRoom = () => {
  const data = {
    model: {
      name: "Kristine",
      height: "168 cm / 5'6",
      size: "S",
      image: "/image@3x.png",
    },
    items: [
      { type: "Dress", brand: "DOLCE & GABBANA" },
      { type: "Top", brand: "Gucci" },
      { type: "Shoes", brand: "Louis Vuitton" },
    ],
  };

  return (
    <div
      style={{
        width: "281px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "87.9px 0px 0px",
        boxSizing: "border-box",
        fontSize: "16px",
        color: "#232323",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          height: "700.4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 154.4px",
          boxSizing: "border-box",
          gap: "18.4px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "10px 12px 261px",
            gap: "179px",
            backgroundImage: `url(${data.model.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            flexShrink: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "0px 7px",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 0px 18px",
                  fontSize: "20px",
                  color: "#090f32",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    textTransform: "capitalize",
                    fontWeight: "800",
                  }}
                >
                  {data.model.name}
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  textTransform: "capitalize",
                  display: "inline-block",
                  minWidth: "97px",
                }}
              >
                {data.model.height}
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    textTransform: "capitalize",
                  }}
                >
                  Size: {data.model.size}
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
              justifyContent: "space-between",
              padding: "0px 0px 0px 1px",
              gap: "20px",
            }}
          >
            <img
              style={{
                height: "24px",
                width: "14.8px",
                position: "relative",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              style={{
                height: "24px",
                width: "14.8px",
                position: "relative",
                flexShrink: "0",
              }}
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "15px",
            fontSize: "18px",
            color: "#666",
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
              }}
            >
              Tuck
            </div>
            <input
              style={{ margin: "0", height: "21px", width: "20px" }}
              type="checkbox"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
              fontSize: "24px",
              color: "#232323",
            }}
          >
            <div
              style={{
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "800",
              }}
            >
              Items in dressing room
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "14px",
                fontSize: "18px",
              }}
            >
              {data.items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "32.4px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      textTransform: "capitalize",
                      flexShrink: "0",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>{item.type}</span>
                    <span
                      style={{ color: "#666", whiteSpace: "pre-wrap" }}
                    >{`,  ${item.brand}`}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "7.9px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "6.8px",
                        height: "8.2px",
                        position: "relative",
                        flexShrink: "0",
                      }}
                      loading="lazy"
                      alt=""
                      src="/group-49.svg"
                    />
                  </div>
                </div>
              ))}
              <div
                style={{
                  position: "relative",
                  textDecoration: "underline",
                  textTransform: "capitalize",
                  color: "#fd721b",
                  display: "inline-block",
                  minWidth: "110px",
                }}
              >
                Clear Styling
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDressingRoom;
