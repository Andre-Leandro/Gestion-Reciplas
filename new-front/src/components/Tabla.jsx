import { useState } from 'react';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox, TextField, Grid, Button } from '@mui/material';
import MateriasPrimas from "../utils/data/MateriasPrimas.json"
import { getAllMateriasPrimas } from '../utils/api/materiasPrimas';
import { useQuery } from 'react-query';



// Datos de ejemplo
/* const rows = [
  { name: '6728901', calories: "Polietileno de baja densidad (PEBD)", fat: "Plástico flexible y resistente", carbs: 24, protein: 4.0 },
  { name: '6728991', calories: "Polietileno de alta densidad (PEAD)", fat: "Material rígido y duradero", carbs: 37, protein: 4.3 },
  { name: '6722344', calories: "Polipropileno (PP)", fat: "Plástico versátil que se utiliza en la fabricación de diversos productos plásticos", carbs: 24, protein: 6.0 },
  { name: '6278111', calories: "Policloruro de vinilo (PVC)", fat: "Plástico resistente al impacto y a la intemperie", carbs: 24, protein: 6.0 },
  { name: '6738901', calories: "Polietileno tereftalato (PET)", fat: "Es un plástico transparente y resistente utilizado en la fabricación de botellas", carbs: 24, protein: 4.0 },
  { name: '6738991', calories: "Poliestireno (PS)", fat: "Es un plástico rígido y transparente utilizado en la fabricación de vasos", carbs: 37, protein: 4.3 },
  { name: '6732344', calories: "Polipropileno expandido (PPE)", fat: "se utiliza en la fabricación de productos como bandejas de alimentos, envases protectores", carbs: 24, protein: 6.0 },
  { name: '6238111', calories: "Policarbonato (PC)", fat: "Es un plástico transparente y resistente ", carbs: 24, protein: 6.0 }

]; */


const rows2 = [
  { name: '6728901', calories: "Polietileno tereftalato (PET)", fat: "Es un plástico transparente y resistente utilizado en la fabricación de botellas", carbs: 24, protein: 4.0 },
  { name: '6728991', calories: "Poliestireno (PS)", fat: "Es un plástico rígido y transparente utilizado en la fabricación de vasos", carbs: 37, protein: 4.3 },
  { name: '6722344', calories: "Polipropileno expandido (PPE)", fat: "Se utiliza en la fabricación de productos como bandejas de alimentos", carbs: 24, protein: 6.0 },
  { name: '6278111', calories: "Policarbonato (PC)", fat: "Plástico transparente y resistente ", carbs: 24, protein: 6.0 }]



// Componente del buscador
function Buscador({ searchTerm, onSearchTermChange }) {
  return (
    <Grid container xs={3} >
      <TextField
        fullWidth
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Buscar nombre"
      />
    </Grid>


  );
}

// Componente de la tabla
export default function Tabla() {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    data,
    isLoading: isLoadingMP,
    error,
  } = useQuery("proveedores", () => getAllMateriasPrimas());

  console.log(data);

  // Filtra los datos según el término de búsqueda
  const filteredRows = data?.filter((row) =>
    row.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: '10px' }}>
      <div style={{ paddingBottom: '50px' }}>
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
              <TableCell align="center"><strong>Nombre</strong></TableCell>
              {/* <TableCell align="center"><strong>Descripcion</strong></TableCell> */}
              <TableCell align="center"><strong>Cantidad Mínima (kg)</strong></TableCell>
              <TableCell align="center"><strong>Cantidad Actual (kg)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows?.map((row) => (
              <TableRow key={row.nombre}>
                <TableCell align="center">
                  <Checkbox />
                </TableCell>
                <TableCell align="center">{row.nombre}</TableCell>
                {/* <TableCell align="center">{row.descripcion}</TableCell> */}
                <TableCell align="center">{(row.cantidadStock)*0.19}</TableCell>
                <TableCell align="center">{row.cantidadStock}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
