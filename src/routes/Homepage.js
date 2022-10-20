import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/homepage.css'


function Homepage() {

  return (
    <div id="homepage">
      <NavBar />
      <section className="content">
        <div className="content-container">
          <img src={process.env.PUBLIC_URL + '/images/URC/URClogo.jpg'}
               alt="" />
        </div>
        <div className="content-text">
          <p>competitor since 2014</p>
        </div>
        <video id="video" autoPlay loop muted >
          <source src={process.env.PUBLIC_URL + 
                      '/videos/Titan-Rover-B-Roll.mp4'} 
                  type="video/mp4" />
          Your browser does not support HTML5 video
        </video>

        <div className="content-text2">
          <h2>Our goal is to prepare students in STEM related fields with technical/innovative
            knowledge by experiential learning while inspiring newer generations about STEM. Being in Titan Rover gives the opportunity for members to better themselves and their skill sets by working together to make a rover intended to compete at the Mars Society’s University Rover Challenge.</h2>
        </div>

      <Footer />
      </section>
    </div>
  );
}


export default Homepage;