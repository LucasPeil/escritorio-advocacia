import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "boxicons";

import HeadSlide from "./Components/Slide/Slide";
import Sobre from "./Components/Sobre/Sobre";
import IconCards from "./Components/Cards/IconCards";
import TituloEstilizado from "./Components/TituloEstilizado";
import handshakeIcon from "./assets/handshake.png";
import question from "./assets/question.png";
import pin from "./assets/pin.png";

import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Perguntas from "./Components/Perguntas/Perguntas";

function App() {
  return (
    <>
      <HeadSlide />
      <div
        id="sobre"
        style={{
          transition: "all 0.3s ease",
          margin: "7rem 0",
        }}
      >
        <Sobre />
      </div>

      <div id="servicos" style={{ margin: "6rem 2.5rem" }}>
        <TituloEstilizado
          titulo={"Nossos Serviços"}
          icon={handshakeIcon}
          iconWidth={"65px"}
          iconHeight={"65px"}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {Array.from({ length: 6 }, (_, index) => (
            <IconCards num={index + 1} />
          ))}
        </div>
      </div>
      <div
        id="duvidas"
        style={{
          margin: "7rem 0",

          backgroundColor: "#eae7e4",
          padding: " 1rem 2.5rem",
        }}
      >
        <TituloEstilizado
          titulo={"Dúvidas Frequentes"}
          icon={question}
          iconWidth={"50px"}
          iconHeight={"50px"}
        />

        <Perguntas />
      </div>

      <div
        id="contato"
        style={{
          margin: "7rem 0 10rem 0",
          boxSizing: "border-box",
          padding: " 0 2.5rem",
        }}
      >
        <TituloEstilizado
          titulo={"Contato"}
          icon={pin}
          iconWidth={"50px"}
          iconHeight={"50px"}
        />

        <Contact />
      </div>

      <div
        style={{
          marginTop: "2rem ",
          padding: " 0 2.5rem",
          backgroundColor: "#36373b",
          height: "10vh",
          borderTop: "15px solid #b47820",
        }}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
