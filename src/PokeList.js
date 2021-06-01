import React, { useState, useEffect } from "react";
import PokeTile from "./PokeTile";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

export default function PokeList(props) {
	const [isVis, setIsVis] = useState(false);
	const { details } = props;
	console.log("These are the PokeList Details: ", details);

	const handleClick = () => {
		setIsVis((prevIsVis) => !prevIsVis);
		console.log(isVis);
	};
	return (
		<div className='PokeList'>
			<button className='carouselButton' onClick={handleClick}>
				TOGGLE CAROUSEL
			</button>
			<div className={isVis ? "carouselDiv" : "carouselDiv invis"}>
				<Carousel
					dynamicHeight={false}
					showIndicators={false}
					showThumbs={true}
					centerMode={true}
					centerSlidePercentage={25}
					useKeyboardArrows={true}
					thumbWidth={100}
					showStatus={false}
					autoFocus={true}
					swipeable={true}
					emulateTouch={true}
				>
					{details &&
						details.map((element, index) => {
							return (
								<div className='carouselTile'>
									<img src={element.picture} />
									<p>{element.name}</p>
									<Link
										to={`/pokemon/${element.id}`}
										key={index}
										className='link'
									>
										<p>Read More</p>
									</Link>
								</div>
							);
						})}
				</Carousel>
			</div>
			{details &&
				details.map((element, index) => {
					return (
						<PokeTile
							key={index}
							PokeID={element.id}
							PokeName={element.name}
							PokePic={element.picture}
						/>
					);
				})}
		</div>
	);
}
