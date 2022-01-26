import React from "react";
import CustomComponent from "./CustomComponent";
import About from "./About";
import OtherDetails from "./OtherDetails";
import Skills from "./JobPosted";
class CompanyProfile extends React.Component{
    render(){
        return(
            <>
             <CustomComponent />
            <About />
            <OtherDetails />
            <Skills /> 
            </>
        )
        
    }
}

export default CompanyProfile;