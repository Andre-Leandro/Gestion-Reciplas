import Grid from '@mui/material/Grid'
import { Box } from '@mui/system';


function RegProductos() {
  return (
    // <div style={{width: "100vh", height:"1500px", border: "5px solid black" }}>
    <Grid container >

      <Grid item xs={12}>
        <Box border={2} margin="10px 10px 0px 10px">
          <p>home  Stock  Registrar</p>
        </Box>
      </Grid>

      <Grid item xs={12} height="100%">
        <Box border={2} margin="10px 10px 0px 10px">
          <h1>Registrar Productos</h1>
        </Box>
      </Grid>

    </Grid>
    // </div>
  );
}

export default RegProductos;