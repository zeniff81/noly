import React, { useEffect } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import '../css/Signin.css';
import { auth } from '../firebase/config';
import { useState } from 'react';
import { connect } from 'react-redux';
import { requestLogin, logout } from '../redux/auth/reducer';
import { Redirect } from 'react-router-dom';

function SignIn({
	loggedIn,
	requestLogin,
	attemptLogout,
	email,
	administrator,
}) {
	const [emailValue, setEmailValue] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState('');
	const [isLoggedIn, setisLoggedIn] = useState(false);

	const [result, setResult] = useState({
		message: 'this is a test',
		color: '',
	});

	useEffect(() => {
		console.log('useeffect: loggedIn', isLoggedIn);
		if (loggedIn) {
			setResult({
				message: 'Bienvenido/a. Los datos son corrects.',
				color: 'green',
			});
		} else {
			setResult({
				message: 'El email o la contraseña están incorrectos.',
				color: 'red',
			});
		}
		console.log(result);
	}, [loggedIn]);

	const loginClick = (e) => {
		e.preventDefault();
		const userInfo = {
			user: user,
			email: emailValue,
			password: password,
			loggedIn: true,
			administrator: null,
		};
		requestLogin(userInfo);
	};

	return (
		<form className="signin">
			{loggedIn && <Redirect to="/home" />}
			<PersonIcon className="signin__icon" />
			<h2>Login</h2>

			<label className="signin__label" htmlFor="email">
				email
			</label>
			<input
				className="signin__input"
				type="email"
				name="email"
				id="email"
				value={emailValue}
				onChange={(e) => setEmailValue(e.target.value)}
			/>
			<label className="signin__label" htmlFor="password">
				contraseña
			</label>
			<input
				className="signin__input"
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button type="submit" onClick={loginClick} className="signin__btn">
				Login
			</button>
			<div className="signin__result" style={{ color: result.color }}>
				Result: {result.message}
			</div>
		</form>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		loggedIn: state.auth.loggedIn,
		administrator: state.auth.administrator,
		email: state.auth.email,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		requestLogin: (userInfo) => dispatch(requestLogin(userInfo)),
		attempLogout: () => dispatch(logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
