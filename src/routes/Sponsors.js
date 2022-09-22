// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import NavBar from '../components/Navbar';
import SponsorImages from '../json_files/sponsor/sponsor-logo.json';

import '../css/sponsors.css';


function ImgSpon({sponsors, sAmount})
{
	let Sp = sponsors.images;
	let allImg = Sp.map(SponsorImages => {
		return(
			<div className="box">
				<img src = {process.env.PUBLIC_URL + "/images/sponsors/"
				 + SponsorImages.img} alt={SponsorImages.name} />
				
				<br />
			</div>
		)
	}) 
	return (
		<div>
			{allImg}
		</div>
		);
}


function Sponsors() {
	return(
		<div>
			<NavBar />
			<p className='sponsors-header'>Sponsors page goes here</p>
			<ImgSpon sponsors={SponsorImages} className="sponsors-header"/>
		{/*footer here*/}
		</div>

	);
}


export default Sponsors;