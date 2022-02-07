import React from "react";
import "./OpportunityDetails.css";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Check } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const OpportunityDetails = () => {

   /////////////////LATER WE WILL SET UP LOCAL STORAGE
   const [user,setUser]=useState({});
   const getCompanyUserdetails= async()=>{
     try{
         const res= await fetch('/auth/getuser',{
             method: "GET",
             headers:{
                
                 "Content-Type": "application"
             },
         });
         const data = await res.json();
         setUser(data);
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
 ////////////////////////////////
 const navigate = useNavigate();
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

 const handleDelete=async()=>{
   try{
     await axios.delete("/jobs/"+path,{
       data:{userId:user._id}
     });
     navigate("/manage/"+user._id);
   }catch(err){
     console.log(err)
   }
 }

const[updatemode,setupdateMode]=useState(false);
  return (
    <>
      <div className="opportunitypage">
        <div className="detail-border">
        <div className="opportunityheading">
          <h1>Web Development Internship</h1>
          <h3>Arcot Group(Arcot Media Pvt Ltd)</h3>
          {
         job.userId==user?._id&&(<div className="flex "><IconButton onClick={()=>{
          setupdateMode(true) 
          
         }}  aria-label="Edit Profile" className="edtbtn">
         <EditIcon />              
         </IconButton>
         <IconButton onClick={handleDelete}>
           <DeleteIcon />
         </IconButton>
         </div>)
       }
        </div>
        <div className="list flex">
                    <div className="list-1">
                        <ul>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <GrLocation />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                    <h4>Location:</h4>
                                    <p style={{fontSize:'18px'}}>Mumbai</p>
                                  </div>
                              </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <BsCalendar2Check />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Duration</h4>
                                  <p style={{fontSize:'18px'}}>6 Weeks</p>
                                </div>
                              </div>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="list-2">
                        <ul>
                            <li>
                            <div className="info">
                              <div className="info-icon">
                                <IconContext.Provider value={{ className: "react-icon" }}>
                                  <BsClockHistory />
                                </IconContext.Provider>
                              </div>
                              <div className="info-heading">
                                <h4>Apply By</h4>
                                <p style={{fontSize:'18px'}}>17th Oct 2021</p>
                              </div>
                            </div>
                            </li>
                            <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <MdAttachMoney />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Stipend</h4>
                                  <p style={{fontSize:'18px'}}>10 Kalol/per Month</p>
                                </div>
                              </div>
                            </li>
                        </ul>
                    </div>
                    <div className="list-3">
                        <ul>
                        <li>
                              <div className="info">
                                <div className="info-icon">
                                  <IconContext.Provider value={{ className: "react-icon" }}>
                                    <AiOutlineClockCircle />
                                  </IconContext.Provider>
                                </div>
                                <div className="info-heading">
                                  <h4>Start</h4>
                                  <p style={{fontSize:'18px'}}>Immediately</p>
                                </div>
                              </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>
                <div>
        <div className="aboutrole border-bottom">
          <h4>About Role</h4>
          <p style={{fontSize:'18px',marginLeft:'1vmax'}}>
            Selected intern's day-to-day responsibilities include working as a
            part of a progressive web app (PWA) development project which will
            be based on our web app REST API text app.
          </p>
        </div>
        </div>
        <div className="border-bottom">
         <div className="requirements">
          <h4>Requiremets</h4>
          <div>
            <p style={{fontSize:'18px',marginLeft:'1vmax'}}>Only those candidates can apply who:</p>
            <ol style={{marginLeft:'1vmax'}} className="requirementspoints">
              <li className="requirements-lst">Are Available to work from home</li>
              <li className="requirements-lst">Are Available to work from home</li>
              <li className="requirements-lst">Are Available to work from home</li>
              <li className="requirements-lst">Are Available to work from home</li>
              <li className="requirements-lst">Are Available to work from home</li>
            </ol>
          </div>
        </div>
        </div>
        <div className="border-bottom">
        <div style={{marginTop:'20px'}}>
            <h3>Perks</h3>
              <ol style={{marginLeft:'1vmax'}} className="requirementspoints">
                <li style={{fontSize:'18px'}}>Certificate</li>
                <li style={{fontSize:'18px'}}>Certificate</li>
              </ol>
        </div>
        <div style={{marginTop:'20px'}}>
            <h3>No. of Openings: 4</h3>
        </div>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <div className="tags-data">
            <h4>Web Development</h4>
            <h4>Node.js</h4>
            <h4>React.js</h4>
            <h4>React Native</h4>
            <h4>MongoDB</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunityDetails;
