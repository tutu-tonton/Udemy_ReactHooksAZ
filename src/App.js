import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';

import AboutPage from './pages/AboutPage';

import './App.css';

//========================================
//  37. Route Links
//  39. Redirect
//========================================
const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const onClickHandle = () => {
		setLoggedIn(!loggedIn);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<ul>
						<li>
							<NavLink className="App-link" to="/" exact activeClassName="Link-active-style">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink className="App-link" to="/about" activeClassName="Link-active-style">
								About Page
							</NavLink>
						</li>
						<li>
							<NavLink className="App-link" to="/user/john/doe" activeClassName="Link-active-style">
								User John Doe
							</NavLink>
						</li>
					</ul>
					{loggedIn.toString()}
					<button className="button" onClick={onClickHandle}>
						{loggedIn ? 'logout' : 'login'}
					</button>
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
							return loggedIn ? (
								<h1>
									Welcome {match.params.firstname} {match.params.lastname}
								</h1>
							) : (
								<Redirect to="/"></Redirect>
							);
						}}
					/>
				</header>
			</div>
		</BrowserRouter>
	);
};

export default App;
