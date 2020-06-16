import React, { useState } from 'react';

import './App.scss';

const App = () => {
	const [age, setAge] = useState(21);

	const ageUpHandle = () => {
		setAge(age + 1);
	};
	const ageDownHandle = () => {
		setAge(age - 1);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Use State Hook</h1>
				<h2>Age: {age}</h2>
				<button onClick={ageUpHandle}>Age Up</button>
				<button onClick={ageDownHandle}>Age down</button>
			</header>
		</div>
	);
};

export default App;

// import NameTag from '../src/component/nameTag.component';
// //========================================
// // 　HOC
// // 　引数を必要として、さらにpropsも必要
// //========================================
// const makeGreen = (BaseComponent) => (props) => {
// 	const addGreen = {
// 		style: {
// 			color: 'green',
// 		},
// 	};

// 	const newProps = {
// 		...props,
// 		...addGreen,
// 	};

// 	return <BaseComponent {...newProps} />;
// };

// const GreenNameTag = makeGreen(NameTag);

// //
// //========================================

// const removeInline = (BaseComponent) => (props) => {
// 	const newProps = { ...props };
// 	delete newProps.style;
// 	return <BaseComponent {...newProps} />;
// };

// const CleanNameTag = removeInline(NameTag);

// //========================================
// //  JSX
// //========================================
// const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1 className="name title">Names List</h1>
// 				<GreenNameTag firstName="peter" lastName="peterson"></GreenNameTag>
// 				<CleanNameTag firstName="john" lastName="johnson"></CleanNameTag>
// 				<NameTag firstName="jill" lastName="jillson"></NameTag>
// 				<NameTag></NameTag>
// 			</header>
// 		</div>
// 	);
// };

// export default App;

//========================================
//  分割代入でスタイル上書き
//========================================
// const nameStyle = {
// 	color: 'gray',
// 	border: '1px solid gray',
// 	paddingTop: '5px',
// 	width: '300px',
// };

// const nameTagTitle = {
// 	color: 'yellow',
// 	borderColor: 'yellow',
// 	borderStyle: 'dotted',
// };

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<h1 style={{ ...nameStyle, ...nameTagTitle }}>Names List</h1>
// 				<h3 style={nameStyle}>Peter</h3>
// 				<h3 style={nameStyle}>John</h3>
// 				<h3 style={nameStyle}>Jill</h3>
// 			</header>
// 		</div>
// 	);
// }
