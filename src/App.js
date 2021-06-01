import "./App.scss";
import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import PokeList from "./PokeList";
import PokeInfo from "./PokeInfo";

function App() {
	const [details, setDetails] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const url = "http://pokemon.test.dormzi.com/pokemon";

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDetails(data))
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleClick = () => {
		console.log(details);
	};

	return (
		<div className='app'>
			{!isLoading && (
				<Router>
					<Route
						exact
						path='/'
						render={(props) => <PokeList {...props} details={details} />}
					/>
					<Route
						exact
						path='/pokemon/:id'
						render={(props) => <PokeInfo {...props} details={details} />}
					/>
				</Router>
			)}
			{/* <button onClick={handleClick}>View Data</button> */}
		</div>
	);
}

export default App;
