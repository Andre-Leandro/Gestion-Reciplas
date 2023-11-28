import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState } from "react";
/* import Listbox from "./Listbox"; */
/* import MateriasPrimas from "../utils/data/MateriasPrimas.json"; */
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllMateriasPrimas } from "../utils/api/materiasPrimas";
import { useQuery } from "react-query";

function RegistrarMP() {
  const { data, isLoading, error } = useQuery("materias", () =>
    getAllMateriasPrimas()
  );
  const [materiasPrimas, setMateriasPrimas] = useState(data || []);
  /*   const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => updatePID(Number(idPid), formData),
    onSuccess: () => {
      console.log("Salio todo bien");
      // navigate(`/investigadores/5`);
      navigate(-1);
    },
    onError: () => {
      console.log("Salio todo mal");
    },
  });
  const { fields, append, remove, update } = useFieldArray({
    control, // Debes proporcionar el objeto control de useForm
    name: "materiaPrimas", // Nombre del campo de formulario que es un arreglo
  }); */

  const [rows, setRows] = useState([]);

  const agregarElemento = () => {
    console.log(data);
    // Verificar si hay algo seleccionado
    if (!selectedValue) {
      // Manejar el caso en el que no hay nada seleccionado
      console.warn("No hay ningún producto seleccionado.");
      return;
    }

    // Verificar si el producto ya está en rows
    const productoExistente = dataTable.find(
      (row) => row.codigo === selectedValue.id
    );

    if (!productoExistente) {
      // Si el producto no está en rows, agregar un nuevo elemento
      const nuevoElemento = {
        id: dataTable.length + 1,
        codigo: selectedValue.id,
        producto: selectedValue.nombre,
        cantidad: 0,
        precio: 0,
        total: 0,
      };

      setDataTable((prevData) => [...prevData, nuevoElemento]);
      setTotalPedido((total) => total + selectedValue.precio);
    }
  };

  function eliminarElemento(row) {
    const id = row.id;
    const nuevaLista = dataTable.filter((row) => row.id !== id);
    setDataTable(nuevaLista);
    setTotalPedido((TotalPedido = TotalPedido - row.precio));
  }

  /*     const handleOnChange = (event, value) => {
    onSelect(value); // Aquí obtienes el valor seleccionado por el usuario
  }; */

  const columns = [
    { field: "codigo", headerName: "ID", width: 90 },
    {
      field: "producto",
      headerName: "Materia Prima",
      width: 250,
      editable: false,
    },
    {
      field: "cantidad",
      headerName: "Cantidad",
      width: 150,
      editable: true,
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 110,
      editable: true,

    },
    {
      field: "total",
      headerName: "Total",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      sortable: false,
      disableSelectionOnClick: true,
      field: "eliminar",
      headerName: "",
      width: 110,
      editable: false,
      renderCell: (params) => (
        <Button
          className="Button"
          color="primary"
          onClick={() => eliminarElemento(params.row)}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  let [TotalPedido, setTotalPedido] = useState(0);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const [dataTable, setDataTable] = useState([]);

  const handleEdit = (params) => {
    console.log(params);

    // Obtener el nuevo valor editado
    const nuevoValor = params.value

    // Verificar qué campo se está editando
    if (params.field === "cantidad" || params.field === "precio") {
      // Acciones específicas cuando se edita la cantidad o el precio
      console.log(`Editando ${params.field}: ${nuevoValor}`);
    }

    // Realizar otras acciones comunes aquí si es necesario

/*     // Actualizar el estado con los nuevos datos
    setDataTable(() => {
      const rowIndex = dataTable.findIndex((item) => item.id === params.row.id);

      // Actualizar el campo editado en el nuevo estado
      dataTable[rowIndex][params.field] = nuevoValor;

      // Actualizar el total
      dataTable[rowIndex].total =
        dataTable[rowIndex].cantidad * dataTable[rowIndex].precio;

      return dataTable;
    }); */
  };

  return (
    <div style={{ height: "85%", width: "100%" }}>
      <div style={{ display: "flex", padding: "10px" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          getOptionLabel={(option) => option.nombre} // Aquí se especifica la propiedad "nombre" como la que se mostrará en la interfaz
          sx={{ width: 300 }}
          onChange={(event, value) => handleSelect(value)}
          renderInput={(params) => <TextField {...params} label="Producto" />}
        />

        <button className="Button" onClick={agregarElemento}>
          AGREGAR
        </button>
      </div>
      <div>
        {" "}
        <DataGrid
          autoHeight
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          disableRowSelectionOnClick
          rows={dataTable}
          columns={columns}
          pageSize={100}
          disableSelectionOnClick
          pageSizeOptions={[10, 20, 100]}
          onCellEditStop={handleEdit}
        />
      </div>
      <div
        style={{
          justifyContent: "right",
          width: "100%",
          padding: "10px",
          display: "flex",
        }}
      >
        <p style={{ paddingRight: "5px" }}>TOTAL:</p>
        <TextField disabled id="FechaRegistro" value={TotalPedido} />{" "}
      </div>
    </div>
  );
}

export default RegistrarMP;
