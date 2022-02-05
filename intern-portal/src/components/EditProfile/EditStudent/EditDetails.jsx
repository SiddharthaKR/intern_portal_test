import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/paper'
import axios from "axios";
import { Typography } from '@mui/material';

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
  <form method='post' action="/auth/editstudentdetails"  >

 <Grid conainer spacing={3}> 
 <Grid item>
   <Typography>Name</Typography>
<TextField name="username" variant="standard" value={studentDetails.username} onChange={handleInput}/>
</Grid>
<Grid item>
<Typography>Roll no</Typography>
<TextField name="rollno" variant="standard" value={studentDetails.rollno} onChange={handleInput}  />
</Grid>
<Grid item>
<Typography>Branch</Typography>
<TextField name="branch" variant="standard" value={studentDetails.branch} onChange={handleInput}  />
</Grid>
<Grid item>
<Typography>Year of Graduation</Typography>
<TextField name="yearofgraduation" variant="standard" value={studentDetails.yearofgraduation} onChange={handleInput} />
</Grid>
<Grid item>
<Typography>Linked In</Typography>
<TextField name="linkedin" variant="standard" value={studentDetails.linkedin} onChange={handleInput}  />
</Grid>
<Grid item>
<Typography>Email</Typography>
<TextField name="email" variant="standard" value={studentDetails.email} onChange={handleInput}  />
</Grid>
<Grid item>
<Typography>About</Typography>
<TextField name="about" variant="outlined" onChange={handleInput} multiline rows={4} />
</Grid>
<Grid item>
<input type="submit" onClick={updateDetails} />
</Grid>
</Grid> 

 
  </form>)
};

export default EditDetails;
