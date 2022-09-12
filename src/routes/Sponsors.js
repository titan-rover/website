// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import NavBar from '../components/Navbar';
import SponsorImages from '../json_files/sponsor/sponsor-logo.json';

function Sponsors() {
	console.log(SponsorImages);
	return(
		<div>
			<NavBar />
			<p>Sponsors page goes here</p>
		</div>

	)
}


export default Sponsors;