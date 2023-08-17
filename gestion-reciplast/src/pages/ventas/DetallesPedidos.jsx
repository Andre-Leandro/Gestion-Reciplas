import Navegacion from "../../components/Navegacion";
import TablaListadoDeProductos from "../../components/TablaListadoDeProductos";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../../Modal.css";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import Modal from "react-overlays/Modal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function FechaInput(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label={props.nombre} defaultValue={dayjs("2022-04-17")} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

function Datos() {
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
                id="FechaRegistro"
                label="Fecha Registro"
                defaultValue=" "
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
                disabled
                id="date"
                label="Fecha de pedido"
                type="date"
                defaultValue={"2017-05-24"}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                disabled
                id="Horadepedido"
                label="Hora de pedido"
                defaultValue="18:46"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                disabled
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

function DetallesPedidos() {
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
          <h1 style={{ margin: "0" }}>DETALLES DE PEDIDO</h1>
        </div>
        <div className="Caja">
          <h3 style={{ marginLeft: 5, textAlign: "left" }}>Datos de cliente</h3>
          <Datos />
        </div>
        <div className="Caja">
          <h3 style={{ marginLeft: 5, textAlign: "left" }}>Datos de pedido</h3>
          <DatosPedido />
        </div>
        {/* Aca va la tabla */}
        <div className="Caja">
          <TablaListadoDeProductos />
          <div
            style={{
              justifyContent: "right",
              width: "100%",
              padding: "20px",
              display: "flex",
            }}
          >
            <p style={{ paddingRight: "5px" }}>TOTAL:</p>
            <TextField disabled id="FechaRegistro" defaultValue="11060" />
          </div>
        </div>
        <div style={{ textAlign: "right", width: "85%" }}>
          {" "}
          <button className="Button" onClick={() => setShowModal(true)}>
            CANCELAR
          </button>
          <NavLink to="/modificar-pedido"><button className="Button">MODIFICAR</button></NavLink>
          <button className="Button">FACTURAR</button>
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
                  <p>¿Desea cancelar el pedido?</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default DetallesPedidos;