import Navegacion from "../../components/Navegacion";

import { useState } from "react";
import Modal from "react-overlays/Modal";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { createProveedor } from "../../utils/api/proveedores";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/CustomModal";


function AgregarProveedor() {
  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    mutate(formData);
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    localidad: "",
    provincia: "",
    telefono: "",
    correo: "",
    cuilCuit: "",
    descripcion:""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => createProveedor(formData),
    onSuccess: () => {
      alert("Proveedor creado ");
      navigate(-1);
    },
    onError: (error) => {
      const errorMessage = error?.message;
      alert("Error inesperado: busque a nilson", errorMessage);
    },
  });

  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>AGREGAR PROVEEDOR</h1>
        </div>
        <div className="Caja">
          <div style={{ display: "inline", width: "100%", height: "100%" }}>
            <div>
              <h3 style={{ marginLeft: 45, textAlign: "left" }}>
                Datos del Proveedor
              </h3>
            </div>
            <Box
              sx={{
                padding: "20px",
                width: "97%",
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
                    id="nombre"
                    label="Nombre "
                    value={formData.nombre}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="apellido"
                    label="Apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="dni"
                    label="DNI"
                    value={formData.dni}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="direccion"
                    label="Dirección"
                    value={formData.direccion}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="localidad"
                    label="Localidad"
                    value={formData.localidad}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="provincia"
                    label="Provincia"
                    value={formData.provincia}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="telefono"
                    label="Teléfono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="correo"
                    label="Correo Electrónico"
                    value={formData.correo}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    enable
                    id="cuilCuit"
                    label="CUIL/CUIT"
                    value={formData.cuilCuit}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    enable
                    id="descripcion"
                    label="Descripción"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
        <div style={{ textAlign: "right", width: "85%" }}>
          {" "}
          <button className="Button">CANCELAR</button>
          <button className="Button" onClick={openModal}>
            GUARDAR
          </button>
          <CustomModal
            isOpen={isOpen}
            onClose={closeModal}
            aceptar={true}
            title="Registrar nuevo proveedor"
            content="¿Desea registrar el nuevo proveedor?"
            onSave={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default AgregarProveedor;
