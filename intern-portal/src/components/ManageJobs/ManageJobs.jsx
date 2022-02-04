import React from "react";
import "./managejobs.css"
import cStatIllustraiton from "../images/companyIllustration.png";
import statisticsIcon from '../images/statisticsIcon.png';
import CompanyJobCard from "./CompanyJobCard";
import Button from '@mui/material/Button';
export default function ManageJobs() {
    return(
        <div style={{width:'100%'}}>
            <div style={{width:'80%',display:'flex',flexDirection:'column',margin:'0 auto'}}>
            <div className="company-statistics-container">
                <div className="company-statistics-tile-list">
                    <h2>Arcot Groups Statistics</h2>
                    <div className="company-statistics-tile-content">
                        <img src={statisticsIcon} style={{width:'50px',height:'50px'}} alt="" />
                        <div className="company-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>No. of jobs posted</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                    <div className="company-statistics-tile-content">
                        <img src={statisticsIcon} style={{width:'50px',height:'50px'}} alt="" />
                        <div className="company-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>Total No. of Applicants</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                    <div className="company-statistics-tile-content">
                        <img src={statisticsIcon} style={{width:'50px',height:'50px'}} alt="" />
                        <div className="company-statistics-tile-content-text">
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>No. of Openings</div>
                            <div style={{fontSize:'20px', marginLeft:'20px'}}>5</div>
                        </div>
                    </div>
                </div>
                <img src={ cStatIllustraiton} style={{width:'30%',height:'30%'}} alt="" />
            </div>
            <div className="jobsposted">
                <div style={{margin:'0 auto'}}><h2>Jobs Posted</h2></div>
                <div className="job-posted-list">
                    <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button variant="contained" sx={{backgroundColor:'#3acbf7', marginRight:'10px',marginBottom:'20px'}}>
                        Add a opportunity
                    </Button>
                    </div>
                    <CompanyJobCard/>
                    <CompanyJobCard/>
                </div>
            </div>
            </div>
        </div>
    );
}
