import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

const NestedGrid = () =>{
  return (
    <Container>
      <Grid container spacing={2}>
        {/* Parent Grid Item */}
        <Grid item xs={12}>
          <Paper style={{ padding: 16 }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Paper style={{ padding: 8 }}>Nested Item 1</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper style={{ padding: 8 }}>Nested Item 2</Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NestedGrid;
