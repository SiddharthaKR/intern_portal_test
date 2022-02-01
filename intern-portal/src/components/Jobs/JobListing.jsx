import { Card,Button } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const JobListing = () => {
const[jobs,setJobs]=useState([]);

useEffect(()=>{
    const fetchJobs=async()=>{
     const res=await axios.get('/jobs')
     setJobs(res.data)
     console.log(res.data)
    }
    fetchJobs();
},[]);

  return <div>
      
      {jobs.map(j=>(
          <Card>
<h1>{j.company}</h1>
<p>{j.profile}</p>
<p>{j.perks}</p>
<Link to={`/company/${j.compId}`}>
<Button variant="contained">Company Profile</Button>
</Link>
          </Card>
         
      ))}
      
      
      
  </div>;
};

export default JobListing;
