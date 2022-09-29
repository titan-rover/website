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
			<div>
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
			<ImgSpon sponsors={SponsorImages}/>
		{/*footer here*/}
		</div>

	);
}


export default Sponsors;