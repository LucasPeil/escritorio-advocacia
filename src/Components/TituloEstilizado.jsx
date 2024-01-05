import React from "react";

const TituloEstilizado = ({ titulo, icon, iconWidth, iconHeight }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "#5D5E62",
            letterSpacing: "0.5rem",

            marginBottom: "15px",
          }}
        >
          {titulo}
        </h2>
        {icon && <img src={icon} width={iconWidth} height={iconHeight} />}
      </div>
      <div
        style={{
          backgroundColor: "#b47820",
          color: "#b47820",
          width: "10rem",
          height: "0.4rem",
        }}
      ></div>
    </>
  );
};

export default TituloEstilizado;
