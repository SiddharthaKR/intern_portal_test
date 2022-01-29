import Login from "./components/Gate/Login";
import Landing from "./components/Landing/Landing";
import Secret from "./components/Gate/Secret";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResNavbar from "./components/Responsive/ResNavbar";
import StudentProfile from "./components/student-profile/StudentProfile";


function App() {

  const [user,setUser]= useState(null)
  
useEffect(()=>{
  const getUser=()=>{
    fetch("http://localhost:5000/auth/login/success",{
      method:"GET",
      credentials: "include",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    }).then(response=>{
      if(response.status===200)
      return response.json();
      throw new Error("authentication failed")
    }).then(resObject=>{
       setUser(resObject.user)
    }).catch((err) => {
      console.log(err);
    }); 
  }
  getUser();
},[]);

console.log(user);

  return (
    <BrowserRouter>
    <div>
      <ResNavbar user={user}/>
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}  />
      <Route path="/profile" element={ <StudentProfile />} />
    </Routes> 
    </div>
      
    </BrowserRouter>
  );
}

export default App;
