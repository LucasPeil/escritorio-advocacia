import React, { useState } from "react";
import { motion } from "framer-motion";
import "./perguntas.css";
import arrow from "../../assets/arrow.png";
const Perguntas = () => {
  const [showPergunta1, setShowPergunta1] = useState(false);
  const [showPergunta2, setShowPergunta2] = useState(false);
  const [showPergunta3, setShowPergunta3] = useState(false);
  const [showPergunta4, setShowPergunta4] = useState(false);
  const [showPergunta5, setShowPergunta5] = useState(false);
  const variantsPerguntas = {
    open: {
      top: "3rem",
      height: "100px",
      opacity: 1,
    },
    closed: {
      top: "0rem",
      height: "0px",
      overflow: "hidden",
      opacity: 0,
    },
  };

  const variantsBotoes = {
    open: { transform: "rotate(90deg)" },
    closed: {
      transform: "rotate(0deg)",
    },
  };
  return (
    <div
      style={{
        margin: "5rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Pegunta 1 */}
      <div
        onClick={() => setShowPergunta1(!showPergunta1)}
        className="pergunta-container"
      >
        <div className="pergunta-botao-container">
          <p className="perguntas">Pergunta 1</p>
          <motion.button
            onClick={() => setShowPergunta1(!showPergunta1)}
            animate={showPergunta1 ? "open" : "closed"}
            variants={variantsBotoes}
            transition={{
              ease: "ease",
              duration: 0.5,
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img src={arrow} width={"15px"} height={"15px"} />
          </motion.button>
        </div>

        <motion.div
          style={{ display: showPergunta1 ? "block" : "none" }}
          animate={showPergunta1 ? "open" : "closed"}
          variants={variantsPerguntas}
          transition={{ type: "spring", ease: "ease", duration: 1 }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia officia autem reprehenderit nam. Ipsam, sit. Ut itaque
            natus enim totam delectus dolorem dolorum, tenetur esse maxime
            doloremque quidem. Nihil.
          </p>
        </motion.div>
      </div>

      {/* Pegunta 2 */}
      <div
        onClick={() => setShowPergunta2(!showPergunta2)}
        className="pergunta-container"
      >
        <div className="pergunta-botao-container">
          <p className="perguntas">Pergunta 2</p>
          <motion.button
            onClick={() => setShowPergunta2(!showPergunta2)}
            animate={showPergunta2 ? "open" : "closed"}
            variants={variantsBotoes}
            transition={{
              ease: "ease",
              duration: 0.5,
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img src={arrow} width={"15px"} height={"15px"} />
          </motion.button>
        </div>

        <motion.div
          style={{ display: showPergunta2 ? "block" : "none" }}
          animate={showPergunta2 ? "open" : "closed"}
          variants={variantsPerguntas}
          transition={{ type: "spring", ease: "ease", duration: 1 }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia officia autem reprehenderit nam. Ipsam, sit. Ut itaque
            natus enim totam delectus dolorem dolorum, tenetur esse maxime
            doloremque quidem. Nihil.
          </p>
        </motion.div>
      </div>

      {/* Pegunta 3 */}
      <div
        onClick={() => setShowPergunta3(!showPergunta3)}
        className="pergunta-container"
      >
        <div className="pergunta-botao-container">
          <p className="perguntas">Pergunta 3</p>
          <motion.button
            onClick={() => setShowPergunta3(!showPergunta3)}
            animate={showPergunta3 ? "open" : "closed"}
            variants={variantsBotoes}
            transition={{
              ease: "ease",
              duration: 0.5,
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img src={arrow} width={"15px"} height={"15px"} />
          </motion.button>
        </div>

        <motion.div
          style={{ display: showPergunta3 ? "block" : "none" }}
          animate={showPergunta3 ? "open" : "closed"}
          variants={variantsPerguntas}
          transition={{ type: "spring", ease: "ease", duration: 1 }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia officia autem reprehenderit nam. Ipsam, sit. Ut itaque
            natus enim totam delectus dolorem dolorum, tenetur esse maxime
            doloremque quidem. Nihil.
          </p>
        </motion.div>
      </div>

      {/* Pegunta 4 */}
      <div
        onClick={() => setShowPergunta4(!showPergunta4)}
        className="pergunta-container"
      >
        <div className="pergunta-botao-container">
          <p className="perguntas">Pergunta 4</p>
          <motion.button
            onClick={() => setShowPergunta4(!showPergunta4)}
            animate={showPergunta4 ? "open" : "closed"}
            variants={variantsBotoes}
            transition={{
              ease: "ease",
              duration: 0.5,
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img src={arrow} width={"15px"} height={"15px"} />
          </motion.button>
        </div>

        <motion.div
          style={{ display: showPergunta4 ? "block" : "none" }}
          animate={showPergunta4 ? "open" : "closed"}
          variants={variantsPerguntas}
          transition={{ type: "spring", ease: "ease", duration: 1 }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia officia autem reprehenderit nam. Ipsam, sit. Ut itaque
            natus enim totam delectus dolorem dolorum, tenetur esse maxime
            doloremque quidem. Nihil. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsa mollitia officia autem reprehenderit nam.
            Ipsam, sit. Ut itaque natus enim totam delectus dolorem dolorum,
            tenetur esse maxime doloremque quidem. Nihil.
          </p>
        </motion.div>
      </div>
      {/* Pegunta 5 */}
      <div
        onClick={() => setShowPergunta5(!showPergunta5)}
        className="pergunta-container"
      >
        <div className="pergunta-botao-container">
          <p className="perguntas">Pergunta 5</p>
          <motion.button
            onClick={() => setShowPergunta5(!showPergunta5)}
            animate={showPergunta5 ? "open" : "closed"}
            variants={variantsBotoes}
            transition={{
              ease: "ease",
              duration: 0.5,
            }}
            style={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <img src={arrow} width={"15px"} height={"15px"} />
          </motion.button>
        </div>

        <motion.div
          style={{ display: showPergunta5 ? "block" : "none" }}
          animate={showPergunta5 ? "open" : "closed"}
          variants={variantsPerguntas}
          transition={{ type: "spring", ease: "ease", duration: 1 }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia officia autem reprehenderit nam. Ipsam, sit. Ut itaque
            natus enim totam delectus dolorem dolorum, tenetur esse maxime
            doloremque quidem. Nihil. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsa mollitia officia autem reprehenderit nam.
            Ipsam, sit. Ut itaque natus enim totam delectus dolorem dolorum,
            tenetur esse maxime doloremque quidem. Nihil.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Perguntas;
