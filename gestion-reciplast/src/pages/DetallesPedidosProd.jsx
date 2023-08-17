
import Navegacion from "../components/Navegacion";
import TablaListadoDeProductos from "../components/TablaListadoDeProductos";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

import Modal from "react-overlays/Modal";
import { useState } from "react";

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
                id="DNICliente"
                label="Fecha de pedido"
                defaultValue="17/03/2023"
              />
            </Grid>
            <Grid item xs={4}>
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
              <FormControl>
                <FormLabel id="demo-form-control-label-placement">
                  Estado
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="En fabricación"
                >
                  <FormControlLabel
                    value="En fabricación"
                    defaultChecked
                    control={<Radio />}
                    label="En fabricación"
                  />
                  <FormControlLabel
                    value="Pendiente de entrega"
                    control={<Radio />}
                    label="Pendiente de entrega"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div></div>
    </React.Fragment>
  );
}

function DetallesPedidosProd() {
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
        <div style={{ width: "100%", paddingBottom: "30px" }}>
          <h1 style={{ margin: "0" }}>DETALLES DE PEDIDOS</h1>
          <Navegacion />
        </div>
        <div className="Caja">
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
        <div style={{ textAlign: "right", width: "90%" }}>
          {" "}
          <button className="Button" onClick={() => setShowModal(true)}>GUARDAR</button>
          <button className="Button" onClick={() => setShowModal2(true)}>IMPRIMIR</button>
          <div>
            <Modal
              className="modal"
              show={showModal}
              onHide={handleClose}
              renderBackdrop={renderBackdrop}
            >
              <div>
                <div className="modal-header">
                  <div className="modal-title">Confirmar los cambios</div>
                  <div>
                    <span className="close-button" onClick={handleClose}>
                      x
                    </span>
                  </div>
                </div>
                <div className="modal-desc">
                  <p>¿Esta seguro de realizar dicha acción?</p>
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
                  <div className="modal-title">Imprimir pedido</div>
                  <div>
                    <span className="close-button" onClick={handleClose2}>
                      x
                    </span>
                  </div>
                </div>
                <div className="modal-desc">
                  <p>¿Seguro que desea imprimir?</p>
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
    </>
  );
}

export default DetallesPedidosProd;