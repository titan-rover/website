// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import teams from '../json_files/about/teambreakdown.json';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


function DisplayTeam({info}) {
	return (
		<div>
			<h2>{info.teamName}</h2>
			<img src={process.env.PUBLIC_URL + "/images/about/" + info.img} alt={info.teamname} />
			<p>{info.caption}</p>
		</div>
	)
}

function DisplayTeams({info}) {
	let teams = info.map( (team, index) => {
		return (
			<DisplayTeam info={team} key={index} />
		)
	});

	return (
		<div>
			{teams}
		</div>
	)
}

function About() {
	return (
		<div>
			<NavBar />
			<h1>Subteam Breakdown</h1>
			<DisplayTeams info={teams.Teams} />
			<Footer />
		</div>

	)
}

export default About;