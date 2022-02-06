import { Typography } from '@mui/material';
import React, {useState,useEffect}from 'react';
import EditDetails from './EditDetails';

const StudentEdit = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <div style={{marginTop:'30px',display:'flex', flexDirection:'column',alignItems:'center'}}><Typography variant="h4">Profile Update</Typography></div>
      <div style={{display:'flex',flexDirection:'column', border:'gray solid 0.5px',padding:'20px',marginTop:'50px',marginLeft:'10%',marginRight:'10%'}} >
        <div ><EditDetails /></div>
      </div>
    </div>
  );
};

export default StudentEdit;
