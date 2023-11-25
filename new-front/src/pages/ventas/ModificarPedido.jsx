import TablaRegistrarPedido from "../../components/TablaRegistrarPedido";
import Navegacion from "../../components/Navegacion";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Modal from "react-overlays/Modal";
import "../../Modal.css";
import { useState } from "react";

function Datos() {
  let [dni, setdni] = React.useState("44826086");
  let [nombre, setnombre] = React.useState("Tobias Alejandro Maciel Meister");
  let [direccion, setdireccion] = React.useState("Poncho Verde 2345");
  let [localidad, setlocalidad] = React.useState("Corrientes");
  let [provincia, setprovincia] = React.useState("Corrientes");
  let [telefono, settelefono] = React.useState("3794992109");
  let [email, setemail] = React.useState("tobiasmaciel@gmail.com");

  const handleDniChange = (event) => {
    setdni(event.target.value);
    if (dni == "4482608212112") {
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
                defaultValue={"2017-05-29"}
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
function ModificarPedido() {
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };

  const [showModal2, setShowModal2] = useState(false);

  // Backdrop JSX code
  const renderBackdrop2 = (props) => <div className="backdrop" {...props} />;

  var handleClose2 = () => setShowModal2(false);

  var handleSuccess2 = () => {
    console.log("success");
  };
  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>MODIFICAR PEDIDO</h1>
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
            <button className="Button" onClick={() => setShowModal(true)}>
              CANCELAR
            </button>
            <button className="Button" onClick={() => setShowModal2(true)}>
              GUARDAR
            </button>
            <div>
              <Modal
                className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
              >
                <div>
                  <div className="modal-header">
                    <div className="modal-title">Confirmar Cancelación</div>
                    <div>
                      <span className="close-button" onClick={handleClose}>
                        x
                      </span>
                    </div>
                  </div>
                  <div className="modal-desc">
                    <p>¿Desea cancelar?</p>
                  </div>
                  <div className="modal-footer">
                    <button className="secondary-button" onClick={handleClose}>
                      Cancelar
                    </button>
                    <button className="primary-button" onClick={handleSuccess}>
                      Aceptar
                    </button>
                  </div>
                </div>
              </Modal>
              <Modal
                className="modal"
                show={showModal2}
                onHide={handleClose2}
                renderBackdrop={renderBackdrop2}
              >
                <div>
                  <div className="modal-header">
                    <div className="modal-title">Confirmar cambios</div>
                    <div>
                      <span className="close-button" onClick={handleClose2}>
                        x
                      </span>
                    </div>
                  </div>
                  <div className="modal-desc">
                    <p>¿Desea guardar los cambios?</p>
                  </div>
                  <div className="modal-footer">
                    <button className="secondary-button" onClick={handleClose2}>
                      Cancelar
                    </button>
                    <button className="primary-button" onClick={handleSuccess2}>
                      Aceptar
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModificarPedido;