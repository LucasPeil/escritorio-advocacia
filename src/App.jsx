import { useRef, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "boxicons";
import "./Components/Cards/iconCards.css";
import HeadSlide from "./Components/Slide/Slide";
import Sobre from "./Components/Sobre/Sobre";
import IconCards from "./Components/Cards/IconCards";
import TituloEstilizado from "./Components/TituloEstilizado";
import handshakeIcon from "./assets/handshake.png";
import question from "./assets/question.png";
import pin from "./assets/pin.png";
import { motion } from "framer-motion";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Perguntas from "./Components/Perguntas/Perguntas";
import TitleMotionDiv from "./Components/TitleMotionDiv";

function App() {
  const scrollRef = useRef(null);
  return (
    <>
      <HeadSlide />
      <article
        id="sobre"
        style={{
          margin: "7rem 0",
        }}
      >
        <Sobre />
      </article>

      <article id="servicos" style={{ margin: "6rem 2.5rem" }}>
        <TitleMotionDiv>
          <TituloEstilizado
            titulo={"Nossos Serviços"}
            icon={handshakeIcon}
            iconWidth={"65px"}
            iconHeight={"65px"}
          />
        </TitleMotionDiv>

        <div className="cards-container">
          {/*   {Array.from({ length: 6 }, (_, index) => (
            <IconCards num={index + 1} />
          ))} */}
          <IconCards num={1} delay={0.1} scrollRef={scrollRef} />
          <IconCards num={2} delay={0.3} scrollRef={scrollRef} />
          <IconCards num={3} delay={0.5} scrollRef={scrollRef} />
          <IconCards num={4} delay={0.5} scrollRef={scrollRef} />
          <IconCards num={5} delay={0.6} scrollRef={scrollRef} />
          <IconCards num={6} delay={0.7} scrollRef={scrollRef} />
        </div>
      </article>
      <article
        id="duvidas"
        style={{
          margin: "7rem 0",

          backgroundColor: "#eae7e4",
          padding: " 1rem 2.5rem",
        }}
      >
        <TitleMotionDiv>
          <TituloEstilizado
            titulo={"Dúvidas Frequentes"}
            icon={question}
            iconWidth={"50px"}
            iconHeight={"50px"}
          />
        </TitleMotionDiv>

        <Perguntas />
      </article>

      <article
        id="contato"
        style={{
          margin: "7rem 0 10rem 0",
          boxSizing: "border-box",
          padding: " 0 2.5rem",
        }}
      >
        <TitleMotionDiv>
          <TituloEstilizado
            titulo={"Contato"}
            icon={pin}
            iconWidth={"50px"}
            iconHeight={"50px"}
          />
        </TitleMotionDiv>

        <Contact />
      </article>

      <article
        style={{
          marginTop: "2rem ",
          padding: " 0 2.5rem",
          backgroundColor: "#36373b",
          height: "15vh",
          borderTop: "15px solid #b47820",
        }}
      >
        <Footer />
      </article>
    </>
  );
}

export default App;
