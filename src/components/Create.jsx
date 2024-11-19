import * as React from "react";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSchema } from "./Schema";
import { Formik } from "formik";
import * as Yup from "yup";

const Create = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   company: "",
  //   jobTitle: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/user/contacts",
  //       data
  //     );
  //     console.log(res.data);
  //     setData({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phoneNumber: "",
  //       company: "",
  //       jobTitle: "",
  //     });

  //     setTimeout(() => {
  //       navigate('/fetch');
  //     }, 1000);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };
  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            company: "",
            jobTitle: "",
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await axios.post(
                "http://localhost:3000/api/user/contacts",
                values
              );
              console.log(res.data);

              setTimeout(() => {
                navigate("/fetch");
              }, 1000);
            } catch (error) {
              console.log("Error", error);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <TextField
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName}
                  helperText={errors.firstName}
                />

                <FormLabel>Last Name</FormLabel>
                <TextField
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName}
                  helperText={touched.lastName && errors.lastName}
                />

                <FormLabel>Email </FormLabel>
                <TextField
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <FormLabel>Phone Number </FormLabel>
                <TextField
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />

                <FormLabel>Company </FormLabel>
                <TextField
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company}
                  helperText={touched.company && errors.company}
                />

                <FormLabel>Job Title </FormLabel>
                <TextField
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.jobTitle}
                  helperText={touched.jobTitle && errors.jobTitle}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Create;
