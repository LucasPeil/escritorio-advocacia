import React from "react";
import sobreImg from "../../assets/Sobre.jpg";
import TituloEstilizado from "../TituloEstilizado";
import { motion } from "framer-motion";
import "./sobre.css";
const Sobre = () => {
  return (
    <div className="sobre-container">
      <img className="img-sobre" src={sobreImg} />

      <div className="sobre-content">
        <motion.div
          className="sobre-text-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "linear", duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="sobre-titulo-text-container">
            <TituloEstilizado
              titulo={"Nossa História"}
              classLabel="titulo-estilizado-sobre"
            />

            <p className="sobre-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              efficitur velit diam, et porttitor leo luctus non. Proin sit amet
              cursus velit, nec dignissim augue. Vestibulum nec ligula porta,
              molestie ante vitae, fringilla velit. Nulla eget tincidunt risus.
              Suspendisse in maximus urna. Nam quis dui vitae urna posuere
              eleifend. Etiam est enim, rhoncus et augue non, dictum ultrices
              velit.Suspendisse in maximus urna. Nam quis dui vitae urna posuere
              eleifend. Etiam est enim, rhoncus et augue non, dictum ultrices
              velit. Etiam est enim, rhoncus et augue non, dictum ultrices
              velit.Suspendisse in maximus urna. Nam quis dui vitae urna posuere
              eleifend. Etiam est enim, rhoncus et augue non, dictum ultrices
              velit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sobre;
