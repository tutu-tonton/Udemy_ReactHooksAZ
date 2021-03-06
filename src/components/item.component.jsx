import React from 'react';

import './item.styles.scss';

const item = (props) => {
	return (
		<div className="item-style">
			{/* props.editable ? ダブルクリックで編集可能に : 編集不可 */}
			{props.editable ? (
				<input
					type="text"
					// キー入力すると、親のfunc発動
					// 入力欄が複数あるから、どこで入力されたか情報をindexで渡す
					onKeyPress={(e) => props.onKeyPress(e, props.index)}
					defaultValue={props.item.name}
				/>
			) : (
				// <input type="text" onKeyPress={props.onKeyPress} defaultValue={props.item.name} />
				<h3 onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
			)}
			<h3>{props.item.calorie}</h3>
			{/* 各ボタンにはname属性が設定される */}
			{/* -> どのボタンが押されたか判別ができる */}
			{/* クリックされた時の処理は、親コンポーネント側で処理する */}
			<button name={props.item.name} className="remove-button" onClick={props.onClick}>
				Remove
			</button>
		</div>
	);
};

export default item;
