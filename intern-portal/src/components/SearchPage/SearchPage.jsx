import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import "./searchpage.css"
import searchBackground from "../images/searchBackground.png";
import searchimg from "../images/search.svg"
import { Grid } from "@mui/material";
import axios from "axios"
import CompanyJobCard from "../ManageJobs/CompanyJobCard";


export default function SearchPage() {

const[jobs,setJobs]=useState([]);

useEffect(()=>{
    const fetchJobs= async()=>{
        const res=await axios.get('/jobs')
        setJobs(res.data);
    }
    fetchJobs()
},[]);

    return (<Grid container  sx={{height:"85vh",display:"flex", justifyContent:"flex-end"}} >
<Grid item lg={8} sm={6}>
    {/* <div style={{alignItems:"center"}}>
<h1 style={{marginRight:"auto"}}>Find Job That Suits You</h1>
</div> */}
<SearchBar />
<Grid item>
    {
        jobs.map(job=>(
          <CompanyJobCard job={job}/>
        ))
    }
    
</Grid>
</Grid>
<Grid className="flex" sx={{justifyContent:'flex-end',justifySelf:"flex-end",alignItems:"baseline"}} item lg={2} sm={1}>
<img className="searchimg" src={searchimg} alt="" />
</Grid>

    </Grid>

    )
}     




        // <div className="flex" style={{width:'100%',paddingX:'10%',alignItems:'center'}}>
           
            {/* <div>
            <div >
                <h1>Find Job That Suits You</h1>
            </div>
            <div style={{width:'80%',marginTop:'25px'}}>
                <SearchBar/>
            </div>
            </div> */}
            {/* <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> React.js </button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> Node.js </button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> Django</button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> HTML-CSS </button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> Machine Learning </button>
                </div>
            </div> */}
            {/* <div>
                <img className="searchimg" src={searchimg} alt="" />
        //     </div> */}
        // </div>
    // );

