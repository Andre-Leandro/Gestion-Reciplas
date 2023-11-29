import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Sector</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="sector"
    onChange={handleChange}
  >
      <MenuItem value={10}>Administración</MenuItem>
      <MenuItem value={20}>Ventas</MenuItem>
      <MenuItem value={30}>Compras</MenuItem>
      <MenuItem value={40}>Producción</MenuItem>
  </Select>
</FormControl>
  </>
  );
}

