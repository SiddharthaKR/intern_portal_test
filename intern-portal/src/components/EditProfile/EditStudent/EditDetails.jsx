import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/paper'
import axios from "axios";

const EditDetails = () => {


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

  


const handleInput = (e)=>{
    const name= e.target.name;
    const value= e.target.value;

   setStudentDetails({...studentDetails,[name]:value})
}

const updateDetails= async(e)=>{
  e.preventDefault();
 const username= studentDetails.username;
 const rollno=studentDetails.rollno;
 const branch=studentDetails.branch;
 const yearofgraduation=studentDetails.yearofgraduation;
 const linkedin=studentDetails.linkedin;
 const email=studentDetails.email;

 const res=await fetch('/auth/editstudentdetails',{
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
   alert("data updated");
 }
 
}



  return (
  <form method='post' action="/auth/editstudentdetails">
  <Paper elevation={2} style={{maxWidth:1200
  }}>
 <Grid conainer spacing={3}> 
<TextField name="username" variant="standard" value={studentDetails.username} onChange={handleInput} label="Name" />
<TextField name="rollno" variant="standard" value={studentDetails.rollno} onChange={handleInput} label="Roll NO" />
<TextField name="branch" variant="standard" value={studentDetails.branch} onChange={handleInput} label="Branch" />
<TextField name="yearofgraduation" variant="standard" value={studentDetails.yearofgraduation} onChange={handleInput} label="Year of Graduation" />
<TextField name="linkedin" variant="standard" value={studentDetails.linkedin} onChange={handleInput} label="Linked In id" />
<TextField name="email" variant="standard" value={studentDetails.email} onChange={handleInput} label="Email Id" />
<TextField name="about" variant="outlined" onChange={handleInput} multiline rows={4} label="About" />
<input type="submit" onClick={updateDetails} />
 </Grid>

  </Paper>
  </form>)
};

export default EditDetails;
