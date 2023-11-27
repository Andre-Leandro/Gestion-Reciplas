import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Proveedores from "../data/Proveedores.json";

function ListboxProveedor() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Proveedores}  // Proporciona directamente el arreglo de objetos
      getOptionLabel={(option) => option.apellido}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Proveedores" />}
    />
  );
}

export default ListboxProveedor;
