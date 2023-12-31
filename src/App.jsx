import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "boxicons";

import HeadSlide from "./Components/Slide/Slide";
import Sobre from "./Components/Sobre/Sobre";
import IconCards from "./Components/Cards/IconCards";
import TituloEstilizado from "./Components/TituloEstilizado";
import handshakeIcon from "./assets/handshake.png";
function App() {
  return (
    <>
      <HeadSlide />
      <div style={{ margin: "6rem 2.5rem" }}>
        <Sobre />
      </div>

      <div style={{ margin: "6rem 4rem" }}>
        <TituloEstilizado titulo={"Nossos Serviços"} icon={handshakeIcon} />

        <IconCards />
      </div>
    </>
  );
}

export default App;
