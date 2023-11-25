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
      Sector:
      <Select
        fullWidth
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        style={{ width: "83%" }}
      >
        {/*<MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem value={10}>Administración</MenuItem>
        <MenuItem value={20}>Ventas</MenuItem>
        <MenuItem value={30}>Compras</MenuItem>
        <MenuItem value={30}>Producción</MenuItem>
      </Select>
    </>
  );
}
