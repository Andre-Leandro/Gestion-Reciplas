import React, { useState } from "react";
import Modal from "react-overlays/Modal";
import "../Modal.css";
import Navegacion from "./Navegacion";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fustavo from "../imagenes/Hasbulla.jpg"
import CampoValor from "../components/CampoValor";






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
            <Grid item xs={3}>
                
                  <img src= {Fustavo} alt="meñique" width="100%" />
                
              </Grid>

              <Grid item xs={6}>
                <CampoValor  nombre={"ID"} valor={"789191"} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  disabled
                  id="Nombre Producto"
                  label="Nombre Producto"
                  defaultValue="Polipropileno"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  disabled
                  id="Descripcion"
                  label="Descripcion"
                  defaultValue="Es un plastico resistente y transparete"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  disabled
                  id="LocalidadCliente"
                  label="Cant. Minima"
                  defaultValue="24 g"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  disabled
                  id="ProvinciaCliente"
                  label="Cant. Maxima"
                  defaultValue="50 g"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  disabled
                  id="Fecha Ultima modificacion"
                  label="Fecha ultima modificacion"
                  defaultValue="22/07/2023"
                />
              </Grid>
              
            </Grid>
          </Box>
        </div>
        <div></div>
      </React.Fragment>
    );
  }



















export default function Modals() {
 
  const [showModal, setShowModal] = useState(false);

  // Backdrop JSX code
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  var handleClose = () => setShowModal(false);

  var handleSuccess = () => {
    console.log("success");
  };




  return (
    <div className="modal-example">


          <div style={{ width: "100%", paddingBottom: "30px" }}>
            
                <div style={{ marginBottom: "20px", marginLeft: "10%", marginTop: "30px" }} >
                <Navegacion/>
                </div>


                <div style={{ marginBottom: "20px", marginLeft: "5%" }} >

                    <h1> Detalle de Productos Fabricados </h1>
                </div>
          </div>

          <div className="Caja">
            <Datos />
          </div>
          <div className="Caja">
            
          </div>
          {/* Aca va la tabla */}
          <div className="Caja">
            <div style={{ justifyContent: "right", width: "100%", padding:"20px", display:"flex"}}>
              
             
            </div>
          </div>
          <div style={{ textAlign: "right", width: "90%" }}>
            {" "}
        </div>





      <div>
        <button type="button" onClick={() => setShowModal(true)}>
          Open Modal
        </button>
      </div>
      <p>Click to get the open the Modal</p>

      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className="modal-header">
            <div className="modal-title">Modal Heading</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <p>Modal body contains text.</p>
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Close
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}