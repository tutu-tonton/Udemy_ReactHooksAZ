import React, { useState, useEffect } from 'react';

import './App.scss';

let born = false;

const App = () => {
	const [growth, setGrowth] = useState(0);
	const [nirvana, setNirvana] = useState(false);

	useEffect(() => {
		if (born) {
			document.title = 'nirvana attained';
		}
	}, [nirvana]);

	// useEffect マウント時だけ実行されるパターン
	useEffect(() => {
		console.log('I am born!');
	}, []);

	// マウント＋レンダリング毎に実行されるパターン
	// useEffect(() => {
	// 	console.log('every updated!');  //
	// });

	// マウント時は実行しない
	useEffect(() => {
		if (born) {
			console.log('make mistake and learn!'); //
		} else {
			born = true;
		}

		// ある一定値で実行
		if (growth > 70) {
			setNirvana(true);
		}
		// return (
		//   const cleanup = () => {
		//     console.log('cleanup after mistakes');
		//   }
		// )
	});

	const growHandle = () => {
		setGrowth(growth + 10);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>Use Effect</h2>
				<h3>growth: {growth}</h3>
				<button onClick={growHandle}>learn and grow</button>
			</header>
		</div>
	);
};

export default App;
