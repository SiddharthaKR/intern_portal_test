import React from "react";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import "./searchpage.css"
import searchBackground from "../images/searchBackground.png";
export default function SearchPage() {
    return (
        <div style={{width:'100%',paddingX:'10%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div style={{marginTop:'10%'}}>
                <h1>Job Search </h1>
            </div>
            <div style={{width:'80%',marginTop:'25px'}}>
                <SearchBar/>
            </div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> React.js </button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> Node.js </button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> Django</button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> HTML-CSS </button>
                </div>
                <div style={{display:'flex'}}>
                    <button className="search-tags"> Machine Learning </button>
                </div>
            </div>
            <img src={searchBackground} style={{width:'35%',marginTop:'30px'}} alt="" />
        </div>
    );
}