import TablaRegistrarPedido from "../../components/TablaRegistrarPedido";
import Navegacion from "../../components/Navegacion";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../componentsStyles.css";
import { NavLink } from "react-router-dom";

function Datos() {
  let [dni, setdni] = React.useState("");
  let [nombre, setnombre] = React.useState("");
  let [direccion, setdireccion] = React.useState("");
  let [localidad, setlocalidad] = React.useState("");
  let [provincia, setprovincia] = React.useState("");
  let [telefono, settelefono] = React.useState("");
  let [email, setemail] = React.useState("");

  const handleDniChange = (event) => {
    setdni(event.target.value);
    if (dni == "4482608") {
      setnombre("Tobias Alejandro Maciel Meister");
      setdireccion("Poncho Verde 2345");
      setlocalidad("Corrientes");
      setprovincia("Corrientes");
      settelefono(3794992109);
      setemail("tobiasmaciel@gmail.com");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ display: "inline", width: "100%", height: "100%" }}>
        <Box
          sx={{
            padding: "20px",
            width: "100%",
            minheight: "100%",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="dni"
                label="DNI"
                value={dni}
                onChange={handleDniChange}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                enable
                id="nombre"
                label="Nombre y Apellido"
                value={nombre}
                defaultValue="32000900"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="DireccionCliente"
                label="Dirección"
                value={direccion}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="LocalidadCliente"
                label="Localidad"
                value={localidad}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="ProvinciaCliente"
                label="Provincia"
                value={provincia}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                enable
                id="TelefonoCliente"
                label="Telefono"
                value={telefono}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                enable
                id="EmailCliente"
                label="Correo Electronico"
                value={email}
              />
            </Grid>
            <Grid item xs={6}>
              <NavLink to="/agregar-cliente">
                <button className="Button">Registrar nuevo cliente</button>
              </NavLink>
            </Grid>

          </Grid>
        </Box>
      </div>
      <div></div>
    </React.Fragment>
  );
}
function DatosPedido() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ display: "inline", width: "100%", height: "100%" }}>
        <Box
          sx={{
            padding: "20px",
            width: "100%",
            minheight: "100%",
          }}
        >
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="date"
                label="Fecha de entrega estimada"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
      <div></div>
    </React.Fragment>
  );
}
function RegistrarPedido() {
  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>REGISTRAR PEDIDO</h1>
        </div>
        <div className="Caja">
          <h3 style={{ marginLeft: 5, textAlign: "left" }}>
            Datos de Clientes
          </h3>
          <Datos />
        </div>
        <div className="Caja">
          <h3 style={{ marginLeft: 5, textAlign: "left" }}>Datos de pedido</h3>
          <DatosPedido />
        </div>
        <div className="Caja" style={{ margin: "20px" }}>
          <div className="Tabla">
            <TablaRegistrarPedido />
          </div>{" "}
          <div style={{ textAlign: "right", width: "100%" }}>
            {" "}
            <button className="Button">GUARDAR</button>
            <button className="Button">CANCELAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrarPedido;