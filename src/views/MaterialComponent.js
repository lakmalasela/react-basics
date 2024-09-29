import { Button, Typography, Container, Box } from '@mui/material';
const MaterialComponent = ()=>{

return(
    <Container>
      <Box textAlign="center" mt={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Box>
    </Container>
)


}

export default MaterialComponent;