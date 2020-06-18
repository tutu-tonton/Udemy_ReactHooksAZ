import React, { useState, useEffect } from 'react';

import './App.scss';

//========================================
//  31.
//========================================
const initProfile = {
	followers: null,
	publicRepos: null,
};

const App = () => {
	const [profile, setProfile] = useState(initProfile);

	const getProfile = async () => {
		const response = await fetch('https://api.github.com/users/gitmil');
		const json = await response.json();

		setProfile({
			followers: json.followers,
			publicRepos: json.public_repos,
		});
	};

	useEffect(() => {
		getProfile();
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<h2>Fetch Data</h2>
				<h3>{`followers: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
			</header>
		</div>
	);
};

export default App;

//========================================
//  30. useEffectの例
//  １秒毎に更新される時間
//  マウスポインたーの位置
//========================================
// const initXY = {
// 	x: null,
// 	y: null,
// };

// const App = () => {
// 	const [time, setTime] = useState(Date);
// 	const [xy, setXY] = useState(initXY);

// 	// １秒毎に更新される時間表示
// 	useEffect(() => {
// 		let handle = setInterval(() => {
// 			setTime(Date);
// 		}, 1000);
// 		// １秒毎に新たなhandleが生み出されていく
// 		// クリーンアップ実行
// 		return () => {
// 			clearInterval(handle);
// 		};
// 	});

// 	// マウスポインターの座標表示
// 	const mousemoveHandle = (e) => {
// 		setXY({
// 			x: e.clientX,
// 			y: e.clientY,
// 		});
// 	};

// 	useEffect(() => {
// 		window.addEventListener('mousemove', mousemoveHandle);
// 		return () => {
// 			window.removeEventListener('mousemove', mousemoveHandle);
// 		};
// 	}, []);

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h2>Use Effect Examples</h2>
// 				<h3>Date & Time : {time}</h3>
// 				<h3>{`x: ${xy.x}, y: ${xy.y}`}</h3>
// 			</header>
// 		</div>
// 	);
// };

// export default App;

//========================================
//  29. useEffect
//  ライフサイクル - 条件で実行される
//========================================
// let born = false;

// const App = () => {
// 	const [growth, setGrowth] = useState(0);
// 	const [nirvana, setNirvana] = useState(false);

// 	useEffect(() => {
// 		if (born) {
// 			document.title = 'nirvana attained';
// 		}
// 	}, [nirvana]);

// 	// useEffect マウント時だけ実行されるパターン
// 	useEffect(() => {
// 		console.log('I am born!');
// 	}, []);

// 	// マウント＋レンダリング毎に実行されるパターン
// 	// useEffect(() => {
// 	// 	console.log('every updated!');  //
// 	// });

// 	// マウント時は実行しない
// 	useEffect(() => {
// 		if (born) {
// 			console.log('make mistake and learn!'); //
// 		} else {
// 			born = true;
// 		}

// 		// ある一定値で実行
// 		if (growth > 70) {
// 			setNirvana(true);
// 		}
// 		// return (
// 		//   const cleanup = () => {
// 		//     console.log('cleanup after mistakes');
// 		//   }
// 		// )
// 	});

// 	const growHandle = () => {
// 		setGrowth(growth + 10);
// 	};

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h2>Use Effect</h2>
// 				<h3>growth: {growth}</h3>
// 				<button onClick={growHandle}>learn and grow</button>
// 			</header>
// 		</div>
// 	);
// };

// export default App;
