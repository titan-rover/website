// Author: Khang Pham
// Email: khangpham@csu.fullerton.edu

import NavBar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import {SliderData} from '../components/sliderData';
import '../components/styles.css'

function Rovers() {
	return (
		<div>
			<NavBar />
			<div className='ourRovers'>
        Our Rovers
      </div>

      <div className='Rover21'>
        Rover' 21
      </div>
			{/* <ImageSlider slides={SliderData} /> */}
			<ImageSlider slides={SliderData.filter((slide) => slide.title === 'rovers21')} />
      <div className='Rover21'>
        Kronos
      </div>
			<ImageSlider slides={SliderData.filter((slide) => slide.title === 'kronos1')} />
			{/* <ImageSlider slides={SliderData.filter((slide) => slide.title === 'odyssey')} /> */}
			{/* <ImageSlider slides={SliderData.filter((slide) => slide.title === 'calypso')} /> */}
			{/* <ImageSlider slides={SliderData.filter((slide) => slide.title === 'atlas')} /> */}
			{/* <ImageSlider slides={SliderData.filter((slide) => slide.title === 'titan')} /> */}
			{/* <ImageSlider slides={SliderData.filter((slide) => slide.title === 'astro')} /> */}
			{/* <ImageSlider slides={SliderData.filter((slide) => slide.title === 'ion')} /> */}
			{/* <ImageSlider slides={SliderData} /> */}
			{/* <p>Rover page goes here</p> */}
		</div>
	)
}

export default Rovers;