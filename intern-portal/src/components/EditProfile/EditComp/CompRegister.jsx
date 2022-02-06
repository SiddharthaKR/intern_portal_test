import {Box,Button,Grid,Avatar,TextField,Typography} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/iitglogo.png";
import "./compReg.css";
import axios from "axios";
import { useLocation } from 'react-router-dom'; 
import { CompanyContext } from "../../../context/CompanyContext";

const CompRegister = ({ setState,changev }) => {
  const [company,setCompany]=useContext(CompanyContext);
  const location=useLocation();
  console.log("here it is="+company.userId)
  // const path=location.pathname.split('/')[2];

  // const [company,setCompany]=useState({})
  // useEffect(()=>{
  //   const getCompany=async()=>{
  //   const res=await axios.get('/company/'+path);
  //   setCompany(res.data);
  //   }
  // getCompany()
  // },[companyUser])




  // const getCompanyUserdetails = async () => {
  //   try {
  //     const res = await fetch("/auth/getuser", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application",
  //       },
  //     });
  //     const data = await res.json();
  //     setCompanyUser(data);
  //     console.log("yooo" + companyUser);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getCompanyUserdetails();
  // }, []);


  const handleUpdate = async (e) => {
   e.preventDefault();
    const updatedData = {
      userId: company.userId,
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
      await axios.put(`/company/${company._id}`, 
        updatedData,{
          headers: {
            'Content-Type': 'application/json'
            
        }
        }
      );
      console.log("Company updated successfully");
      changev(false)
      setState(false)
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
        <Typography align="center" variant="h4" mt={2}>
            Edit Your Details
          </Typography>
          
          
        </Grid>

        <Grid item xs={12} className="flex form-inp">
          <Avatar alt="Remy Sharp" src={logo} />
          <Button variant="outlined">Upload your logo</Button>
        </Grid>
        <Grid item className="flex form-inp" xs={12}>
          <label htmlFor="">Name</label>
          <TextField
          
            value={company.name}
            name="name"
            autoFocus={true}
            onChange={handleInput}
           
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Phone</label>
          <TextField
            value={company.phone}
            name="phone"
            onChange={handleInput}
        
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Location</label>
          <TextField
            value={company.location}
            name="location"
            onChange={handleInput}
           
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Email Id</label>
          <TextField
            value={company.email}
            name="email"
            onChange={handleInput}
          
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Linked In Id</label>
          <TextField
            value={company.linkedin}
            name="linkedin"
            onChange={handleInput}
           
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Website</label>
          <TextField
            value={company.website}
            name="website"
            onChange={handleInput}
            
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">About</label>
          <TextField
            value={company.about}
            name="about"
            onChange={handleInput}
            multiline
          
            maxRows={4}
          />
        </Grid>
        <Grid item style={{width:"100%",display:"flex",justifyContent:"space-evenly"}} >
            <Button onClick={handleUpdate} type="submit" variant="outlined">Update</Button>
            <Button onClick={()=>{
              changev(false)
              setState(false)}} variant='outlined' color="danger">Close</Button>
          </Grid>
        
      </Grid>
    </Box>
  );
};

export default CompRegister;
