import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function PokeInfo({ match, location }) {
	const [isLoading, setIsLoading] = useState(true);
	const [PokeDetails, setPokeDetails] = useState();
	const {
		params: { id },
	} = match;
	const url = `http://pokemon.test.dormzi.com/pokemon/${id}`;
	let nextId = Number(id) + 1;
	let prevId = Number(id) - 1;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPokeDetails(data))
			.then(() => {
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [url]);

	console.log(PokeDetails);
	return (
		!isLoading && (
			<div className='detailsPage'>
				<Link className='prevPoke' to={`/pokemon/${prevId}`}>
					<FontAwesomeIcon
						className='leftArrow'
						icon={faChevronLeft}
						size='2x'
						inverse
					/>
				</Link>
				<div className='PokeDetails'>
					<img src={PokeDetails.picture} className='detailsPic' />
					<h1 className='englishName'>{PokeDetails.name}</h1>
					<div className='namesDiv'>
						<h2>Name Translations</h2>
						<p>Japanese: {PokeDetails.jname}</p>
						<p>Chinese: {PokeDetails.cname}</p>
					</div>
					<div className='statsDiv'>
						<h2>Stats</h2>
						<p>Attack : {PokeDetails.base.Attack}</p>
						<p>Defense : {PokeDetails.base.Defense}</p>
						<p>Health : {PokeDetails.base.HP}</p>
						<p>Sp. Attack : {PokeDetails.base[`Sp.Atk`]}</p>
						<p>Sp. Defense : {PokeDetails.base[`Sp.Def`]}</p>
						<p>Speed : {PokeDetails.base.Speed}</p>
					</div>
					<div className='skillsDiv'>
						<h1>Skills</h1>
						<div className='eggDiv'>
							<h3>
								Egg Moves:
								{PokeDetails.skills.egg &&
									PokeDetails.skills.egg.map((ele) => {
										if (PokeDetails.skills.egg.length < 2)
											return <span>{" " + ele}</span>;
										else {
											return <span>{" " + ele + ", "}</span>;
										}
									})}
							</h3>
						</div>
						<div className='levelDiv'>
							<h3>
								Level-up Moves:
								{PokeDetails.skills.level_up &&
									PokeDetails.skills.level_up.map((ele) => {
										if (PokeDetails.skills.level_up.length < 2)
											return <span>{" " + ele}</span>;
										else {
											return <span>{" " + ele + ", "}</span>;
										}
									})}
							</h3>
						</div>
						<div className='tmDiv'>
							<h3>
								TM Moves:
								{PokeDetails.skills.tm &&
									PokeDetails.skills.tm.map((ele) => {
										if (PokeDetails.skills.tm.length < 2)
											return <span>{" " + ele}</span>;
										else {
											return <span>{" " + ele + ", "}</span>;
										}
									})}
							</h3>
						</div>
						<div className='transferDiv'>
							<h3>
								Transfer Moves:
								{PokeDetails.skills.transfer &&
									PokeDetails.skills.transfer.map((ele) => {
										if (PokeDetails.skills.transfer.length < 2)
											return <span>{" " + ele}</span>;
										else {
											return <span>{" " + ele + ", "}</span>;
										}
									})}
							</h3>
						</div>
						<div className='tutorDiv'>
							<h3>
								Tutor Moves:
								{PokeDetails.skills.tutor &&
									PokeDetails.skills.tutor.map((ele) => {
										if (PokeDetails.skills.tutor.length < 2)
											return <span>{" " + ele}</span>;
										else {
											return <span>{" " + ele + ", "}</span>;
										}
									})}
							</h3>
						</div>
					</div>
				</div>
				<Link className='nextPoke' to={`/pokemon/${nextId}`}>
					<FontAwesomeIcon
						className='rightArrow'
						icon={faChevronRight}
						size='2x'
						inverse
					/>
				</Link>
			</div>
		)
	);
}
