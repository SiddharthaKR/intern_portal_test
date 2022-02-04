import React, {useState} from 'react'
import { Link } from "react-router-dom"
import MenuItems from "./MenuItems"
import Button from './Button'
import logo from "../images/Dark.png"
import "./nav.css"
import { FaWindows } from 'react-icons/fa'

const ResNavbar = ({user}) => {
 const [clicked , setClicked]= useState(false);

 function handleClick(){
     setClicked(!clicked);
 }

 const logout=()=>{
     window.open("http://localhost:5000/auth/logout", "_self");
 }

    return (
        <nav className='NavbarItems '>
            <Link to="/">
            <img src={logo} alt="" srcset="" />
            </Link>
            <div className='menu-icon'onClick={handleClick}>
  <i className={clicked?"fas fa-times": 'fas fa-bars'}></i>
            </div>
            <ul className={clicked? 'nav-menu active':'nav-menu' }>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}><a className={item.cName} href={item.url}>
                        {item.title}
                        </a></li>
                )
            })}

               
            </ul>
            <div className='flex btn-grp'>
            <Link to="jobs">
                        <Button >Jobs</Button>
                    </Link>
                {user?(
                    <>
                    <Link to="studentedit">
                        <Button >Edit Profile</Button>
                    </Link>
                     <Button onClick={logout}>Log Out</Button>
                    </>):
                    (
                        <>
                        <Link to="login">
                        <Button className=''>Sign Up</Button>
                        </Link>
                        <Link to="login">
                        <Button>Log In</Button>
                        </Link>  
                       </> 
                    )
                }
            
            </div>
        </nav>
    )
}

export default ResNavbar
