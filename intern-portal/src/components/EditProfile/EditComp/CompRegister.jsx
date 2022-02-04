import {Box,Button,Grid,Avatar,TextField,Typography} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo from "../../images/iitglogo.png";
import "./compReg.css";
import axios from "axios";
import { useLocation } from 'react-router-dom'; 

const CompRegister = ({ setState }) => {
  const [companyUser,setCompanyUser]=useState({})
  const location=useLocation();
  const path=location.pathname.split('/')[2];

  const [company,setCompany]=useState({})
  useEffect(()=>{
    const getCompany=async()=>{
    const res=await axios.get('/company/'+path);
    setCompany(res.data);
    }
  getCompany()
  },[companyUser])




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


  const handleUpdate = async () => {
   
    const updatedData = {
      userId: company._id,
      logo: company.logo,
      name: company.name,
      phone: company.phone,
      location: company.location,
      email: company.email,
      linkedin:company.linkedin,
      website: company.website,
      about: company.about,
      
    };
    try {
      await axios.put(`/company/${company._id}`, {
        updatedData
      });
      console.log("Company updated successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCompany({...company,[name]: value });
  };

  return (
    <Box
      component="form"
      sx={{ mt: 2, paddingX: 45 }}
      
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
            autoFocus={true}
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
        
            <Button onClick={handleUpdate} type="submit" variant="outlined">Update</Button>
            <Button onClick={()=>setState(false)} variant='outlined' color="danger">Close</Button>
          
        
      </Grid>
    </Box>
  );
};

export default CompRegister;
