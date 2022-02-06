import React,{useContext, useEffect, useState} from "react";
import "./managejobs.css"
import cStatIllustraiton from "../images/companyIllustration.png";
import statisticsIcon from '../images/statisticsIcon.png';
import CompanyJobCard from "./CompanyJobCard";
import Button from '@mui/material/Button';
import JobModal from "../CompanyProfile/JobModal";
import statsimg from "../images/stats.svg"
import { Icon } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {CompanyContext} from '../../context/CompanyContext' 


export default function ManageJobs() {
    
    const[company,setCompany]=useContext(CompanyContext);
    const[userjobs,setUserJobs]=useState([]);

    const location=useLocation();
    const path=location.pathname.split('/')[2];
    useEffect(()=>{
        const getCompany=async()=>{
        const res=await axios.get(`/company/${path}`);
        setCompany(res.data);
        console.log(company)
        }
      getCompany()
      },[])


      
useEffect(()=>{
    const getCompJobs=async()=>{
      const res=await axios.get(`/jobs/find/${company._id}`)
      setUserJobs(res.data)
      console.log(res.data)
      // console.log(res.data)
    }
    getCompJobs()
    
  },[company])


    return(
        <div style={{width:'100%'}}>
            <div style={{width:'80%',display:'flex',flexDirection:'column',margin:'0 auto'}}>
            <div className="company-statistics-container">
                <div className="company-statistics-tile-list">
                    <h2>{company.name}</h2>
                    <div className="company-statistics-tile-content">
                    <Icon baseClassName="fas"className="fa-business-time stats-icon"sx={{ color: '#66DFD8',fontSize: 30 }}/>
                        <div className="company-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>No. of jobs posted</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                    <div className="company-statistics-tile-content">
                    <Icon baseClassName="fas"className="fa-users stats-icon"sx={{ color: '#66DFD8',fontSize: 30 }}/>
                        <div className="company-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>Total No. of Applicants</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                    <div className="company-statistics-tile-content">
                    <Icon baseClassName="fas"className="fa-chart-pie stats-icon"sx={{ color: '#66DFD8',fontSize: 30 }}/>
                        <div className="company-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>No. of Openings</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                </div>
                <img src={statsimg} style={{width:'30%',height:'30%'}} alt="" />
            </div>
            <div className="jobsposted">
                <div style={{margin:'0 auto'}}><h2>Jobs Posted</h2></div>
                <div className="job-posted-list">
                    <div style={{display:'flex',justifyContent:'flex-end'}}>
                   <JobModal child="Add opportunity" />
                    </div>
                    {
                        userjobs.map((job)=>(
                            <CompanyJobCard job={job}/>
                        ))
                    }
                    {/* <CompanyJobCard/>
                    <CompanyJobCard/> */}
                </div>
            </div>
            </div>
        </div>
    );
}
