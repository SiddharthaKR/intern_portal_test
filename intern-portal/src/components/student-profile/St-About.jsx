import React from "react";
import "./St-about.css";

class Stabout extends React.Component{
    render(){
        return(
            <div className="st-about-section">
                <div className="st-content" style={{margin: "5px"}}>
                   <h3>About</h3>
                   <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p> 
                </div>
            </div>
        )
    }
}

export default Stabout;