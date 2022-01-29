import React from "react";
import Stcustomcomponent from "./St-CustomComponent";
import Stabout from "./St-About";
import StotherDetails from "./St-OtherDetails";
import Stskills from "./St-Skills";
class StudentProfile extends React.Component{
    render(){
        return(
            <>
            <Stcustomcomponent />
            <Stabout />
            <StotherDetails />
            <Stskills /> 
            </>
        )
        
    }
}

export default StudentProfile;