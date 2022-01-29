import React from "react";
import ReactRoundedImage from "react-rounded-image";
import "./St-customcomponent.css";
import photo from '../images/photo.png';
import Button from "../Responsive/Button";
class StcustomComponent extends React.Component{
    render(){
        return(
            <div className="st-custom-component">
              <div className="st-container-1">
                <div className="st-circle"><ReactRoundedImage
                    image={photo}
                    roundedSize="0"/>
                </div>
                <div className="st-secondary-container-1">  
                </div>
                <div className="st-tertiary-container-1" style={{color: "black"}}>
                  <p>Naman Tiwari</p>
                  <p style={{fontSize: "medium", color: "black"}}>Student at IIT Guwahati | Mechanical Engineering | ML Enthusiast</p>
                  <div style={{display:"flex", flexDirection:"row"}}>
                    <Button >View Resume</Button>
                    <Button>View LinkedIn</Button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default StcustomComponent;