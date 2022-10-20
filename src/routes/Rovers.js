// Author: Khang Pham, Justin Kim
// Email: khangpham@csu.fullerton.edu, jcykim@csu.fullerton.edu
import NavBar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import '../css/rovers.css';
import rover2021 from '../json_files/rover/rover-2021.json';
import rover2020 from '../json_files/rover/rover-2020.json';
import rover2019 from '../json_files/rover/rover-2019.json';
import rover2018 from '../json_files/rover/rover-2018.json';
import rover2017 from '../json_files/rover/rover-2017.json';
import rover2016 from '../json_files/rover/rover-2016.json';
import rover2015 from '../json_files/rover/rover-2015.json';
import rover2014 from '../json_files/rover/rover-2014.json';

function CreateYear({images, video, team}) {
	return (
		<div className={"year-container"}>
			<div className={"year"}>
				<p >{team}</p>
			</div>
			<div className={"slideshow-container"}>
				<Slideshow slides={images} />
				{
					video &&
					<iframe className={"iframes"}
							width="560" 
							height="315" 
							src={video} 
							title="YouTube video player" 
							frameBorder="0" 
							allow="accelerometer; 
								   autoplay; 
								   clipboard-write;
								   encrypted-media; 
								   gyroscope; 
								   picture-in-picture" 
							allowFullScreen >
					</iframe>
					
				}
			</div>
			
		</div>
	)
}

function CreateYears({years}) {
	let rovers = years.map((year, index) => {
		return (
			<CreateYear images={year.images} 
						video={year.video}
						team={year.team}
						key={index} />	
		)
	});
	console.log(rovers)
	return (
		<div>
			{rovers}
		</div>
	)
}

function Rovers() {
	let years = [
		rover2021,
		rover2020,
		rover2019,
		rover2018,
		rover2017,
		rover2016,
		rover2015,
		rover2014
	];


	return (
		<div>
			<NavBar />
			<CreateYears years={years}/>
		</div>
	)
}

export default Rovers;