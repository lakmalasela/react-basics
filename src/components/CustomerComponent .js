import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Button,
  Grid,
  Container,
  Typography,
  Snackbar
} from '@mui/material';

// Status options for the select field
const statusOptions = ['Pending', 'Completed', 'Deleted'];





// Validation schema using Yup
const validationSchema = Yup.object().shape(
  {
  customerName: Yup.string().required('Customer name is required').matches(/^[A-Za-z ]*$/, 'Customer name can only contain letters and spaces'),
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must be at least 1'),
  status: Yup.string().required('Status is required'),
  gender: Yup.string().required('Gender is required'),
});










// Main CustomerComponent
const CustomerComponent = () => {
  // Initial values for the form fields
  const initialValues = {
    customerName: '',
    age: '',
    status: '',
    gender: '',
  };
  
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Form submission handler
  const handleSubmit = (values,{resetForm}) => {
    console.log('Form values:', values);

    resetForm();

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar after it's shown
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Customer Form
      </Typography>







      <Formik


        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
        
        () => (



          <Form>



            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="customerName"
                  as={TextField}
                  label="Customer Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <ErrorMessage name="customerName" component="div" style={{ color: 'red' }} />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="age"
                  as={TextField}
                  label="Age"
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <ErrorMessage name="age" component="div" style={{ color: 'red' }} />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="status"
                  as={TextField}
                  select
                  label="Status"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                >
                  {statusOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage name="status" component="div" style={{ color: 'red' }} />
              </Grid>

              <Grid item xs={12}>





                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Gender</FormLabel>
                  <Field name="gender" as={RadioGroup}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </Field>
                  <ErrorMessage name="gender" component="div" style={{ color: 'red' }} />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '5vh' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>

               {/* Snackbar for success alert */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000} // Automatically close after 3 seconds
            onClose={handleCloseSnackbar}
            message="Values successfully added!" // Success message
          />
          </Form>
        )
        }




      </Formik>
    </Container>
  );
};

export default CustomerComponent;
