// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu


// importing react router
import { Link } from "react-router-dom";

// importing css
import '../css/navbar.css';


import React,{useEffect, useState} from 'react';
import logoimg  from "./nav-bar-img.png"
function NavBar() {
  const [expanded, setExpanded] = useState(false)
  const toggleMenu =()=>{
    setExpanded(!expanded)
  }
  useEffect(()=>{
    if(expanded === true){
    document.getElementById("expanded").classList.add("expanded")
    }else{
      document.getElementById("expanded").classList.remove("expanded")
    }
  },[expanded])
  return (
    
      <nav id='nav-bar'>
        <img
          id='logo'
          src={logoimg}
          alt=''
        />
				    <button id ="hamburger" onClick={toggleMenu} className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
        <div id="expanded" className='nav-bar-container'>
             <ul>
                     <li>  <a href='/'>Homepage</a></li>
         <li> <a href='/About'>About</a></li>
         <li> <a href='/URC'>URC</a></li>
        <li>  <a href='/Rovers'>Rovers</a></li>
        <li>  <a href='/Sponsors'>Sponsors</a></li>
        <li>  <a href='/Alumni'>Alumni</a></li>
        <li>  <a href='https://give.fullerton.edu/donate?fid=z2C7%2bB5psrQ%3d&fdesc=CTsbnwTiVZ1TMmzXJGGkBA%3d%3d&fundID=095008-4048&source=21WWG'>Donate to Titan Rover</a></li>
		
             </ul>
        </div>
      </nav>
    
  );
}

export default NavBar;
