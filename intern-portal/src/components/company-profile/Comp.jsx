import React, { useState, useEffect } from "react";
import CustomComponent from "./CustomComponent";
import About from "./About";
import OtherDetails from "./OtherDetails";
import JobPosted from "./JobPosted";
import TestjobCard from '../Jobs/TestjobCard'
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios"
import { useLocation } from 'react-router-dom'; 

const Comp = () => {

const location=useLocation();
const path=location.pathname.split('/')[2];

const [company,setCompany]=useState({})
const[userjobs,setUserJobs]=useState([]);

useEffect(()=>{
  const getCompany=async()=>{
  const res=await axios.get('/company/'+path);
  setCompany(res.data);
  }
getCompany()
},[path])

useEffect(()=>{
const getCompJobs=async()=>{
const res=await axios.get(`/jobs/find/${company._id}`)
setUserJobs(res.data)
}
getCompJobs()  
},[company])


  return (
    <>
    
      <CustomComponent company={company} />
      {
        company&&(<>
        <About company={company}/>
          <OtherDetails company={company}/>
          {/* <JobPosted userjobs={userjobs} company={company}/> */}
          {userjobs.map(job=>(
          
          <TestjobCard job={job}/>
         
        ))}
          </>)
      }
      
    </>
  );
};

export default Comp;
