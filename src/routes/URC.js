// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import NavBar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import URC2019 from '../json_files/URC/2019.json';
import URC2018 from '../json_files/URC/2018.json';
import URC2017 from '../json_files/URC/2017.json';


import '../css/urc.css';

function CreateURCYear({images, year}) {
	return (
		<div className={"year-container"}>
			<p className={"year"}>{year}</p>
			<Slideshow slides={images}/>
		</div>
	) 
}

function CreateURCYears({years}) {
	let URC = years.map( (year, index) => {
		return (
			<CreateURCYear images={year.images} 
						   year={year.team}
						   key={index} />
		)
	});

	return (
		<div>
			{URC}
		</div>
	)
	
}

function URC() {
	let URCyears = [
		URC2019,
		URC2018,
		URC2017
	];

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
			<div>
				<CreateURCYears years={URCyears} />
			</div>
			<Footer />
		</div>
	)
}

export default URC;