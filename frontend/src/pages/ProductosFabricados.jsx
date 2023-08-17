import React, { useState } from "react";
import Modal from "react-overlays/Modal";
import "../Modal.css";
import Navegacion from "../components/Navegacion";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Producto from "../imagenes/botella.jpg";
import CampoValor from "../components/CampoValor";
import { Button } from "@mui/material";
import "../componentsStyles.css";

export default function ProductosFabricados() {
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    setResultado(cantidad);
    setShowModal(false);
  };

  const [cantidad, setCantidad] = useState(" ");
  const [resultado, setResultado] = useState("330");

  return (
    <div className="Page">
      <div className="ParteSuperior">
        <div style={{ padding: "0px 0px 20px 20px" }}>
          <Navegacion />
        </div>
        <h1 style={{ margin: "0" }}>DETALLE DE PRODUCTOS FABRICADOS</h1>
      </div>
      <div className="Caja">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <div style={{ width: "30%", paddingRight: "20px" }}>
              <img
                src={Producto}
                alt="producto"
                style={{
                  height: "350px",
                  objectFit: "cover",
                  overflow: "hidden",
                }}
              />
            </div>

            <div style={{ width: "70%" }}>
              <React.Fragment>
                <CssBaseline />
                <div
                  style={{ display: "inline", width: "100%", height: "100%" }}
                >
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
                          id="id"
                          label="ID"
                          defaultValue="789191"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          disabled
                          id="nombreproducto"
                          label="Nombre producto"
                          defaultValue="Polipropileno"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          disabled
                          id="descripcion"
                          label="Descripcion"
                          defaultValue="Es un plastico resistente y transparente"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          fullWidth
                          disabled
                          id="cantidadmin"
                          label="Cantidad minima"
                          defaultValue="24"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          fullWidth
                          disabled
                          id="cantidadact"
                          label="Cantidad actual"
                          defaultValue=""
                          value={resultado}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          disabled
                          fullWidth
                          id="date"
                          label="Fecha ultima modificacion"
                          type="date"
                          defaultValue="2017-05-24"
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
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "98%",
              padding: "20px 0 20px 0",
            }}
          >
            <button className="Button" onClick={() => setShowModal(true)}>
              Modificar Stock
            </button>
          </div>
        </div>

        <Modal
          className="modal"
          show={showModal}
          onHide={handleClose}
          renderBackdrop={renderBackdrop}
        >
          <div>
            <div className="modal-header">
              <div className="modal-title"> </div>
              <div>
                <span className="close-button" onClick={handleClose}>
                  x
                </span>
              </div>
            </div>
            <div className="modal-desc">
              <p>Cantidad del producto: </p>
              <input
                type="text"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="secondary-button" onClick={handleClose}>
                Cancelar
              </button>
              <button className="primary-button" onClick={handleSuccess}>
                Confirmar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}