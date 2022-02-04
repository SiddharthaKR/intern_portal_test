import React from "react";
import "./About.css";

class About extends React.Component{
    render(){
        return(
            <div className="about-section">
                <div className="content" style={{margin: "5px"}}>
                   <h3>About</h3>
                   <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> 
                </div>
            </div>
        )
    }
}

export default About;