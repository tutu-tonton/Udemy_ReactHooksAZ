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

	// 各アイテムのボタンを押すと、そのアイテムが削除されるようにする
	// どのアイテムのボタンが押されたかを判別できないといけない
	// -> 各ボタンのname属性利用
	// -> e.target.nameで判別可能
	const removeItemHandle = (e) => {
		console.dir(e.target.name);
		// クリックされたアイテムを削除する
		// => クリックされたアイテム以外で新配列作る
		const filteredList = list.filter((ele) => ele.name !== e.target.name);
		setList(filteredList);
	};

	// // listからカロリーが50より多いものを削除する
	// const removeUnhealthyHandle = (e) => {
	// 	// e.preventDefault();
	// 	const filteredList = list.filter((ele) => ele.calorie < 50);
	// 	setList(filteredList);
	// };

	return (
		<div className="App">
			<header className="App-header">
				<h2>Grocery List</h2>
				{list.map((ele, idx) => {
					// 各ボタンが押された時の処理は、親側で処理する
					return <Item onClick={removeItemHandle} key={`${idx}${ele.name}${ele.calorie}`} item={ele}></Item>;
				})}
				{/* <button onClick={removeUnhealthyHandle} className="remove-button">
					Remove Unhealthy
				</button> */}
			</header>
		</div>
	);
};
export default App;
