import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '../../Responsive/Button';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/paper'
import axios from "axios";
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import logo from '../../images/iitglogo.png'
import { useNavigate } from 'react-router-dom';

const EditDetails = () => {

//////////////later we will use local storage
  const [studentDetails,setStudentDetails]= useState({});

  const getStudetails= async()=>{
      try{
          const res= await fetch('/auth/getuser',{
              method: "GET",
              headers:{
                 
                  "Content-Type": "application"
              },
          });
          const data = await res.json();
          console.log(data);
          setStudentDetails(data);

          if(!res.status ===200){
          const error= new Error(res.error);
          throw error;
          }
      } catch(err){
          console.log(err)
      }
  }


useEffect(()=>{
  getStudetails();
},[]);
////////////////////////////////////
  

const navigate = useNavigate()
const handleInput = (e)=>{
    const name= e.target.name;
    const value= e.target.value;

   setStudentDetails({...studentDetails,[name]:value})
}

const updateDetails= async(e)=>{
  console.log("clicked")
  e.preventDefault();
 const username= studentDetails.username;
 const rollno=studentDetails.rollno;
 const branch=studentDetails.branch;
 const yearofgraduation=studentDetails.yearofgraduation;
 const linkedin=studentDetails.linkedin;
 const email=studentDetails.email;

 const res=await fetch('/auth/student/edit',{
   method: "POST",
   headers:{
     "Content-Type": "application/json"
   },
   body: JSON.stringify({
     username: username,
     rollno:rollno,
     branch:branch,
     yearofgraduation:yearofgraduation,
     linkedin:linkedin,
     email:email
   })
 });

 const data=await res.json();
 if(!data){
   console.log("not posted");
 }else{
   navigate(`/student/${studentDetails._id}`)
   console.log("updated")
 }
 
}



  return (
  <form onSubmit={updateDetails}>
 <Grid container
  direction="column"
 spacing={5}>
  <Grid item>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <img src={logo} style={{width:'150px',height:'150px'}} alt="" />
      <Button variant="contained" onClick={updateDetails} sx={{backgroundColor:'#3acbf7',margin:'0 auto'}}>Change Your Photo</Button>
   </div> 
  </Grid>
 <Grid item>
   <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'20px'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Name</Typography>
    <TextField name="username" variant="standard" value={studentDetails.username} onChange={handleInput} sx={{width:'80%'}}/>
   </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Roll no</Typography>
    <TextField name="rollno" variant="standard" value={studentDetails.rollno} onChange={handleInput} sx={{width:'80%'}}  />
  </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Branch</Typography>
    <TextField name="branch" variant="standard" value={studentDetails.branch} onChange={handleInput} sx={{width:'80%'}} />
  </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Year of Graduation</Typography>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studentDetails.yearofgraduation}
          label="Year of Graduation"
          onChange={handleInput}
          sx={{width:'80%'}}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2021</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
          <MenuItem value={2027}>2027</MenuItem>
          <MenuItem value={2028}>2028</MenuItem>
        </Select>
  </div>
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>LinkedIn</Typography>
    <TextField name="linkedin" variant="standard" value={studentDetails.linkedin} onChange={handleInput} sx={{width:'80%'}} />
  </div>
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Email</Typography>
    <TextField name="email" variant="standard" value={studentDetails.email} onChange={handleInput} sx={{width:'80%'}} />
  </div>
</Grid>

<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>About</Typography>
    <TextField name="about" variant="outlined" onChange={handleInput} multiline rows={4} sx={{width:'80%'}} />
  </div>
</Grid>
<Grid item sx={{margin:'0 auto'}}>
<div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Button type="submit" sx={{backgroundColor:'#3acbf7', marginTop:'20px'}}>Update</Button>
    
  
  </div>

</Grid>
</Grid> 

 
</form>)
};

export default EditDetails;
