import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

const ResponsiveGrid=()=> {
  return (
    <Container>
      <Grid container spacing={2}>
        {/* Item 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper style={{ padding: 16 }}>Item 1</Paper>
        </Grid>
        {/* Item 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper style={{ padding: 16 }}>Item 2</Paper>
        </Grid>
        {/* Item 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper style={{ padding: 16 }}>Item 3</Paper>
        </Grid>
        {/* Item 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper style={{ padding: 16 }}>Item 4</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ResponsiveGrid;
