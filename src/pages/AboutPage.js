import React, { useContext } from 'react';
import messageContext from './../contexts/messageContext';
import Outer from './components/outer.component';

const AboutPage = () => {
	return (
		// <> : Fragmentの書き方
		<>
			<h1>Welcome AboutPage</h1>
			<h2>Message {useContext(messageContext)}</h2>
			<Outer></Outer>
		</>
	);
};

export default AboutPage;
