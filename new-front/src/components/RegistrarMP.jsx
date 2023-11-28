import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState } from "react";
/* import Listbox from "./Listbox"; */
import MateriasPrimas from "../utils/data/MateriasPrimas.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function RegistrarMP() {
  function eliminarElemento(row) {
    const id = row.id;
    const nuevaLista = rows.filter((row) => row.id !== id);
    setRows(nuevaLista);
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
      editable: false,
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

  const [rows, setRows] = useState([]);

  const agregarElemento = () => {
    // Verificar si hay algo seleccionado
    if (!selectedValue) {
      // Manejar el caso en el que no hay nada seleccionado
      console.warn("No hay ningún producto seleccionado.");
      return;
    }

    // Verificar si el producto ya está en rows
    const productoExistente = rows.find(
      (row) => row.codigo === selectedValue.codigo
    );

    if (!productoExistente) {
      // Si el producto no está en rows, agregar un nuevo elemento
      const nuevoElemento = {
        id: rows.length + 1,
        codigo: selectedValue.codigo,
        producto: selectedValue.nombre,
        cantidad: 1,
        precio: selectedValue.precio,
        total: selectedValue.precio,
      };

      setRows((prevRows) => [...prevRows, nuevoElemento]);
      setTotalPedido((total) => total + selectedValue.precio);
    }
  };

  const [selectedValue, setSelectedValue] = useState(null);

  let [TotalPedido, setTotalPedido] = useState(0);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div style={{ height: "85%", width: "100%" }}>
      <div style={{ display: "flex", padding: "10px" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={MateriasPrimas}
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
          rows={rows}
          columns={columns}
          pageSize={100}
          disableSelectionOnClick
          pageSizeOptions={[10, 20, 100]}
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
