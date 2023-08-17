import React from "react";
import Navegacion from "../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";

const Home = ({ usuario1 }) => {
  document.title = "Home";

  return (
    <div className="Page">
      <div className="ParteSuperior">
        <div style={{ padding: "0px 0px 20px 20px" }}>
          <Navegacion />
        </div>
        <h1 style={{ margin: "0" }}>¡Bienvenido {usuario1}!</h1>
      </div>
      <div className="Caja">
        <CssBaseline />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h3>HISTORIAL DE OPERACIONES</h3>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "20px",
            width: "96%",
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            Alta de usuario
          </h4>
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            26/05/2023
          </h4>
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            18:55
          </h4>
        </div>{" "}
        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "20px",
            width: "96%",
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            Pedido a proveedor
          </h4>
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            24/05/2023
          </h4>
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            18:35
          </h4>
        </div>{" "}
        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "20px",
            width: "96%",
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "10px",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            Modificacion de proveedor
          </h4>
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            24/05/2023
          </h4>
          <h4
            style={{
              width: "33%",
              textAlign: "center",
            }}
          >
            17:59
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;