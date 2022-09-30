// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import NavBar from '../components/Navbar';
import '../css/urc.css';

function URC() {
	return (
		<div>
			<NavBar />
			<div>
				<img src={process.env.PUBLIC_URL + "/images/URC/URC-img.jpg"} 
					 alt="" 
					 className="image" />
			</div>
			<div className="information">
				
				<h1 className="header">
					What is URC?
				</h1>
				<p className="information-content">
					"URC" is an acronym for the Mars Society's internation, collegiate competition, 
					the University Rover Challenge, that takes place annually near the Mars Desert Research
					Station. The goal of the challenge is to have students create a mock rover that can one day
					aid human inhabitants of Mars. There are 4 tasks that each team must complete.
					Extreme Delivery and Retrival, Equipment Servicing, Autonomuous Traversal, and a Science Mission. 
				</p>
			</div>
		</div>
	)
}

export default URC;