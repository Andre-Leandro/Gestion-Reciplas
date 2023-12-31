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
import { createIngreso } from "../../utils/api/ingresos";
import { getAllProveedores } from "../../utils/api/proveedores";
import CustomModal from "../../components/CustomModal";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function IngresosMP() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState();
  const [totalPedido, setTotalPedido] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCancelar, setIsOpenCancelar] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModalCancelar = () => {
    setIsOpenCancelar(true);
  };

  const closeModalCancelar = () => {
    setIsOpenCancelar(false);
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
    name: "lineasIngreso", // Nombre del campo de formulario que es un arreglo
  });

  useEffect(() => {
    console.log("Proveedor Seleccionado: ", proveedorSeleccionado);
    setValue("proveedor", Number(proveedorSeleccionado?.id));
  }, [proveedorSeleccionado]);

  useEffect(() => {
    setValue("lineasIngreso", dataTable);
    console.log("Deprecado: ", dataTable);
  }, [dataTable]);

  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => createIngreso(formData),
    onSuccess: () => {
      toast.success("Ingreso registrado con exito", {
        position: "bottom-center"
      })
      setValue("comentarios", "")
      setDataTable([]);
      setTotalPedido(0)
    },
    onError: (error) => {
      toast.error("Error de red 👾. Intente nuevamente", {
        position: "bottom-center"
      })
    },
  });

  const validateForm = (values) => {
    const errors = {};

    if (!values.proveedor) {
      errors.proveedor = 'Seleccione algún proveedor';
    }

    if (!values.lineasIngreso || values.lineasIngreso.length === 0) {
      errors.lineasIngreso = 'Agregue al menos una linea de ingreso';
    }
    return errors;
  };

  const sub = (values) => {
    const errors = validateForm(values);

    if (Object.keys(errors).length === 0) {
      mutate(values)
    } else {
      if (errors.proveedor) {
        toast.warning(`${errors.proveedor}`, {
          position: "bottom-center"
        })
      }
      if (errors.lineasIngreso) {
        toast.warning(`${errors.lineasIngreso}`, {
          position: "bottom-center"
        })
      }
      console.log('Errores de validación:', errors);
    }
    // mutate(values)
  }

  return (
    <>
      <div className="Page">
        <div className="ParteSuperior">
          <div style={{ padding: "0px 0px 20px 20px" }}>
            <Navegacion />
          </div>
          <h1 style={{ margin: "0" }}>INGRESO MATERIA PRIMA</h1><ToastContainer />
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
            <RegistrarMP dataTable={dataTable} setDataTable={setDataTable} totalPedido={totalPedido} setTotalPedido={setTotalPedido} />
          </div>{" "}
          <div style={{ textAlign: "right", width: "100%" }}>
            {" "}
            <button
              className="Button"
              onClick={openModalCancelar}
              style={{
                backgroundColor: isLoading ? '#d3d3d3' : '', // Cambia el color a gris si isLoading es true
                cursor: isLoading ? 'not-allowed' : 'pointer', // Cambia el cursor si isLoading es true
                opacity: isLoading ? 0.6 : 1, // Ajusta la opacidad si isLoading es true
              }}
              >
              CANCELAR
            </button>
            <button
              className="Button"
              onClick={openModal}
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? '#d3d3d3' : '', // Cambia el color a gris si isLoading es true
                cursor: isLoading ? 'not-allowed' : 'pointer', // Cambia el cursor si isLoading es true
                opacity: isLoading ? 0.6 : 1, // Ajusta la opacidad si isLoading es true
              }}
            >
              GUARDAR
            </button>
            <CustomModal
              isOpen={isOpen}
              onClose={closeModal}
              aceptar={true}
              title="Registrar ingreso"
              content="¿Desea registrar el ingreso?"
              onSave={handleSubmit((values) => sub(values))}
            />
            <CustomModal
              isOpen={isOpenCancelar}
              onClose={closeModalCancelar}
              aceptar={true}
              title="Cancelar ingreso"
              content="¿Desea cancelar el ingreso?"
              onSave={() => navigate('/materias-primas/listado')}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IngresosMP;
