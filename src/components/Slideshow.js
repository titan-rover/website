// Author: Justin Kim
// Email: jcykim@csu.fullerton.edu


// importing react router

import { Link } from "react-router-dom";
import {useState} from "react";

// importing css
import '../css/slideshow.css';


const Slideshow = ({slides}) => {
    const [currentSlideIndex, setSlideIndex] = useState(0);

   const styles = {
    slideContainer: {
        width: "100%",
        height: "100%",
    },
    slide: {
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentSlideIndex]})`
    }
   }

    return (
        <div style={style.slideContainer}>
            <div className="slide" style={styles.slide}></div>
        </div>
    )
}

export default Slideshow;