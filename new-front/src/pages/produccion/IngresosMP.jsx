import Navegacion from "../../components/Navegacion";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RegistrarMP from "../../components/RegistrarMP";
/* import ListboxProveedor from "../../components/ListboxProveedor"; */
import Modal from "react-overlays/Modal";
import "../../Modal.css";
import { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Proveedores from "../../utils/data/Proveedores.json";
import { useFieldArray, useForm } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { createCompra } from "../../utils/api/compras";
import { getAllProveedores } from "../../utils/api/proveedores";
import CustomModal from "../../components/CustomModal";

function IngresosMP() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    data,
    isLoading: isLoadingMP,
    error,
  } = useQuery("proveedores", () => getAllProveedores());

  console.log(data);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fecha: new Date().toISOString(),
      comentarios: "",
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control, // Debes proporcionar el objeto control de useForm
    name: "lineasCompras", // Nombre del campo de formulario que es un arreglo
  });

  useEffect(() => {
    console.log("Proveedor Seleccionado: ", proveedorSeleccionado);
    setValue("proveedor", Number(proveedorSeleccionado?.id));
  }, [proveedorSeleccionado]);

  useEffect(() => {
    setValue("lineasCompras", dataTable);
    console.log("Deprecado: ", dataTable);
  }, [dataTable]);

  /*   // Backdrop JSX code
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
  }; */

  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => createCompra(formData),
    onSuccess: () => {
      alert("Compra exitosa pibe 👽 👾");
      navigate(-1);
    },
    onError: (error) => {
      const errorMessage = error?.message;
      alert("Error inesperado: 👽 👾", errorMessage);
    },
  });

  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>INGRESO MATERIA PRIMA</h1>
        </div>
        <div className="Caja">
          <CssBaseline />
          <React.Fragment>
            <CssBaseline />
            <div style={{ display: "inline", width: "100%", height: "100%" }}>
              <div>
                <h3 style={{ marginLeft: 5, textAlign: "left" }}>
                  Datos de Ingreso
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
                  <Grid item xs={5}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={data} // Proporciona directamente el arreglo de objetos
                      getOptionLabel={(option) => option.nombre}
                      sx={{ width: 400 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Proveedores" />
                      )}
                      onChange={(event, newValue) =>
                        setProveedorSeleccionado(newValue)
                      }
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      fullWidth
                      enable
                      id="descripcion"
                      label="Comentarios (opcional)"
                      {...register("comentarios")}
                    />
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div></div>
          </React.Fragment>
        </div>
        <div className="Caja" style={{ margin: "20px" }}>
          <div className="Tabla">
            <RegistrarMP dataTable={dataTable} setDataTable={setDataTable} />
          </div>{" "}
          <div style={{ textAlign: "right", width: "100%" }}>
            {" "}
            <button className="Button">CANCELAR</button>
            <button className="Button" onClick={openModal}>
              GUARDAR
            </button>
            <CustomModal
              isOpen={isOpen}
              onClose={closeModal}
              guardar={true}
              title="Registrar ingreso"
              content="Se registrara el nuevo ingreso"
              onSave={handleSubmit((values) => mutate(values))}
            />
            {/* <div>
              <Modal
                className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
              >
                <div>
                  <div className="modal-header">
                    <div className="modal-title">Cancelar ingreso</div>
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
                    <div className="modal-title">Confirmar el ingreso</div>
                    <div>
                      <span className="close-button" onClick={handleClose2}>
                        x
                      </span>
                    </div>
                  </div>
                  <div className="modal-desc">
                    <p>¿Seguro que desea confirmar?</p>
                  </div>
                  <div className="modal-footer">
                    <button className="secondary-button" onClick={handleClose2}>
                      Cancelar
                    </button>
                    <button
                      className="primary-button"
                      // onClick={handleSubmit((values) => console.log("form: ", values))}
                      onClick={handleSubmit((values) => mutate(values))}
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </Modal>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default IngresosMP;
