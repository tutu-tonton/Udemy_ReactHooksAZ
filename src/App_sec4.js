import React, { useState } from 'react';
import useCustomFetch from './hooks_sec4/useCustomFetch.js';

import './App.scss';

//========================================
//  36. useCustomFetch
//========================================
const App = () => {
	const [url, setUrl] = useState(null);
	const [data, loading, error] = useCustomFetch(url);

	const getFollowers = (e) => {
		if (e.key === 'Enter') {
			setUrl('https://api.github.com/users/' + e.target.val);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>GitID</h2>
				<input onKeyPress={getFollowers}></input>

				{loading && url && <div>Loading...</div>}
				{!loading && data && data && data.rData && data.rData.followers && (
					<div>Followers: {data.rData.followers}</div>
				)}
				{error && <div>Error: {error}</div>}
			</header>
		</div>
	);
};

export default App;

//========================================
//  34. useLayoutEffect
//  要素のサイズを測る
//========================================
// import React, { useState, useRef, useLayoutEffect } from 'react';

// const useDimension = (ele, val) => {
// 	const [height, setHeight] = useState(0);
// 	const [width, setWidth] = useState(0);

// 	useLayoutEffect(() => {
// 		let boundingBox = ele.current.getBoundingClientRect();
// 		// console.log(JSON.stringify(boundingBox));  //
// 		setHeight(boundingBox.height);
// 		setWidth(boundingBox.width);
// 	}, [val]);
// 	return { height, width };
// };

// const App = () => {
// 	const [val, setVal] = useState(2);
// 	const valEl = useRef(null);

// 	const { height, width } = useDimension(valEl, val);
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1>
// 					Height: {height}, Width: {width}
// 				</h1>
// 				<div ref={valEl}>{val}</div>
// 				<button onClick={() => setVal(val * 10)}>10*</button>
// 			</header>
// 		</div>
// 	);
// };

// export default App;

//========================================
//  33. customHook - usePrevious
//  1つ前のstateを保存しておく。 useRef使う
//========================================
// import React, { useState } from 'react';

// import usePrevious from './hooks/usePrevious';

// const App = () => {
// 	const [age, setAge] = useState(21);
// 	const previousAge = usePrevious(age);

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h2>Current Age: {age}</h2>
// 				<h2>Previous Age: {previousAge}</h2>
// 				<button onClick={() => setAge(age - 1)}>Make Me Younger</button>
// 			</header>
// 		</div>
// 	);
// };

// export default App;

//========================================
//  32. useMemo
//========================================
// import React, { useState, useMemo } from 'react';

// import Child from './components/child.component';

// import './App.scss';

// const App = () => {
// 	const [i, setI] = useState(0);

// 	const onClickHandle = () => {
// 		setI(i + 1);
// 	};

// 	const memoChild = useMemo(() => {
// 		return <Child />;
// 	}, []);

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h2> Use Memo</h2>
// 				<h3>i: {i}</h3>
// 				<button onClick={onClickHandle}>Increment I</button>
// 				<h3>normal render</h3>
// 				<Child />
// 				<h3>Memo render</h3>
// 				{memoChild}
// 			</header>
// 		</div>
// 	);
// };

// export default App;

//========================================
//  31. fetch Data with async await
//========================================
// const initProfile = {
// 	followers: null,
// 	publicRepos: null,
// };

// const App = () => {
// 	const [profile, setProfile] = useState(initProfile);

// 	const getProfile = async () => {
// 		const response = await fetch('https://api.github.com/users/gitmil');
// 		const json = await response.json();

// 		setProfile({
// 			followers: json.followers,
// 			publicRepos: json.public_repos,
// 		});
// 	};

// 	useEffect(() => {
// 		getProfile();
// 	}, []);
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h2>Fetch Data</h2>
// 				<h3>{`followers: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
// 			</header>
// 		</div>
// 	);
// };

// export default App;

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
