import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TablaHistorial from "../../components/TablaHistorial";
import Navegacion from "../../components/Navegacion";

import Modal from "react-overlays/Modal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import dayjs from "dayjs";

function RegistrarPedido() {
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                id="NyACliente"
                label="Nombre y Apellido"
                defaultValue="Nilson"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                id="DNICliente"
                label="DNI"
                defaultValue="32000900"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                disabled
                id="DireccionCliente"
                label="Dirección"
                defaultValue="Calle Rivadavia 4200"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                disabled
                id="LocalidadCliente"
                label="Localidad"
                defaultValue="Fontana"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                disabled
                id="ProvinciaCliente"
                label="Provincia"
                defaultValue="Chaco"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                disabled
                id="TelefonoCliente"
                label="Telefono"
                defaultValue="3624 00000"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                disabled
                id="EmailCliente"
                label="Correo Electronico"
                defaultValue="nilson.nehuen@ca.frre.utn.edu.ar"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                disabled
                id="date"
                label="Fecha de registro"
                type="date"
                defaultValue={"2017-05-24"}
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

function DetallesCliente() {
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };
  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>DETALLES DE CLIENTE</h1>
        </div>
        <div className="Caja">
          <RegistrarPedido />
        </div>
        <div style={{ textAlign: "right", width: "85%" }}>
          {" "}
          <NavLink to="/modificar-cliente">
            <button className="Button">MODIFICAR</button>
          </NavLink>
          <button className="Button" onClick={() => setShowModal(true)}>
            ELIMINAR
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
                  <div className="modal-title">Confirmar Eliminación</div>
                  <div>
                    <span className="close-button" onClick={handleClose}>
                      x
                    </span>
                  </div>
                </div>
                <div className="modal-desc">
                  <p>¿Desea eliminar al cliente?</p>
                </div>
                <div className="modal-footer">
                  <button className="secondary-button" onClick={handleClose}>
                    Cancelar
                  </button>
                  <NavLink to="/clientes">
                    <button className="primary-button" onClick={handleSuccess}>
                      Aceptar
                    </button>
                  </NavLink>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        {/* Aca va la tabla */}
        <div className="Caja">
          <TablaHistorial />
        </div>
      </div>
    </>
  );
}

export default DetallesCliente;