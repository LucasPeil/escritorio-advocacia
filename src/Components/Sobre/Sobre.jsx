import React from "react";
import sobreImg from "../../assets/Sobre.jpg";
import TituloEstilizado from "../TituloEstilizado";
const Sobre = () => {
  return (
    <div
      style={{
        padding: "2rem 0",
        display: "flex",
        justifyContent: "end",
        // backgroundColor: "#F5F3EF",
        /*  boxShadow: " 0px 5px 10px #939393", */
        height: "65vh",
        position: "relative",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "-1rem",
          left: "6rem",
        }}
        src={sobreImg}
        width={"20%"}
      />
      <div
        style={{
          width: "100%",
          padding: "1rem 2rem",
          // backgroundColor: "#F0EEEB",
          backgroundColor: "#EAE7E4",

          maxHeight: "30rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",

            height: "100%",
          }}
        >
          <div style={{ width: "65%" }}>
            <TituloEstilizado titulo={"Nossa História"} />

            <p
              style={{
                fontSize: "1.3rem",

                lineHeight: "2rem",
              }}
            >
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
        </div>
      </div>
    </div>
  );
};

export default Sobre;
