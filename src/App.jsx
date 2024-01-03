import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "boxicons";

import HeadSlide from "./Components/Slide/Slide";
import Sobre from "./Components/Sobre/Sobre";
import IconCards from "./Components/Cards/IconCards";
import TituloEstilizado from "./Components/TituloEstilizado";
import handshakeIcon from "./assets/handshake.png";
import pin from "./assets/pin.png";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <HeadSlide />
      <div style={{ margin: "6rem 2.5rem" }}>
        <Sobre />
      </div>

      <div style={{ margin: "6rem 2.5rem" }}>
        <TituloEstilizado
          titulo={"Nossos Serviços"}
          icon={handshakeIcon}
          iconWidth={"85px"}
          iconHeight={"85px"}
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

      <div style={{ margin: "7rem 2.5rem" }}>
        <TituloEstilizado
          titulo={"Contato"}
          icon={pin}
          iconWidth={"75px"}
          iconHeight={"75px"}
        />

        <Contact />
      </div>
    </>
  );
}

export default App;
