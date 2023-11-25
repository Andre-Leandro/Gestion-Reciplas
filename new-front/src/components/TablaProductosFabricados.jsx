import { useState } from 'react';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import "../componentsStyles.css";

// Datos de ejemplo
const rows = [
  { name: '6728901', calories: "Polietileno de baja densidad (PEBD)", fat: "Plástico flexible y resistente", carbs: 24, protein: 4.0 },
  { name: '6728991', calories: "Polietileno de alta densidad (PEAD)", fat: "Material rígido y duradero", carbs: 37, protein: 4.3 },
  { name: '6722344', calories: "Polipropileno (PP)", fat: "Plástico versátil que se utiliza en la fabricación de diversos productos plásticos", carbs: 24, protein: 6.0 },
  { name: '6278111', calories: "Policloruro de vinilo (PVC)", fat: "Plástico resistente al impacto y a la intemperie", carbs: 24, protein: 6.0 },
  { name: '6738901', calories: "Polietileno tereftalato (PET)", fat: "Es un plástico transparente y resistente utilizado en la fabricación de botellas", carbs: 24, protein: 4.0 },
  { name: '6738991', calories: "Poliestireno (PS)", fat: "Es un plástico rígido y transparente utilizado en la fabricación de vasos", carbs: 37, protein: 4.3 },
  { name: '6732344', calories: "Polipropileno expandido (PPE)", fat: "se utiliza en la fabricación de productos como bandejas de alimentos, envases protectores", carbs: 24, protein: 6.0 },
  { name: '6238111', calories: "Policarbonato (PC)", fat: "Es un plástico transparente y resistente ", carbs: 24, protein: 6.0 }

];


// Componente del buscador
function Buscador({ searchTerm, onSearchTermChange }) {





  return (
    <TextField
        fullWidth
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Buscar ID" />
  );
}

// Componente de la tabla
export default function TablaProductosFabricados() {
  const [searchTerm, setSearchTerm] = useState('');



  const handleDetails = (row) => {
    console.log("Detalles:", row);
  }


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/modificar-stock-producto');
  }





  // Filtra los datos según el término de búsqueda
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: '10px' }}>
      <Grid container xs={3} marginBottom="30px" >
      <Buscador searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      
    </Grid>
      

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
              <TableCell align="center">Descripcion</TableCell>
              <TableCell align="center">Cant. Minima&nbsp;(g)</TableCell>
              <TableCell align="center">Cant. Actual&nbsp;(g)</TableCell>
              <TableCell align="center"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" >
                  <Checkbox />
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.calories}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
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
