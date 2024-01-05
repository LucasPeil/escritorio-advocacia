import React from "react";
import map from "../../assets/map.png";
import phone from "../../assets/phone.png";
import clock from "../../assets/clock.png";
import "./contact.css";
const Contact = () => {
  return (
    <div
      style={{
        margin: "5rem 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        boxSizing: "border-box",
        gap: "10rem",
      }}
    >
      <div style={{ width: "45%" }}>
        {/* Pelotas */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
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
                  fontSize: "1.5rem",
                }}
              >
                Pelotas - RS
              </p>

              <img src={map} width={"30px"} height={"30px"} />
            </div>

            <p style={{ width: "80%", fontSize: "1.2rem", marginTop: "2rem" }}>
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
                  fontSize: "1.5rem",
                }}
              >
                Fone
              </p>

              <img src={phone} width={"30px"} height={"30px"} />
            </div>

            <p style={{ width: "100%", fontSize: "1.2rem", marginTop: "2rem" }}>
              (53) XXXXX-XXXX
            </p>
          </div>
        </div>
        {/* FIM Pelotas */}
        {/* Rio Grande */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
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
                  fontSize: "1.5rem",
                }}
              >
                Rio Grande - RS
              </p>

              <img src={map} width={"30px"} height={"30px"} />
            </div>

            <p style={{ width: "80%", fontSize: "1.2rem", marginTop: "2rem" }}>
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
                  fontSize: "1.5rem",
                }}
              >
                Fone
              </p>

              <img src={phone} width={"30px"} height={"30px"} />
            </div>

            <p style={{ width: "100%", fontSize: "1.2rem", marginTop: "2rem" }}>
              (53) XXXXX-XXXX
            </p>
          </div>
        </div>
      </div>
      {/* FIM RIO GRANDE */}

      {/* // Horario atendimento */}
      <div style={{ width: "44%" }}>
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
              fontSize: "1.5rem",
            }}
          >
            Horário de Atendimento
          </p>

          <img src={clock} width={"30px"} height={"30px"} />
        </div>

        <div style={{ width: "100%", fontSize: "1.2rem", marginTop: "2rem" }}>
          <p className="horarios">
            <span className="dias">Segunda-Feira</span>
            08:00 -18:00
          </p>
          <p className="horarios">
            <span className="dias">Terça-Feira</span>
            08:00 -18:00
          </p>
          <p className="horarios">
            <span className="dias">Quarta-Feira</span>
            08:00 -18:00
          </p>
          <p className="horarios">
            <span className="dias">Quinta-Feira</span>
            08:00 -18:00
          </p>
          <p className="horarios">
            <span className="dias">Sexta-Feira</span>
            08:00 -18:00
          </p>
          <p className="horarios">
            <span className="dias">Sábados e Domingos</span>
            08:00 -18:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
