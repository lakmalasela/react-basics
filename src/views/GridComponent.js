import { Container, Paper,Grid } from '@mui/material';
// import Grid2 from '@mui/material-next/Grid2';

const GridComponent = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>Header</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16 }}>Left Column</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: 16 }}>Right Column</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>Footer</Paper>
        </Grid>
      </Grid>
    </Container>

    // <div class="row">
    //   <div class="col-md-6">
    // </div>
    //   <div class="col-md-6">
    // </div>
    // </div>
  );
};

export default GridComponent;
