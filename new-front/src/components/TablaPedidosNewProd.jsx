import { useState } from 'react';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import "../componentsStyles.css";

// Datos de ejemplo
const rows = [
  { name: '6728901', nombre: "Polietileno de baja densidad (PEBD)", fecha: "12/12/2022", estado: "En fabricación"},
  { name: '6728991', nombre: "Polietileno de alta densidad (PEAD)", fecha: "12/12/2022", estado: "Pendiente de entrega"},
  { name: '6722344', nombre: "Polipropileno (PP)", fecha: "12/12/2022", estado: "En fabricación"},
  { name: '6278111', nombre: "Policloruro de vinilo (PVC)", fecha: "12/12/2022", estado: "En fabricación"},
  { name: '6738901', nombre: "Polietileno tereftalato (PET)", fecha: "12/12/2022", estado: "En fabricación"},
  { name: '6738991', nombre: "Poliestireno (PS)", fecha: "12/12/2022", estado: "Pendiente de entrega"},
  { name: '6732344', nombre: "Polipropileno expandido (PPE)", fecha: "12/12/2022", estado: "Pendiente de entrega"},
  { name: '6238111', nombre: "Policarbonato (PC)", fecha: "12/12/2022", estado: "Pendiente de entrega"}

];


// Componente del buscador
function Buscador({ searchTerm, onSearchTermChange }) {





  return (
    <Grid container xs={3}>
      <TextField
            fullWidth
            label="Buscar ID"
        />
    </Grid>
  );
}

// Componente de la tabla
export default function TablaPedidosNew() {
  const [searchTerm, setSearchTerm] = useState('');



  const handleDetails = (row) => {
    console.log("Detalles:", row);
  }


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detalles-pedidos-prod');
  }





  // Filtra los datos según el término de búsqueda
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: '10px' }}>
      <div style={{ paddingBottom: '30px' }}>
        <Buscador searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Button color="info" size="small" variant="outlined">Todos</Button>
                {/* <button className='Button'>Select all</button>   */}
              </TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left" component="th" scope="row">
                  <Checkbox />
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.nombre}</TableCell>
                <TableCell align="center">{row.fecha}</TableCell>
                <TableCell align="center">{row.estado}</TableCell>
                <TableCell align="center"><button
                  className='Button'
                  onClick={() => handleClick()}
                >
                  Detalles
                </button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
