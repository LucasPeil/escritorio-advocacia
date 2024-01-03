import React from "react";
import "./iconCards.css";
const IconCards = ({ num }) => {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "5rem",
      }}
    >
      <div className="cards-servicos" style={{}} data-label={`Serviço ${num}`}>
        <p style={{ color: "white", marginTop: "7rem", textAlign: "center" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          ipsa alias sapiente commodi, nemo sed quo, suscipit dolor quis
          nesciunt enim necessitatibus!
        </p>
        <button className="botao-cards">Saiba mais</button>
      </div>
      <div
        style={{
          width: "3rem",
          height: "3rem",
          backgroundColor: "#9a681e",
          position: "absolute",
          top: "4.9rem",
          left: "-0.9rem",
          zIndex: 1,
          transform: "rotate(45deg)",
        }}
      ></div>
    </div>
  );
};

export default IconCards;
