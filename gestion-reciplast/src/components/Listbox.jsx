import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Listbox({ onSelect }) {
  const handleOnChange = (event, value) => {
    onSelect(value); // Aquí obtienes el valor seleccionado por el usuario
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={productos}
      sx={{ width: 300 }}
      onChange={handleOnChange}
      renderInput={(params) => <TextField {...params} label="Producto" />}
    />
  );
}

const productos = [
  {
    label: "Mesa Plastica",
    codigo: 91287,
    precio: 200,
  },
  {
    label: "Silla Reciclada",
    codigo: 12435,
    precio: 150,
  },
  {
    label: "Escritorio Ecológico",
    codigo: 87654,
    precio: 300,
  },
  {
    label: "Banco de Plástico",
    codigo: 54321,
    precio: 180,
  },
  {
    label: "Estante de Reciclaje",
    codigo: 98765,
    precio: 250,
  },
  {
    label: "Mecedora Sostenible",
    codigo: 34567,
    precio: 220,
  },
  {
    label: "Macetero de Plástico",
    codigo: 67890,
    precio: 120,
  },
  {
    label: "Mesa de Centro Reutilizada",
    codigo: 43210,
    precio: 280,
  },
  {
    label: "Silla Plegable Eco-amigable",
    codigo: 78901,
    precio: 190,
  },
  {
    label: "Escritorio Modular Reciclable",
    codigo: 21098,
    precio: 320,
  },
  {
    label: "Banco de Jardín Sostenible",
    codigo: 87650,
    precio: 230,
  },
  {
    label: "Estante para Libros Ecológico",
    codigo: 54329,
    precio: 270,
  },
  {
    label: "Sofá de Plástico Recuperado",
    codigo: 98760,
    precio: 280,
  },
  {
    label: "Mesa de Comedor Sustentable",
    codigo: 34562,
    precio: 350,
  },
  {
    label: "Silla Ergonómica Reutilizable",
    codigo: 67895,
    precio: 240,
  },
];


export default Listbox;