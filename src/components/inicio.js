import { Button, Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import PrimaryButton from './Componentes/button'
export default function Inicio() {
  return (
    <Box className='ContainerInicio'>
      <Grid container>
        <Grid item xs={6}>
          <PrimaryButton href='/licenciaMedica'>Licencias medicas</PrimaryButton>
        </Grid>
        <Grid item xs={6}>
          <PrimaryButton href='/componentes'>Componentes Clinica Alemana</PrimaryButton>
        </Grid>
      </Grid>
    </Box>
  );
}