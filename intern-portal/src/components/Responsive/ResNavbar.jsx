import React, {useState} from 'react'
import MenuItems from "./MenuItems"
import Button from './Button'
import logo from "../images/Dark.png"
import "./nav.css"

const ResNavbar = () => {
 const [clicked , setClicked]= useState(false);

 function handleClick(){
     setClicked(!clicked);
 }

    return (
        <nav className='NavbarItems '>
            <img src={logo} alt="" srcset="" />
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
            <Button className=''>Sign Up</Button>
            <Button>Log In</Button>
            </div>
        </nav>
    )
}

export default ResNavbar
