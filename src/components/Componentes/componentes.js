import { Grid, InputLabel } from '@material-ui/core';
import Box from '@mui/material/Box';
import PrimaryButton from './button';
import { Display1 } from './tipografy';
import { SecondaryButton } from './button';
import ThemeTextField from './textField';

export default function Componentes() {
  return (
    <Box className='containerComponentes'>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <PrimaryButton size='large' sx={{marginLeft:'1000px'}} href='/proto-clinica'>Volver</PrimaryButton>
        </Grid>
        <Grid item xs={12}>
          <Display1 >Componentes</Display1>
        </Grid>
        <Grid item xs={3}>
          <Display1 >Primary Button</Display1>
        </Grid>
        <Grid item xs={3}>
          <PrimaryButton size='small' fullWidth>Small</PrimaryButton>
        </Grid>
        <Grid item xs={3}>
          <PrimaryButton size='medium' fullWidth>Medium</PrimaryButton>
        </Grid>
        <Grid item xs={3}>
          <PrimaryButton size='large' fullWidth>Large</PrimaryButton>
        </Grid>
        <Grid item xs={3}>
          <Display1 >Secondary Button</Display1>
        </Grid>
        <Grid item xs={3}>
          <SecondaryButton size='small' fullWidth>Small</SecondaryButton>
        </Grid>
        <Grid item xs={3}>
          <SecondaryButton size='medium' fullWidth>Medium</SecondaryButton>
        </Grid>
        <Grid item xs={3}>
          <SecondaryButton size='large' fullWidth>Large</SecondaryButton>
        </Grid>
        <Grid item xs={3}>
          <Display1 >TextField</Display1>
        </Grid>
        <Grid item xs={3}>
          <InputLabel >Normal</InputLabel>
          <ThemeTextField  fullWidth placeholder='TextField'/>
        </Grid>
        <Grid item xs={3}>
        <InputLabel >Disabled</InputLabel>
          <ThemeTextField  disabled fullWidth placeholder='TextField'/>
        </Grid>
        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={3}>
          <Display1>Select</Display1>
        </Grid>
      </Grid>
    </Box>
  );
}