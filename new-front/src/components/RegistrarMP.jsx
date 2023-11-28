import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState } from "react";
/* import Listbox from "./Listbox"; */
/* import MateriasPrimas from "../utils/data/MateriasPrimas.json"; */
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllMateriasPrimas } from "../utils/api/materiasPrimas";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function RegistrarMP( {dataTable, setDataTable} ) {
  const { data, isLoading: isLoadingMP, error } = useQuery("materias", () =>
    getAllMateriasPrimas()
  );

  const [selectedValue, setSelectedValue] = useState(null);

  let [totalPedido, setTotalPedido] = useState(0);

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
      (row) => row.id === selectedValue.id
    );

    if (!productoExistente) {
      // Si el producto no está en rows, agregar un nuevo elemento
      const nuevoElemento = {
        id: selectedValue.id,
        precio: 0,
        cantidad: 0,
        materiaprima: selectedValue,
      };

      setDataTable((prevData) => [...prevData, nuevoElemento]);
      setTotalPedido((prevTotal) => prevTotal + Number(nuevoElemento.precio) * Number(nuevoElemento.cantidad));
    }
  };

  function eliminarElemento(row) {
    const id = row.id;
    const precio = Number(row.precio);
    const cantidad = Number(row.cantidad);
    const totalEliminar = precio * cantidad;

    const nuevaLista = dataTable.filter((row) => row.id !== id);
    setDataTable(nuevaLista);
    setTotalPedido((prevTotal) => Number(prevTotal) - totalEliminar);
  }

  /*     const handleOnChange = (event, value) => {
    onSelect(value); // Aquí obtienes el valor seleccionado por el usuario
  }; */

  /*   const columns = [
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
    ]; */

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  // const [dataTable, setDataTable] = useState([]);
  const handleEdit = (event, id, field) => {
    // Obtener el nuevo valor editado
    const nuevoValor = event.target.value;

    // Encontrar la fila correspondiente en el estado y actualizar el campo
    setDataTable((prevDataTable) => {
      const rowIndex = prevDataTable.findIndex((item) => item.id === id);

      // Crear una nueva matriz para evitar la mutación directa del estado
      const newDataTable = [...prevDataTable];

      // Actualizar el campo editado en la nueva matriz
      newDataTable[rowIndex] = {
        ...newDataTable[rowIndex],
        [field]: nuevoValor,
        total:
          field === "cantidad"
            ? nuevoValor * newDataTable[rowIndex].precio
            : newDataTable[rowIndex].cantidad * nuevoValor,
      };

      // Actualizar el total general
      const newTotalPedido = newDataTable.reduce((total, row) => {
        return total + Number(row.cantidad) * Number(row.precio);
      }, 0);

      setTotalPedido(newTotalPedido);

      return newDataTable;

      return newDataTable;
    });
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
        {/* <DataGrid
          autoHeight
          disableColumnFilter
          disableColumnMenu
          disableColumnSelector
          disableRowSelectionOnClick
          rows={dataTable}
          columns={columns}
          disableSelectionOnClick
          onCellEditStop={handleEdit}
          pagination={false}
          pageSizeOptions={false}
          hideFooterPagination
        /> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Materia Prima</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Precio</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.materiaprima.nombre}</TableCell>
                  <TableCell align="center"><TextField id="outlined-basic" variant="outlined" defaultValue={row.cantidad} onChange={(e) => handleEdit(e, row.id, 'cantidad')} /></TableCell>
                  <TableCell align="center"><TextField id="outlined-basic" variant="outlined" defaultValue={row.precio} onChange={(e) => handleEdit(e, row.id, 'precio')} /></TableCell>
                  <TableCell align="center">{Number(row.cantidad) * Number(row.precio)}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button
                      className="Button"
                      color="primary"
                      onClick={() => eliminarElemento(row)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
        <TextField disabled id="FechaRegistro" value={totalPedido} />{" "}
      </div>
    </div>
  );
}

export default RegistrarMP;
