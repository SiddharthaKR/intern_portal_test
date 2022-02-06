import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

const Test = () => {

    const location=useLocation();
    const path=location.pathname.split('/')[2];
    const[job,setJob]=useState({});
    useEffect(()=>{
        const getJob=async()=>{
            const res=await axios.get('/jobs/'+path);
            
           setJob(res.data);
        };
        getJob();
    },[path])

  return <div>
    <h1>{job.company}</h1>  
  </div>;
};

export default Test;

