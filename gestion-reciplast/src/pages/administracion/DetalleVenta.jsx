import TablaDetalle from "../../components/TablaDetalle";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import Navegacion from "../../components/Navegacion";
import Modal from "react-overlays/Modal";
import "../../componentsStyles.css";

function FechaInput(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label={props.nombre} defaultValue={dayjs("2022-04-17")} />
      </DemoContainer>
    </LocalizationProvider>
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
                id="FechaPedido"
                label="Fecha de pedido"
                defaultValue="12/03/2023"
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
          </Grid>
        </Box>
      </div>
      <div></div>
    </React.Fragment>
  );
}

function DetalleVenta() {
  const [showModal, setShowModal] = useState(false);

  const [showModal1, setShowModal1] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleClose1 = () => setShowModal1(false);

  const handlePrint = () => {
    setShowModal(true);
  };
  
  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>DETALLE DE VENTA</h1>
        </div>
        <div className="Caja">
          <DatosPedido />
        </div>
        <div className="Caja">
          <TablaDetalle />
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
        <div
          style={{
            textAlign: "right",
            width: "85%",
            padding: "20px 0 20px 0",
          }}
        >
          {" "}
          <button
            className="Button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            IMPRIMIR
          </button>
        </div>
        <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
          >
            <div>
              <div className="modal-header">
                <div>
                  <span className="close-button" onClick={handleClose}>
                    x
                  </span>
                </div>
              </div>
              <div className="modal-desc">
                <p>¿Seguro desea imprimir?</p>
              </div>
              <div className="modal-footer">
                <button className="secondary-button" onClick={handleClose}>
                  Cancelar
                </button>
                <button
                  className="primary-button"
                  onClick={() => setShowModal1(true)}
                >
                  Aceptar
                </button>
                <Modal
                  className="modal"
                  show={showModal1}
                  onHide={handleClose}
                  renderBackdrop={renderBackdrop}
                >
                  <div>
                    <div className="modal-header">
                      <div>
                        <span
                          className="close-button"
                          onClick={() => {
                            setShowModal1(false);
                            setShowModal(false);
                          }}
                        >
                          x
                        </span>
                      </div>
                    </div>
                    <div className="modal-desc">
                      <p>Se ha impreso con éxito</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="primary-button"
                        onClick={() => {
                          setShowModal1(false);
                          setShowModal(false);
                        }}
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </Modal>

          
      </div>
    </>
  );
}

export default DetalleVenta;
