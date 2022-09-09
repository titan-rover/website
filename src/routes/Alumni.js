// Author: Khang Pham
// Email: khangpham9999@csu.fullerton.edu

// importing json files
import alumnis2019 from '../json_files/alumni/alumni-2019.json';
import alumnis2018 from '../json_files/alumni/alumni-2018.json';
import alumnis2017 from '../json_files/alumni/alumni-2017.json';
import alumnis2016 from '../json_files/alumni/alumni-2016.json';
import alumnis2015 from '../json_files/alumni/alumni-2015.json';
import alumnis2014 from '../json_files/alumni/alumni-2014.json';

// importing nav bar
import NavBar from '../components/Navbar';

// importing css
import '../css/alumni.css';


// component that generates each individual alumni
// profile
function GenerateColumn({alumni}) {
  let information = alumni.bulletpoints
    .map( (point, index) => {
      return (
        <li key={index}>{point}</li>
      )
    });
  return (
    <div className="members-col">
      <div className="img-center">
        <img src={process.env.PUBLIC_URL +"/images/members/" 
                  + alumni.img} alt={alumni.name} />
      </div>
      <p>{alumni.name}</p>
      <ul className="center">{information}</ul>
      
    </div>
  )
}


// component that generates a row of three alumni
// profiles.
function GenerateRow({alumnis}) {
  let alumni = alumnis.map((alumni, index) => {
    return (
      <GenerateColumn key={index} alumni={alumni} />
    )
  });
  return (
    <div className="members-row">
      {alumni}
      
    </div>
  )
}

// generates all of the alumni profiles in an entire 
// year.

function GenerateContainer({alumnis, length}) {
  let rows = [];
  let alumniList = [];
  let count = 0;
  alumnis.members.forEach((alumni, index) => {
    alumniList.push(alumni);
    if ( (index + 1) % length === 0) {
      rows.push(<GenerateRow alumnis={alumniList} key={count}/>);
      alumniList = [];
      count++;
    }
  });
  if (alumniList) {
    count++;
    rows.push(<GenerateRow alumnis={alumniList} key={count} />);
    alumniList = [];
  }

  if (alumnis.honorable_members) {
    count++;
    rows.push(<p key={count} className="year-header">Honorable Team Members</p>);
    alumnis.honorable_members.forEach((alumni, index) => {
      count++;
      alumniList.push(alumni);
      if ((index + 1) % length === 0) {
        rows.push(<GenerateRow alumnis={alumniList} key={count} />);
        alumniList = [];
      }
    });

    if (alumniList) {
      count++;
      rows.push(<GenerateRow alumnis={alumniList} key={count} />);
      alumniList = [];
    }
  }

  return (
    <div className="members-container">
      {rows}
    </div>
  ) 
}

function GenerateYear({alumnis}) {
  return (
    <section className="team-container">
      <p className="year-header">{alumnis.year} </p>
      <div className="team-img">
        <img src={process.env.PUBLIC_URL +
                  "/images/team_photos/" 
                  + alumnis.image} 
              alt={alumnis.year+ " Team"}/>
      </div>
      <p className="caption">{alumnis.caption}</p>
      <GenerateContainer alumnis={alumnis} length={3}/>
    </section>  
  )
}

function GenerateYears({yearList}) {
  let years = yearList.map( (year, index) => {
    return (
      <GenerateYear alumnis={year} key={index} />
    )
  });
  return (
    <div>
      {years}
    </div>
  )
}

function Alumni() {
  let alumniList = [
      alumnis2019,
      alumnis2018,
      alumnis2017,
      alumnis2016,
      alumnis2015,
      alumnis2014
  ];
  return (
    <div>
      <NavBar />
      <h1 className="alumni-header">Meet the team</h1>
      <GenerateYears yearList={alumniList} />
    {/* footer goes here */}
    </div>
  );
}

export default Alumni;