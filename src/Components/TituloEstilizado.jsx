import React from "react";

const TituloEstilizado = ({
  titulo,
  icon,
  iconWidth,
  iconHeight,
  classLabel = "titulo-estilizado",
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className={classLabel} style={{}}>
          {titulo}
        </h2>
        {icon && (
          <img
            alt="Icone decorativo"
            className="icon"
            src={icon}
            width={iconWidth}
            height={iconHeight}
          />
        )}
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
