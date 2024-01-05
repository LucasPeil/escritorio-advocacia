import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "./slide.css";
import capa2 from "../../assets/capa-2.jpg";
import capa3 from "../../assets/capa-3.jpg";
import capa4 from "../../assets/capa-4.jpg";

const HeadSlide = () => {
  const [show, setShow] = useState(false);
  const images = [capa3, capa2, capa4];

  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
    duration: 3000,
    transitionDuration: 3900,
    pauseOnHover: false,
    canSwipe: false,
    easing: "cubic-in",
  };
  return (
    <>
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
      <div className="capa-apresentacao">
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
              <a href="#duvidas">Dúvidas Frequentes</a>
            </li>
          </ul>
        </nav>
        <button className="botao-capa">
          Entre em contato conosco{" "}
          <box-icon
            size="md"
            type="logo"
            name="whatsapp"
            color="white"
          ></box-icon>
        </button>
      </div>
    </>
  );
};

export default HeadSlide;
