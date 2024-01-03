import React from "react";
import map from "../../assets/map.png";
import phone from "../../assets/phone.png";
const Contact = () => {
  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        boxSizing: "border-box",
        gap: "4rem",
      }}
    >
      {/* Pelotas */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        {/* endereço */}
        <div style={{ width: "40%" }}>
          <div
            style={{
              borderBottom: "2px solid black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "1.6rem",
              }}
            >
              Pelotas - RS
            </p>

            <img src={map} width={"35px"} height={"35px"} />
          </div>

          <p style={{ width: "80%", fontSize: "1.4rem", marginTop: "2rem" }}>
            Av. Domingos de Almeida, 431 - Areal, 96085-470
          </p>
        </div>
        {/* Fone */}
        <div style={{ width: "40%" }}>
          <div
            style={{
              borderBottom: "2px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              width: "100%",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "1.6rem",
              }}
            >
              Fone
            </p>

            <img src={phone} width={"35px"} height={"35px"} />
          </div>

          <p style={{ width: "100%", fontSize: "1.4rem", marginTop: "2rem" }}>
            (53) XXXXX-XXXX
          </p>
        </div>
      </div>
      {/* Rio Grande */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        {/* endereço */}
        <div style={{ width: "40%" }}>
          <div
            style={{
              borderBottom: "2px solid black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "1.6rem",
              }}
            >
              Pelotas - RS
            </p>

            <img src={map} width={"35px"} height={"35px"} />
          </div>

          <p style={{ width: "80%", fontSize: "1.4rem", marginTop: "2rem" }}>
            Av. Domingos de Almeida, 431 - Areal, 96085-470
          </p>
        </div>
        {/* Fone */}
        <div style={{ width: "40%" }}>
          <div
            style={{
              borderBottom: "2px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              width: "100%",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "1.6rem",
              }}
            >
              Fone
            </p>

            <img src={phone} width={"35px"} height={"35px"} />
          </div>

          <p style={{ width: "100%", fontSize: "1.4rem", marginTop: "2rem" }}>
            (53) XXXXX-XXXX
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
