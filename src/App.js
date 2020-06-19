import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink, Redirect, Prompt } from 'react-router-dom';

import AboutPage from './pages/AboutPage';

import './App.css';

//========================================
//  37. Route Links
//  39. Redirect
//  40. Route Prompt - 入力途中で離脱操作した時に、prompt出るように。
//========================================
const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [age, setAge] = useState(null);

	const onClickHandle = () => {
		setLoggedIn(!loggedIn);
	};

	const onChangeHandle = (e) => {
		setAge(e.target.value);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<ul className="ul-style">
						<li className="li-style">
							<NavLink className="App-link" to="/" exact activeClassName="Link-active-style">
								Home
							</NavLink>
						</li>
						<li className="li-style">
							<NavLink className="App-link" to="/about" activeClassName="Link-active-style">
								About Page
							</NavLink>
						</li>
						<li className="li-style">
							<NavLink className="App-link" to="/user/john/doe" activeClassName="Link-active-style">
								User John Doe
							</NavLink>
						</li>
					</ul>
					<Prompt
						// ログインしていて、ageに入力ない時、
						when={loggedIn && !age}
						message={(location) => {
							return location.pathname.startsWith('/user') ? true : 'Are you sure?';
						}}
					></Prompt>
					LogIn = {loggedIn.toString()}
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
									Age: {age}
									<input type="text" value={age} onChange={onChangeHandle}></input>
									<br />
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
