// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import teams from '../json_files/about/teambreakdown.json';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

import '../css/about.css';

function CreateCard({info}) {
	return (
			<div id="about-card-container-wrapper">
				<div id="individual-card-container">
					<div className="about-card-title about-card">
						<h2>{info.teamName}</h2>
					</div>
					<div className="about-card-content about-card">
						<img src={process.env.PUBLIC_URL + info.img}
							 alt={info.img} 
							 id={"about-card-img"}
							 />
						<p id="about-card-text">{info.caption}</p>
					</div>
				</div>
		</div>
	)
}

function CreateCards({info}) {
	let cards = info.map( (team, index) => {
		return (
			<CreateCard info={team} key={team.teamName.toString()}/>
		)
	});

	return (
		<div id="grid-card-container">
			{cards}
		</div>
	)
}

function About() {
	return (
		<div id="about-container">
			<NavigationBar />
			<h1>Subteam Breakdown</h1>
			<CreateCards info={teams.Teams}/>
			<Footer />
		</div>

	)
}

export default About;