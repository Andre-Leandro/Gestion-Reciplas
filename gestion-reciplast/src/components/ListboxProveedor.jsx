import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function ListboxProveedor() {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={proveedores}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Proveedores" />}
    />
  );
}

const proveedores = [
    {
      label: "PlastiPro",
    },
    {
      label: "EcoPlast",
    },
    {
      label: "Plastic Solutions",
    },
    {
      label: "GreenPlast",
    },
    {
      label: "Plastix",
    },
    {
      label: "EcoFlex",
    },
    {
      label: "Plasticor",
    },
    {
      label: "EcoTech",
    },
    {
      label: "PlastiGreen",
    },
    {
      label: "EcoPlastic",
    },
    {
      label: "Plasticus",
    },
    {
      label: "EcoMold",
    },
    {
      label: "Plasteco",
    },
    {
      label: "EcoPro",
    },
    {
      label: "Plastirec",
    },
  ];
  
export default ListboxProveedor;