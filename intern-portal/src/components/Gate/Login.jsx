import React from 'react';
import "./login.css"

const Login = () => {

    const outlook=()=>{
        window.open("http://localhost:5000/auth/outlook", "_self")
    }
    
  return (<div>
<h1 onClick={outlook}>OUTLOOK</h1>
  </div>
              
  
);
};

export default Login;


