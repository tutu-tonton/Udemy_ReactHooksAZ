import React, { useContext } from 'react';
import messageContext from './../contexts/messageContext';

const HomePage = () => {
	return (
		// <> : Fragmentの書き方
		<>
			<h1>Welcome HomePage</h1>
			<h2>Message {useContext(messageContext)}</h2>
		</>
	);
};

export default HomePage;
