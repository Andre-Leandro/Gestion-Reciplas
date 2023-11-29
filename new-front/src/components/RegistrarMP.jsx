import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
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
import DeleteIcon from '@mui/icons-material/Delete';


function RegistrarMP( {dataTable, setDataTable, totalPedido, setTotalPedido} ) {
  const { data, isLoading: isLoadingMP, error } = useQuery("materias", () =>
    getAllMateriasPrimas()
  );

  const [selectedValue, setSelectedValue] = useState(null);

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
        materiaprima: selectedValue.id,
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

        <button className="Button" onClick={agregarElemento} style={{ marginLeft: "25px" }}>
          AGREGAR
        </button>
      </div>
      <div>
        {" "}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><strong>Materia Prima</strong></TableCell>
                <TableCell align="center"><strong>Cantidad</strong></TableCell>
                <TableCell align="center"><strong>Precio</strong></TableCell>
                <TableCell align="center"><strong>Total ($)</strong></TableCell>
                <TableCell align="center"><strong>Eliminar</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable?.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{data.find((item) => item.id === row.materiaprima)?.nombre}</TableCell>
                  <TableCell align="center"><TextField id="outlined-basic" variant="outlined" defaultValue={row.cantidad} onChange={(e) => handleEdit(e, row.id, 'cantidad')} /></TableCell>
                  <TableCell align="center"><TextField id="outlined-basic" variant="outlined" defaultValue={row.precio} onChange={(e) => handleEdit(e, row.id, 'precio')} /></TableCell>
                  <TableCell align="center">{Number(row.cantidad) * Number(row.precio)}</TableCell>
                  <TableCell align="center">
                    {" "}
                    {/* <Button
                      className="Button"
                      color="error"
                      onClick={() => eliminarElemento(row)}
                    >
                      Eliminar
                    </Button> */}
                    <DeleteIcon color="error" style={{ cursor: 'pointer' }} onClick={() => eliminarElemento(row)}/>
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
