// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu


// importing react router

import { Link } from "react-router-dom";

// importing css
import '../css/index.css';




function NavBar() {
	return (
			<nav id="nav-bar">
			<img id="logo" src="images/nav-bar-img.png" alt="" />
			<div className="nav-bar-container">
				<a href="index.html">Homepage</a>
				<a href="about.html">About</a>
				<a href="URC.html">URC</a>
				<a href="rover.html">Rover</a>
				<a href="sponsors.html">Sponsors</a>
				<Link to="/alumni">Alumni</Link>
				<a href="
				https://give.fullerton.edu/donate?fid=z2C7%2bB5psrQ%3d&fdesc=CTsbnwTiVZ1TMmzXJGGkBA%3d%3d&fundID=095008-4048&source=21WWG">Donate To Titan Rover</a>
			</div>
		</nav>	
	)
}

export default NavBar;