// Author: Khang Pham, Justin Kim
// Email: khangpham@csu.fullerton.edu, jcykim@csu.fullerton.edu
import React, {useState, useEffect} from 'react'
import NavBar from '../components/Navbar';

function Rovers() {
	const [data, setData] = useState([]);
	const getData = () => {
		fetch('src/json_files/rover/rover-2021.json'
		,{
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}
		)
		.then(function(response){
			console.log(response);
			return response.json();
		})
		.then(function(myJson){
			console.log(myJson);
			setData(myJson);
		});
	}
	useEffect(()=>{
		getData()
	},[])
	return (
		<div>
			<NavBar />
			<p>Rover page goes here</p>
		</div>
	)
}

export default Rovers;