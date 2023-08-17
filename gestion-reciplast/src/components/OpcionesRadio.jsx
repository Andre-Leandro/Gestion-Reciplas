import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

function OpcionesRadio({ opciones }) {
  const [valorSeleccionado, setValorSeleccionado] = useState(opciones[0]);

  const handleChange = (event) => {
    setValorSeleccionado(event.target.value);
  };

  return (
    <RadioGroup value={valorSeleccionado} onChange={handleChange}>
      {opciones.map((opcion) => (
        <FormControlLabel
          key={opcion}
          value={opcion}
          control={<Radio />}
          label={opcion}
        />
      ))}
    </RadioGroup>
  );
}

export default OpcionesRadio;
