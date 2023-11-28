import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MateriasPrimas from "../utils/data/MateriasPrimas.json"

function Listbox({ onSelect }) {
  const handleOnChange = (event, value) => {
    onSelect(value); // Aquí obtienes el valor seleccionado por el usuario
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={MateriasPrimas}
      getOptionLabel={(option) => option.nombre}
      sx={{ width: 300 }}
      onChange={handleOnChange}
      renderInput={(params) => <TextField {...params} label="Producto" />}
    />
  );
}


export default Listbox;