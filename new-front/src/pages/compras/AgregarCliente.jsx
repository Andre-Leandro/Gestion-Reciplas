import Navegacion from "../../components/Navegacion";

import { useState } from "react";
import Modal from "react-overlays/Modal";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Datos() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ display: "inline", width: "100%", height: "100%" }}>
        <div>
          <h3 style={{ marginLeft: 5, textAlign: "left" }}>
            Datos de Clientes
          </h3>
        </div>
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
                enable
                id="NyACliente"
                label="Nombre y Apellido"
               
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                enable
                id="DNICliente"
                label="DNI"
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="DireccionCliente"
                label="Dirección"
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="LocalidadCliente"
                label="Localidad"
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                enable
                id="ProvinciaCliente"
                label="Provincia"
                
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                enable
                id="TelefonoCliente"
                label="Telefono"
                
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                enable
                id="EmailCliente"
                label="Correo Electronico"
                
              />
            </Grid>
           
          </Grid>
        </Box>
      </div>
      <div></div>
    </React.Fragment>
  );
}

function AgregarCliente() {
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
          <h1 style={{ margin: "0" }}>AGREGAR CLIENTE</h1>
        </div>
        <div className="Caja">
          <Datos />
        </div>
        <div style={{ textAlign: "right", width: "85%" }}>
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
    </>
  );
}


export default AgregarCliente;