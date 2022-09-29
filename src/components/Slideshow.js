// Author: Justin Kim
// Email: jcykim@csu.fullerton.edu


// importing react router

import { Link } from "react-router-dom";
import {useState} from "react";

// importing css
import '../css/slideshow.css';
import { getSuggestedQuery } from "@testing-library/react";


const Slideshow = ({slides}) => {
    const [currentSlideIndex, setSlideIndex] = useState(0);

    const styles = {
        slide: {
            width: "300px",
            height: "300px",
            borderRadius: "12px",
            margin: "0 0"
        },
        arrow: {
            fontSize: "2rem",
            color: "lightgrey"
        }
        }

    const goLeft = ()=> {
        const newIndex = currentSlideIndex ? currentSlideIndex - 1 : slides.length - 1;
        setSlideIndex(newIndex);
    }

    const goRight = () => {
        const newIndex = currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
        setSlideIndex(newIndex);
    }
    
    return (
        <div className = "container">
            <div class="slide">
                <div style={styles.arrow} onClick={goLeft}>❮</div>
                <img style = {styles.slide} src={process.env.PUBLIC_URL + `${slides[currentSlideIndex]}`} />
                <div style={styles.arrow} onClick={goRight}>❯</div>
            </div>
            <div className="description">
                
            </div>
        </div>
    )
}

export default Slideshow;