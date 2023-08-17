
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import "../App.css";



import TextField from "@mui/material/TextField";


function MultilineTextFields( {nombre, usuario, setUsuario} ) {

  


  return (
    <div style={{padding:"15px"}}>
      <TextField
        id="filled-multiline-flexible"
        label={nombre}
        multiline
        variant="filled"
        style={{width:"90%"}}
        value={usuario} 
        onChange={(e) => setUsuario(e.target.value)}
      />
    </div>
  );
}


function InputAdornments ({nombre, contrasena, setContrasena}) {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    return (
      <div style={{ padding: "15px" }}>
        <FormControl variant="filled" style={{ width: "90%" }}>
          <InputLabel htmlFor="filled-adornment-password">
            {nombre}
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={contrasena} 
            onChange={(e) => setContrasena(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }



  
  function Registro2({ accion, usuarios, handleArea, setUsuario1 }) {
    const navigate = useNavigate();
  
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
  
    const handleButtonClick = () => {
      const usuarioEncontrado = usuarios.find((u) => u.nombre === usuario);
      if (usuarioEncontrado && usuarioEncontrado.contrasena === contrasena ) {
        accion(true);
        handleArea(usuarioEncontrado.area);
        setUsuario1(usuarioEncontrado.nombre);
        navigate('/');
      }
    };
  
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f1f1f1",
        }}
      >
        <div className="CajaLogin">
          <h1 style={{ padding: "20px" }}>Iniciar Sesión</h1>
          <MultilineTextFields nombre={"Usuario"} usuario={usuario} setUsuario={setUsuario} />
          <InputAdornments nombre={"Contraseña"} contrasena={contrasena} setContrasena={setContrasena} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "88%",
              padding: "5px 0 10px 0",
              margin: "0px auto",
            }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Rercuérdame"
              style={{ padding: "10px 6px" }}
            />
            <button className="Button" onClick={handleButtonClick}> Iniciar sesión </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Registro2;
  





