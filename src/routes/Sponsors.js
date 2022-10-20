
import NavBar from '../components/Navbar';

import SponsorImages from '../json_files/sponsor/sponsor-logo.json';

import '../css/sponsors.css';


function ImgSpon({sponsors, sAmount})
{
	let Sp = sponsors.images;
	let allImg = Sp.map((SponsorImages, index) => {
		return(
			<div key = {index} className='sponsor-item'>
				<img src = {process.env.PUBLIC_URL + "/images/sponsors/"
				 + SponsorImages.img} alt={SponsorImages.name} />
				
				<br />
			</div>
		)
	}) 
	return (
		<div className='sponsors-header'>
			{allImg}
		</div>
		);
}


function Sponsors() {
	return(
		<div>
			<NavBar />

			<center><h1 className="orange">{"Sponsors"}</h1></center>
			<p className="spacing">{'Titan Rover sincerely thanks all of our generous sponsors for their contributions. With increasing costs each year, our sponsors help make our success possible. If you are interested in sponsoring Titan Rover through either financial or gifts-in-kind donations, please contact Titan Rover at '}<a href="mailto:teamrover@titanrover.com">teamrover@titanrover.com</a>{'. Your support makes an impactful difference to our team.'}</p>

			<ImgSpon sponsors={SponsorImages}/>
		{/*footer here*/}

		</div>

	);
}


export default Sponsors;
