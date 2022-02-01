import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Avatar, Button, Typography } from '@mui/material';



const CompLanding = () => {

  const [companyDetails,setCompanyDetails]= useState({});

  const getCompanydetails= async()=>{
      try{
          const res= await fetch('/auth/getuser',{
              method: "GET",
              headers:{
                 
                  "Content-Type": "application"
              },
          });
          const data = await res.json();
          setCompanyDetails(data);

          if(!res.status ===200){
          const error= new Error(res.error);
          throw error;
          }
      } catch(err){
          console.log(err)
      }
  }


useEffect(()=>{
  getCompanydetails();
},[]);



  return <div>
  <Container>
      <Avatar src={companyDetails.email}/>
      <Typography variant='h2'>
          Hi {companyDetails.username}
      </Typography>
      <Button variant='outlined'>Company Profile</Button>
      <Button variant='outlined'>Edit company Profile</Button>
      <Button variant='outlined'>Post Job</Button>
      <Button variant='outlined'>Get Stats</Button>
      
     

  </Container>
  </div>;
};

export default CompLanding;
