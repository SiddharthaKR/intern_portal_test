import React from "react";
import ReactRoundedImage from "react-rounded-image";
import "./customcomponent.css";
import logo from '../images/iitglogo.png';
import Button from "../Responsive/Button";
class CustomComponent extends React.Component{
    render(){
        return(
            <div className="custom-component">
              <div className="container-1" >
                <div className="circle" style={{backgroundColor:'white'}}><ReactRoundedImage
                    image={logo}
                    roundedColor="#ffffff"
                    roundedSize="0"/>
                </div>
                <div className="secondary-container-1">  
                </div>
                <div className="tertiary-container-1" style={{color: "black"}}>
                  <h3>Arcot Group</h3>
                  <p style={{fontSize: "medium", color: "black", margin:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div style={{display:"flex", flexDirection:"column"}}>
                  <Button>Visit Website</Button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default CustomComponent;