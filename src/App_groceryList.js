import React, { useState } from 'react';

import Item from './components/item.component';
import useList from './hooks/useList';

import './App.scss';

const initList = [
	{ name: 'tomato', calorie: 20 },
	{ name: 'rice', calorie: 30 },
	{ name: 'candy', calorie: 100 },
];

const App = () => {
	const items = useList(initList);
	// const [list, setList] = useState(initList);	// カスタムフックに置き換え
	const [editable, setEditable] = useState(false);

	// 各アイテムのボタンを押すと、そのアイテムが削除されるようにする
	// どのアイテムのボタンが押されたかを判別できないといけない
	// -> 各ボタンのname属性利用
	// -> e.target.nameで判別可能
	const removeItemHandle = (e) => {
		// カスタムフックにまとめる
		items.removeItem(e.target.name);
		// console.dir(e.target.name);

		// クリックされたアイテムを削除する
		// => クリックされたアイテム以外で新配列作る
		// const filteredList = list.filter((ele) => ele.name !== e.target.name);
		// setList(filteredList);
	};

	// アイテム名ダブルクリックすると、編集可能にする
	const makeEditableHandle = () => {
		setEditable(true);
	};

	// 編集終わったら、入力値のテキスト表示
	const keyPressHandle = (e, idx) => {
		// console.log(e.key);	// どのキーが押されたかわかる。enterとかも
		if (e.key === 'Enter') {
			// 入力確定したら通常のテキスト表示に戻す
			setEditable(!editable);

			// カスタムフックにまとめる
			items.saveItem(idx, e.target.value);
			// 子の onKeyPress(e, props.index) によりイベントが起こったところのindex情報が渡されてきているか
			// console.log(idx);
			// const copyList = [...list];
			// copyList[idx].name = e.target.value;

			// console.log(e.target.value);
		}
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
				{items.list.map((ele, idx) => {
					// {list.map((ele, idx) => {
					// 各ボタンが押された時の処理は、親側で処理する
					return (
						<Item
							onClick={removeItemHandle}
							key={`${idx}${ele.name}${ele.calorie}`}
							item={ele}
							editable={editable}
							onDoubleClick={makeEditableHandle}
							onKeyPress={keyPressHandle}
							index={idx}
						/>
					);
				})}
				{/* <button onClick={removeUnhealthyHandle} className="remove-button">
					Remove Unhealthy
				</button> */}
			</header>
		</div>
	);
};
export default App;
