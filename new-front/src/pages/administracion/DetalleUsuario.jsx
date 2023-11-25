import React, { useState } from "react";
import {
    Grid,
    Box,
    TextField,
    Button,
    Typography,
    Link,
    Card,
} from "@mui/material";
//import './RegisterProductPage.css'; // Agrega un archivo CSS para estilos adicionales

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import { MuiFileInput } from "mui-file-input";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { NavLink } from "react-router-dom";
import SelectSmall from "../../components/SelectSmall";
import Navegacion from "../../components/Navegacion";
import Modal from "react-overlays/Modal";
import "../../Modal.css";
import CssBaseline from "@mui/material/CssBaseline";
import "../../componentsStyles.css";

function Datos() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ display: "inline", width: "100%", height: "100%" }}>
                <div>
                    <h3 style={{ marginLeft: 5, textAlign: "left" }}>
                        Datos del usuario
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
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                id="Nombre"
                                label="Nombre"
                                defaultValue="Tobias"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                id="Apellido"
                                label="Apellido"
                                defaultValue="Maciel"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                id="Fecha"
                                label="Fecha de nacimiento"
                                defaultValue="12/04/2003"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                id="usuario"
                                label="Usuario"
                                defaultValue="TobiMaciel"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                id="Sector"
                                label="Sector"
                                defaultValue="Ventas"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                id="Nombre"
                                label="ID"
                                defaultValue="9999"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                disabled
                                label="Usuario que registro"
                                defaultValue="André"
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <TextField
                                fullWidth
                                disabled
                                label="Fecha de registro"
                                defaultValue="12/02/2022"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div></div>
        </React.Fragment>
    );
}
/* Grid
container
xs={12}
justifyContent="flex-start"
alignItems="center"
spacing={1}
rowSpacing={2}
columnSpacing={{ xs: 1, sm: 2, md: 3 }}
>
<Grid item xs={4}>
  <label>
    <TextField
      id="outlined-multiline-flexible"
      label="Nombre"
      multiline
      maxRows={6}
    />
  </label>
</Grid>

<Grid item xs={4}>
  <label>
    <TextField
      id="outlined-multiline-flexible"
      label="Apellido"
      multiline
      maxRows={4}
    />
  </label>
</Grid>
<Grid item xs={4}>
  <TextField
    id="date"
    label="Fecha de nacimiento"
    type="date"
    defaultValue="2017-05-24"
    InputLabelProps={{
      shrink: true,
    }}
  />
</Grid>
<Grid item xs={6}>
  <TextField
    id="outlined-multiline-flexible"
    label="Usuario"
    multiline
    maxRows={6}
  />
</Grid>
</Grid> */

function DetalleUsuario() {
    const [productType, setProductType] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null);

    const handleProductTypeChange = (event) => {
        setProductType(event.target.value);
        // Si el usuario selecciona "Materia Prima", se borra el valor de precio
        // y se deshabilita el campo para que no se pueda ingresar un valor.
        if (event.target.value === "Materia Prima") {
            setProductPrice("");
        }
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductDescriptionChange = (event) => {
        setProductDescription(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleProductImageChange = (event) => {
        setProductImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos del producto al servidor para registrarlo
        console.log({
            productType,
            productName,
            productDescription,
            productPrice,
            productImage,
        });
    };

    // Aquí se agrega el estilo CSS utilizando template literals
    const styles = `
    input[type="number"]:disabled {
    color: #aaa;
    }
    `;

    const [file, setFile] = React.useState(null);

    const handleChange = (newFile) => {
        setFile(newFile);
    };

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
        <div className="Page">
            <div className="ParteSuperior">
                <div style={{ padding: "0px 0px 20px 20px" }}>
                    <Navegacion />
                </div>
                <h1 style={{ margin: "0" }}>DETALLE DE USUARIO</h1>
            </div>
            <div className="Caja">
                <Datos />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "99%",
                        padding: "20px 0 20px 0",
                    }}
                >
                    <div style={{ paddingRight: "10px" }}>
                        {" "}
                        
                        <NavLink to="/modificar-usuario"><button
                            className="Button"
                        >
                            Modificar
                        </button></NavLink>
                    </div>

                    <Modal
                        className="modal"
                        show={showModal}
                        onHide={handleClose}
                        renderBackdrop={renderBackdrop}
                    >
                        <div>
                            <div className="modal-header">
                                <div className="modal-title">Cancelar registro</div>
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
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </Modal>

                    {/* <button type="submit">Registrar</button> */}
                    <button className="Button" onClick={() => setShowModal2(true)}>
                        Eliminar
                    </button>
                    {/* <button type="button">Cancelar</button> */}
                    <Modal
                        className="modal"
                        show={showModal2}
                        onHide={handleClose2}
                        renderBackdrop={renderBackdrop2}
                    >
                        <div>
                            <div className="modal-header">
                                <div className="modal-title">Eliminar usuario</div>
                                <div>
                                    <span className="close-button" onClick={handleClose2}>
                                        x
                                    </span>
                                </div>
                            </div>
                            <div className="modal-desc">
                                <p>¿Esta seguro de realizar dicha acción?</p>
                            </div>
                            <div className="modal-footer">
                                <button className="secondary-button" onClick={handleClose2}>
                                    Volver
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
    );
}

export default DetalleUsuario;