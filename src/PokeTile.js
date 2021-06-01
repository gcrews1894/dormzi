import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

export default function PokeTile(props) {
	const { PokeID, PokeName, PokePic } = props;
	return (
		<Link className='PokeTile' to={`/pokemon/${PokeID}`}>
			<img src={PokePic} className='TilePic' />
			<h1>{PokeName}</h1>
		</Link>
	);
}
