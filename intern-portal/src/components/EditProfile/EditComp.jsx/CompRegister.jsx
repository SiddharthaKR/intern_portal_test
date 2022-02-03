import {Box,Button,Grid,Avatar,TextField,Typography} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo from "../../images/iitglogo.png";
import "./compReg.css";
import axios from "axios";
import { useLocation } from 'react-router-dom'; 

const CompRegister = ({ company,setState }) => {
  const [companyUser, setCompanyUser] = useState({});
  const location=useLocation();
  const getCompanyUserdetails = async () => {
    try {
      const res = await fetch("/auth/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application",
        },
      });
      const data = await res.json();
      setCompanyUser(data);
      console.log("yooo" + companyUser);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCompanyUserdetails();
  }, []);

  const handleCompSubmit = async () => {
   
    const newCompany = {
      userId: companyUser._id,
      name: text.name,
      about: text.about,
      location: text.location,
      phone: text.phone,
      email: text.email,
      website: text.website,
      logo: text.logo,
    };
    try {
      await axios.post("/company/register", newCompany);
      console.log("Company added");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [text, setText] = useState({
    name: "",
    about: "",
    location: "",
    phone: "",
    email: "",
    website: "",
    logo: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setText({ ...text, [name]: value });
  };

  return (
    <Box
      component="form"
      sx={{ mt: 2, paddingX: 45 }}
      onSubmit={handleCompSubmit}
    >
      <Grid className="box-shadow form-pad" paddingX={6} container spacing={3}>
        <Grid item lg={12} alignItems="center">
            {company? <Typography align="center" variant="h4" mt={2}>
            Edit Your Details
          </Typography>:<Typography variant="h4">Register Your Company</Typography>}
          
          
        </Grid>

        <Grid item xs={12} className="flex form-inp">
          <Avatar alt="Remy Sharp" src={logo} />
          <Button>Upload your logo</Button>
        </Grid>
        <Grid item className="flex form-inp" xs={12}>
          <label htmlFor="">Name</label>
          <TextField
            value={company.name}
            name="name"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Phone</label>
          <TextField
            value={company.phone}
            name="phone"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Location</label>
          <TextField
            value={company.location}
            name="location"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Email Id</label>
          <TextField
            value={company.email}
            name="email"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Linked In Id</label>
          <TextField
            value={company.linkedin}
            name="linkedin"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Website</label>
          <TextField
            value={company.website}
            name="website"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">About</label>
          <TextField
            value={company.about}
            name="about"
            onChange={handleInput}
            multiline
            fullWidth
            maxRows={4}
          />
        </Grid>
        {company ? (
          <div>
            <Button variant="outlined">Save</Button>
            <Button onClick={()=>setState(false)} variant='outlined' color="danger">Close</Button>
          </div>
        ) : (
          <Button type="submit" variant="outlined">Register</Button>
        )}
      </Grid>
    </Box>
  );
};

export default CompRegister;
