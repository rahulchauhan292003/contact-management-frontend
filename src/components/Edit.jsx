import * as React from "react";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id)
  const [editData, setEditData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/user/contacts/${id}`
        );
        setEditData(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/api/user/contacts/${id}`,
        editData
      );
      console.log(res.data);
      setEditData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
      });
      setTimeout(() => {
        navigate("/fetch");
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField
              name="firstName"
              value={editData.firstName}
              onChange={handleChange}
            />

            <FormLabel>Last Name</FormLabel>
            <TextField
              name="lastName"
              value={editData.lastName}
              onChange={handleChange}
            />

            <FormLabel>Email </FormLabel>
            <TextField
              name="email"
              value={editData.email}
              onChange={handleChange}
            />

            <FormLabel>Phone Number </FormLabel>
            <TextField
              name="phoneNumber"
              value={editData.phoneNumber}
              onChange={handleChange}
            />

            <FormLabel>Company </FormLabel>
            <TextField
              name="company"
              value={editData.company}
              onChange={handleChange}
            />

            <FormLabel>Job Title </FormLabel>
            <TextField
              name="jobTitle"
              value={editData.jobTitle}
              onChange={handleChange}
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
      </Box>
    </>
  );
};

export default Edit;
