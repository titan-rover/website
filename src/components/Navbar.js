// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu

// importing css
import '../css/navbar.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';


function NavigationBar() {
	return (
		<section>
			<Navbar bg="dark" variant="dark" expand="lg">

				<Container>
					<Navbar.Brand>
						{/* <img id="logo" */}
						{/* 	 src={process.env.PUBLIC_URL +  */}
						{/* 		 '/images/nav-bar-img.png'} alt="" /> */}
						{/*  */}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Nav className="me-auto">
				
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
						<Nav.Link href="https://give.fullerton.edu/donate?fid=z2C7%2bB5psrQ%3d&fdesc=CTsbnwTiVZ1TMmzXJGGkBA%3d%3d&fundID=095008-4048&source=21WWG">
							Donate To Titan Rover
						</Nav.Link>
						
					</Nav>
					
				</Container>

			</Navbar>	
			
		</section>
	)
}

export default NavigationBar;