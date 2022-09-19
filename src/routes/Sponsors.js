// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import NavBar from '../components/Navbar';
import '../css/sponsors.css'

function Text({name}){
	return(
		<div>
		<p className="text">{name}</p>
		</div>
	)
}
function Sponsors() {
	return(
		<div>
			<NavBar />
			<body>
			<h1><center><Text name={"Sponsors"} /></center></h1>
			
			<p>
				<center>
					Titan Rover sincerely thanks all of our generous sponsors for their contributions. 
					With increasing costs each year, our sponsors help make our success possible. If you are interested in  
				</center>
				<center>sponsoring Titan Rover through either financial or gifts-in-kind donations, 
					please contact Titan Rover at <a href="teamrover@titanrover.com">teamrover@titanrover.com</a>. 
					Your support makes an impactful difference to our team.</center>
			
			</p>
			</body>
		</div>

	)
}


export default Sponsors;
