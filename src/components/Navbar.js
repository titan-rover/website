// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu


// importing react router

import { Link } from "react-router-dom";

// importing css
import '../css/navbar.css';




function NavBar() {
	return (
		<section>
			<nav id="nav-bar">
				<div id="img-logo">
					<img id="logo"
						 src={process.env.PUBLIC_URL + 
							 '/images/nav-bar-img.png'} alt="" />
					
				</div>
				<div className="nav-bar-outside-container">
					<div className="nav-bar-inside-container">
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
						
					</div>
					
				</div>
			</nav>	
			
		</section>
	)
}

export default NavBar;