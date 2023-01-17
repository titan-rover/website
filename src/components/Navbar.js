// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu

// importing css
import '../css/navbar.css';

import { NavBar, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';


function NavigationBar() {
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
							<LinkContainer to="/" >
								<Nav.Link>Homepage</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/About">
								<Nav.Link>About</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/URC">
								<Nav.Link>URC</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/Rovers">
								<Nav.Link>Rovers</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/Sponsors">
								<Nav.Link>Sponsors</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/Alumni">
								<Nav.Link>Alumni</Nav.Link>
							</LinkContainer>
							<a href="
							https://give.fullerton.edu/donate?fid=z2C7%2bB5psrQ%3d&fdesc=CTsbnwTiVZ1TMmzXJGGkBA%3d%3d&fundID=095008-4048&source=21WWG">Donate To Titan Rover</a>
						</div>
						
					</div>
					
				</div>
				<input id="menu-toggle" type="checkbox" />
               <label class='menu-button-container' for="menu-toggle">
              <div class='menu-button'></div>
            </label>
			</nav>	
			
		</section>
	)
}

export default NavigationBar;