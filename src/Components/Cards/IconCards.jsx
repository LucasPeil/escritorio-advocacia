import React from "react";
import "./iconCards.css";

import { motion } from "framer-motion";
const IconCards = ({ num, delay }) => {
  return (
    <motion.div
      className="individual-cards-container"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "linear", duration: 0.7, delay: delay }}
      viewport={{ once: true }}
      style={{
        position: "relative",
        marginTop: "5rem",
      }}
    >
      <div className="cards-servicos" style={{}} data-label={`Serviço ${num}`}>
        <div className="title-service">
          <p className="title">Serviço num</p>
        </div>
        <p
          style={{
            color: "white",
            marginTop: "7rem",
            textAlign: "center",
            zIndex: 100,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          ipsa alias sapiente commodi, nemo sed quo, suscipit dolor quis
          nesciunt enim necessitatibus!
        </p>
        <button className="botao-cards">Saiba mais</button>
      </div>
      <div className="cards-servicos-background"></div>
    </motion.div>
  );
};

export default IconCards;
