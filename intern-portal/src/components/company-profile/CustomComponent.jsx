import React,{useState,useEffect, useContext} from "react";
import ReactRoundedImage from "react-rounded-image";
import "./customcomponent.css";
import logo from '../images/iitglogo.png';
import Button from "../Responsive/Button";
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CompRegister from "../EditProfile/EditComp/CompRegister";
import JobModal from '../CompanyProfile/JobModal'
import { CompanyContext } from "../../context/CompanyContext";




const CustomComponent = ({company }) => {

  const [updateMode,setupdateMode]=useState(false)

  const[comp,setCompany]=useContext(CompanyContext);
 console.log(comp._id);
  return  <div className="custom-component">
    {
      updateMode? (<CompRegister company={company} setState={updateMode=>setupdateMode(updateMode)}/>):
      (

     
  <div className="container-1" >
    <div className="circle" style={{backgroundColor:'white'}}><ReactRoundedImage
        image={logo}
        roundedColor="#ffffff"
        roundedSize="0"/>
    </div>
    <div className="secondary-container-1"> 
    
    </div>
    <div className="tertiary-container-1" style={{color: "black"}}>
      <div className="flex space-bet">
       {company?<h3>{company.name}</h3>:<h3>Register your company</h3>}
       <IconButton onClick={()=>setupdateMode(true)}  aria-label="Edit Profile" className="edtbtn">
       <EditIcon />              
       </IconButton>
       </div>
      <p style={{fontSize: "medium", color: "black", margin:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div style={{display:"flex", flexDirection:"column"}}>
      <Button>Visit Website</Button>
      <JobModal/>
      </div>
    </div>
  </div>
   )
  }
</div>;
};

export default CustomComponent;









