import React from "react";
import sobreImg from "../../assets/sobre-styled.png";
import TituloEstilizado from "../TituloEstilizado";
const Sobre = () => {
  return (
    <div
      style={{
        padding: "3rem 3rem",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#F5F3EF",
        boxShadow: " 0px 5px 10px #939393",
      }}
    >
      <img src={sobreImg} width={"32%"} />
      <div style={{ width: "40%" }}>
        <TituloEstilizado titulo={"Nossa História"} />

        <p style={{ fontSize: "1.5rem", width: "90%", lineHeight: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur
          velit diam, et porttitor leo luctus non. Proin sit amet cursus velit,
          nec dignissim augue. Vestibulum nec ligula porta, molestie ante vitae,
          fringilla velit. Nulla eget tincidunt risus. Suspendisse in maximus
          urna. Nam quis dui vitae urna posuere eleifend. Etiam est enim,
          rhoncus et augue non, dictum ultrices velit.Suspendisse in maximus
          urna. Nam quis dui vitae urna posuere eleifend. Etiam est enim,
          rhoncus et augue non, dictum ultrices velit. Etiam est enim, rhoncus
          et augue non, dictum ultrices velit.Suspendisse in maximus urna. Nam
          quis dui vitae urna posuere eleifend. Etiam est enim, rhoncus et augue
          non, dictum ultrices velit.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
