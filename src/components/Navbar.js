// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu


// importing react router

import { Link } from "react-router-dom";

// importing css
import '../css/index.css';




function NavBar() {
	return (
		<section>
			<nav id="nav-bar">
				<img id="logo"
					 src={process.env.PUBLIC_URL + 
						 '/images/nav-bar-img.png'} alt="" />
				<div className="nav-bar-container">
					<Link to="/">Homepage</Link>
					<Link to="/About">About</Link>
					<Link to="/URC">URC</Link>
					<Link to="/Rovers">Rovers</Link>
					<Link to="/Sponsors">Sponsors</Link>
					<Link to="/Alumni">Alumni</Link>
					<a href="
					https://give.fullerton.edu/donate?fid=z2C7%2bB5psrQ%3d&fdesc=CTsbnwTiVZ1TMmzXJGGkBA%3d%3d&fundID=095008-4048&source=21WWG">Donate To Titan Rover</a>
				</div>
			</nav>	
			
		</section>
	)
}

export default NavBar;