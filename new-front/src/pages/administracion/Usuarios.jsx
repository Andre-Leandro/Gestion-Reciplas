import { Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import TablaClientes from "../../components/TablaClientes";
import Navegacion from "../../components/Navegacion";
import "../../componentsStyles.css";
import CssBaseline from "@mui/material/CssBaseline";
import Modal from "react-overlays/Modal";
import "../../Modal.css";
import "../../componentsStyles.css";
import { useState } from "react";
import TablaUsuarios from "../../components/TablaUsuarios";


function Usuarios() {
    const [showModal, setShowModal] = useState(false);
  
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  
    const handleClose = () => setShowModal(false);
  
    const handlePrint = () => {
      setShowModal(true);
    };

    const handleSuccess = () => {
        console.log("success");
    };
  
    return (
      <>
        <div className="Page">
          <div className="ParteSuperior">
            <div style={{ padding: "0px 0px 20px 20px" }}><Navegacion/></div>
            <h1 style={{ margin: "0" }}>LISTA DE USUARIOS</h1>
          </div>
          <div className="Caja">
            <CssBaseline />
            <TablaUsuarios />
            <div
              style={{
                textAlign: "right",
                width: "100%",
                padding: "20px 0 20px 0",
              }}
            >
              
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Usuarios;