import { Button, Card } from '@material-ui/core';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

const JobCard = ({job}) => {

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








const handleDelete=async()=>{
  try{
    await axios.delete(`/jobs/${job._id}`);
    console.log('deleted')
    window.location.reload();
  }catch(err){
  console.log(err);
  }
}

  return(
     <Card  >
       <div >
    <h1>{job.company}</h1>
    <p>{job.profile}</p>
    <p>{job.about}</p>
   <Button color='primary'  variant="contained">Delete</Button>
   <Button color='primary'  variant="contained">Edit</Button>
    </div>
  </Card>)
};

export default JobCard;
