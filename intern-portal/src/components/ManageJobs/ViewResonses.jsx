import { flexbox } from "@mui/system";
import React from "react";
import { Button } from "@mui/material";
import ResponseCard from "./ResponseCard";
export default function ViewResponses() {
  return (
      <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <div style={{display:'flex',marginRight:'20px',justifyContent:'flex-end',marginTop:'50px'}}>
        <Button variant="contained" sx={{backgroundColor:'#3acbf7', marginTop:'20px', marginRight:'40px'}}>Edit Opportunity</Button>
        <Button variant="contained" sx={{backgroundColor:'#FF0000', marginTop:'20px', marginRight:'40px'}}>Delete Opportunity</Button>
        </div>
        <div style={{width:'80%',display:'flex',flexDirection:'column',margin:'0 auto',marginTop:'20px',marginBottom:'20px'}}>
          <ResponseCard/>
          <ResponseCard/>
          <ResponseCard/>
          <ResponseCard/>
        </div>
      </div>
  );
}