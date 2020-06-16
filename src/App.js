import React, { useState } from 'react';

import Item from './components/item.component';

import './App.scss';

const initList = [
	{ name: 'tomato', calorie: 20 },
	{ name: 'rice', calorie: 30 },
	{ name: 'candy', calorie: 100 },
];

const App = () => {
	const [list, setList] = useState(initList);

	// listからカロリーが50より多いものを削除する
	const removeUnhealthyHandle = (e) => {
		// e.preventDefault();
		const filteredList = list.filter((ele) => ele.calorie < 50);

		setList(filteredList);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>Grocery List</h2>
				{list.map((ele, idx) => {
					return <Item key={`${idx}${ele.name}${ele.calorie}`} item={ele}></Item>;
				})}
				<button onClick={removeUnhealthyHandle} className="remove-button">
					Remove Unhealthy
				</button>
			</header>
		</div>
	);
};
export default App;
