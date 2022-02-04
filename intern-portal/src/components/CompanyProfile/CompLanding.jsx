import React,{useState,useEffect,useContext} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Avatar, Button, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { FaWindows } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import logo from '../images/iitglogo.png';
import { Box } from '@mui/system';
import { LoggedUserContext } from '../../context/LoggedUserContext';


const CompLanding = () => {
  const[text,setText]=useState({name:'',
  about:'',
  location:'',
  phone:'',
  email:'',
  website:'',
  logo:'',
linkedin:''})
const navigate = useNavigate();
const handleInput=(e)=>{
   const name= e.target.name;
   const value=e.target.value;

   setText({...text, [name]:value})
}

  const [companyUser,setCompanyUser]= useContext(LoggedUserContext);
  const [company,setCompany]=useState({});

const location=useLocation();
const path=location.pathname.split('/')[2];

  useEffect(()=>{
    const getCompany=async()=>{
    const res=await axios.get('/company/'+path);
    setCompany(res.data);
    }
  getCompany()
  },[path])

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



  return( <Container className='center-ele'>
      {company?(<Button>View Profile</Button>):( <Box
      component="form"
      sx={{ mt: 2, paddingX: 45 }}
      onSubmit={handleCompSubmit}
    >
      <Grid className="box-shadow form-pad" paddingX={6} container spacing={3}>
        <Grid item lg={12} alignItems="center">
           
          <Typography variant="h4">Register Your Company</Typography>
          
          
        </Grid>

        <Grid item xs={12} className="flex form-inp">
          <Avatar alt="Remy Sharp" src={logo} />
          <Button>Upload your logo</Button>
        </Grid>
        <Grid item className="flex form-inp" xs={12}>
          <label htmlFor="">Name</label>
          <TextField
            value={text.name}
            name="name"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Phone</label>
          <TextField
            value={text.phone}
            name="phone"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Location</label>
          <TextField
            value={text.location}
            name="location"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Email Id</label>
          <TextField
            value={text.email}
            name="email"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Linked In Id</label>
          <TextField
            value={text.linkedin}
            name="linkedin"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">Website</label>
          <TextField
            value={text.website}
            name="website"
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid className="flex form-inp" item xs={12}>
          <label htmlFor="">About</label>
          <TextField
            value={text.about}
            name="about"
            onChange={handleInput}
            multiline
            fullWidth
            maxRows={4}
          />
        </Grid>
        <Button type="submit" variant="outlined">Register</Button>
      </Grid>
    </Box>)
}
         </Container>
         )
  
};

export default CompLanding;
