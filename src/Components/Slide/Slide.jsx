import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "./slide.css";
import capa2 from "../../assets/capa-2.jpg";
import capa3 from "../../assets/capa-3.jpg";
import capa4 from "../../assets/capa-4.jpg";
import { motion } from "framer-motion";
import whatsapp from "../../assets/whatsapp.png";
const HeadSlide = () => {
  const [show, setShow] = useState(false);
  const images = [capa3, capa2, capa4];

  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
    duration: 1500,
    transitionDuration: 3900,
    pauseOnHover: false,
    canSwipe: false,
    easing: "cubic-in",
  };
  return (
    <header id="capa">
      <Zoom {...properties}>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}></div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}></div>
        </div>
      </Zoom>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 0.9 }}
        viewport={{ once: true }}
        className="capa-apresentacao"
      >
        <h1 className="nome-escritorio">Chagas Advogados</h1>
        <span className="pequena-apresentacao">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          doloremque.
        </span>
        <nav className="navegacao">
          <ul className="lista-links">
            <li className="links">
              <a href="#sobre">Sobre nós</a>
            </li>
            <li className="links">
              <a href="#servicos">Serviços</a>
            </li>
            <li className="links">
              <a href="#contato">Contato</a>
            </li>
            <li className="links">
              <a href="#duvidas">Dúvidas</a>
            </li>
          </ul>
        </nav>
        <button className="botao-capa">
          <b> Entre em contato !</b>
          <img
            alt="Icone do aplicativo Whatsapp"
            src={whatsapp}
            width={"30px"}
            height={"30px"}
          />
        </button>
      </motion.div>
    </header>
  );
};

export default HeadSlide;
