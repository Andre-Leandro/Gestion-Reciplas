import React from 'react';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';




function Registro({ accion, usuarios, handleArea }) {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');


  const handleButtonClick = () => {
    const usuarioEncontrado = usuarios.find((u) => u.nombre === usuario);
    if (usuarioEncontrado) {
      accion(true)
      handleArea(usuarioEncontrado.area);
      navigate('/');
    }
  };


  return (
    <div>
      <h2>Registro</h2>
      <div>
        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      <button onClick={handleButtonClick}>Registrarse</button>
    </div>
  );
}

export default Registro;


