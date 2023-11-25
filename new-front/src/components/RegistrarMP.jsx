import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState } from "react";
import Listbox from "./Listbox";

import TextField from "@mui/material/TextField";

function RegistrarMP() {
  function eliminarElemento(row) {
    const id = row.id;
    const nuevaLista = rows.filter((row) => row.id !== id);
    setRows(nuevaLista);
    setTotalPedido((TotalPedido = TotalPedido - row.precio));
  }

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
    const nuevoElemento = {
      id: rows.length + 1,
      codigo: selectedValue.codigo,
      producto: selectedValue.label,
      cantidad: 1,
      precio: selectedValue.precio,
      total: selectedValue.precio,
    };

    setRows((prevRows) => [...prevRows, nuevoElemento]);
    setTotalPedido((TotalPedido = TotalPedido + selectedValue.precio));
  };

  const [selectedValue, setSelectedValue] = useState(null);

  let [TotalPedido, setTotalPedido] = useState(0);

  const handleSelect = (value) => {
    setSelectedValue(value);
    console.log(value.label); // Actualizar el estado con el valor seleccionado
  };

  return (
    <div style={{ height: "85%", width: "100%" }}>
      <div style={{ display: "flex", padding: "10px" }}>
        <Listbox onSelect={handleSelect} />
        <button className="Button" onClick={agregarElemento}>
          AGREGAR
        </button>
      </div>
      <div>
        {" "}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
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