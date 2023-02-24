// Author: Justin Kim
// Email: jcykim@csu.fullerton.edu

import {useState} from "react";

// importing css
import '../css/slideshow.css';

const Slideshow = ({slides}) => {
    const [currentSlideIndex, setSlideIndex] = useState(0);


    const goLeft = ()=> {
        const newIndex = currentSlideIndex ? currentSlideIndex - 1 : slides.length - 1;
        setSlideIndex(newIndex);
    }

    const goRight = () => {
        const newIndex = currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
        setSlideIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        currentSlideIndex(slideIndex);
    };
    
    const left_arrow = <div className={"arrow left"} onClick={goLeft}>❮</div>;
    const right_arrow = <div className={"arrow right"} onClick={goRight}>❯</div>
    return (
        <div className="slide-container">

            {
                slides.length > 1 && left_arrow
            }
            <img className={"slide"} src={process.env.PUBLIC_URL + `${slides[currentSlideIndex]}`}
                 alt={"slide" + currentSlideIndex}
            />
            {
                slides.length > 1 && right_arrow
            } 

            <div className="dotsContainerStyles">
                {slides.map((slide, slideIndex) => (
                    <div className="dotStyles" key={slideIndex} onClick={() => goToSlide(slideIndex)}>⬤</div>
            ))}
        </div>   
        </div>
            
    )
}

export default Slideshow;