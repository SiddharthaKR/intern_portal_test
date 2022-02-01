import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Avatar, Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { FaWindows } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const CompLanding = () => {
  const[text,setText]=useState({name:'',
  about:'',
  location:'',
  phone:'',
  email:'',
  website:'',
  logo:''})
const navigate = useNavigate();
const handleInput=(e)=>{
   const name= e.target.name;
   const value=e.target.value;

   setText({...text, [name]:value})
}

  const [companyUser,setCompanyUser]= useState({});

  const getCompanyUserdetails= async()=>{
      try{
          const res= await fetch('/auth/getuser',{
              method: "GET",
              headers:{
                 
                  "Content-Type": "application"
              },
          });
          const data = await res.json();
          setCompanyUser(data);
        console.log("yooo"+companyUser)
          if(!res.status ===200){
          const error= new Error(res.error);
          throw error;
          }
      } catch(err){
          console.log(err)
      }
  }


useEffect(()=>{
  getCompanyUserdetails();
},[]);

const handleCompSubmit=async(e)=>{
    e.preventDefault();
    const newCompany={
        userId:companyUser._id,
        name:text.name,
        about:text.about,
        location:text.location,
        phone:text.phone,
       email:text.email,
       website:text.website,
       logo:text.logo
    }
    try{
        await axios.post("/company/register",newCompany)     
        console.log('Company added')
        navigate(`/company/${companyUser._id}`)
    }catch(err){
    console.log(err);
    }
}



  return <div>
  <Container>
      <Avatar src={companyUser.email}/>
      <Typography variant='h2'>
          Hi {companyUser.username}
      </Typography>
      <Button variant='outlined'>Company Profile</Button>
      <Button variant='outlined' >Add company</Button>
      <Button variant='outlined'>Post Job</Button>
      <Button variant='outlined'>Get Stats</Button>
      <form onSubmit={handleCompSubmit}>
          <h4>Add your Company</h4>
          <Paper>
          <TextField name="name" onChange={handleInput} id="standard-basic" value={text.name} label="Name" variant="standard" />
          <TextField name="about" onChange={handleInput} id="standard-basic" value={text.about} label="About Company" multiline  maxRows={4} variant="standard" />
          <TextField name="location" onChange={handleInput} id="standard-basic" value={text.location} label="Location" variant="standard" />
          <TextField name="phone" onChange={handleInput} id="standard-basic" value={text.phone} label="Phone" variant="standard" />
          <TextField name="email" onChange={handleInput} id="standard-basic" value={text.email} label="Email" variant="standard" />
          <TextField name="website" onChange={handleInput} id="standard-basic" value={text.website} label="Webite" variant="standard" />
          <TextField name="logo" onChange={handleInput} id="standard-basic" value={text.logo} label="Logo" variant="standard" />
          <Button variant="outlined" type="submit">Add</Button>
          </Paper>
      </form>
      <h2>Post Job</h2>
      <Paper elevation={3}>
       
      </Paper>
     

  </Container>
  </div>;
};

export default CompLanding;
