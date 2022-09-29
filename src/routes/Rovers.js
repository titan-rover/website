// Author: Khang Pham, Justin Kim
// Email: khangpham@csu.fullerton.edu, jcykim@csu.fullerton.edu
import React, {useState, useEffect} from 'react'
import NavBar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import '../css/rovers.css'
import rover from '../json_files/rover/rover-2021.json'

function Rovers() {

	const rover2021 = rover.images; // Get the array of urls from the json file

	return (
		<div>
			<NavBar />
			<div classList = "slideContainer">
				{/* Use array as argument for component */}
				<Slideshow slides={rover2021} /> 
			</div>
		</div>
	)
}

export default Rovers;