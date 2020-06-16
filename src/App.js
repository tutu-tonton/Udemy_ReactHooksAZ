import React from 'react';

import NameTag from '../src/component/nameTag.component';
import './App.scss';

//========================================
// 　HOC
// 　引数を必要として、さらにpropsも必要
//========================================
const makeGreen = (BaseComponent) => (props) => {
	const addGreen = {
		style: {
			color: 'green',
		},
	};

	const newProps = {
		...props,
		...addGreen,
	};

	return <BaseComponent {...newProps} />;
};

const GreenNameTag = makeGreen(NameTag);

//
//========================================

const removeInline = (BaseComponent) => (props) => {
	const newProps = { ...props };
	delete newProps.style;
	return <BaseComponent {...newProps} />;
};

const CleanNameTag = removeInline(NameTag);

//========================================
//  JSX
//========================================
const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="name title">Names List</h1>
				<GreenNameTag firstName="peter" lastName="peterson"></GreenNameTag>
				<CleanNameTag firstName="john" lastName="johnson"></CleanNameTag>
				<NameTag firstName="jill" lastName="jillson"></NameTag>
				<NameTag></NameTag>
			</header>
		</div>
	);
};

export default App;

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
