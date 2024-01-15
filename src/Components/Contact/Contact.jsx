import React from "react";
import map from "../../assets/map.png";
import phone from "../../assets/phone.png";
import clock from "../../assets/clock.png";
import "./contact.css";
import { motion } from "framer-motion";
import whatsappIcon from "../../assets/whatsappIcon.png";
import telephone from "../../assets/telephone.png";

const Contact = () => {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, x: 100, width: 0 }}
      whileInView={{ opacity: 1, x: 0, width: "100%" }}
      transition={{ ease: "linear", duration: 0.6, width: { duration: 0.1 } }}
      viewport={{ once: true }}
    >
      <div className="contact-container-content">
        {/* Pelotas */}
        <div className="contact-content">
          {/* endereço */}
          <div className="endereco-container">
            <div
              style={{
                borderBottom: "2px solid black",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <p className="info-labels">Pelotas - RS</p>

              <img
                alt="Icone ilustrado representando um mapa pequeno"
                src={map}
                width={"30px"}
                height={"30px"}
              />
            </div>

            <p className="info-content">
              Av. Domingos de Almeida, 431 - Areal, 96085-470
            </p>
          </div>
          {/* Fone */}
          <div className="endereco-container">
            <div
              style={{
                borderBottom: "2px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "0.5rem",
                width: "100%",
              }}
            >
              <p className="info-labels">Fone</p>

              <img
                alt="Icone ilustrado representando um celular"
                src={phone}
                width={"30px"}
                height={"30px"}
              />
            </div>
            <div className="info-container">
              <p className="info-content info-number">(53) 98438-5207 </p>
              <img
                alt="Icone do aplicativo whatsapp"
                src={whatsappIcon}
                width={"20px"}
                height={"20px"}
              />
            </div>
            <div className="info-container">
              <p className="info-content  info-number">(53) 3025-4248</p>
              <img
                alt="Icone de um telefone"
                src={telephone}
                width={"20px"}
                height={"20px"}
              />
            </div>
          </div>
        </div>
        {/* FIM Pelotas */}
        {/* Rio Grande */}
        {/*      <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          
          <div className="endereco-container">
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
         
          <div className="endereco-container">
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
        </div> */}
      </div>
      {/* FIM RIO GRANDE */}

      {/* // Horario atendimento */}
      <div className="contact-container-content">
        <div
          style={{
            borderBottom: "2px solid black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "0.5rem",
          }}
        >
          <p className="info-labels">Horário de Atendimento</p>

          <img
            alt="Icone ilustrado representando um relógio"
            src={clock}
            width={"30px"}
            height={"30px"}
          />
        </div>

        <div className="horarios-atendimento">
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
    </motion.div>
  );
};

export default Contact;
