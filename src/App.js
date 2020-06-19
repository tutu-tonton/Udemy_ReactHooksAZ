import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AboutPage from './pages/AboutPage';

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Route
						path="/"
						exact
						render={() => {
							return <h1>Welcome Home</h1>;
						}}
					/>
					<Route path="/about" component={AboutPage} />
					<Route
						path="/user/:firstname/:lastname"
						exact
						render={({ match }) => {
							console.log(match);
							return (
								<h1>
									Welcome {match.params.firstname} {match.params.lastname}
								</h1>
							);
						}}
					/>
				</header>
			</div>
		</BrowserRouter>
	);
};

export default App;
