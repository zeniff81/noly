import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import '../css/Signin.css';
import { auth } from '../firebase/config';
import { useState } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux/auth/reducer';

function SignIn({
	user,
	loggedIn,
	attemptLogin,
	attemptLogout,
	email,
	administrator,
}) {
	const [emailValue, setEmailValue] = useState('');
	const [password, setPassword] = useState('');
	const [result, setResult] = useState({
		result: 'rr',
		color: 'rr',
	});

	const loginClick = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				setResult({
					message: 'Exito! Los datos son correctos.',
					color: 'green',
				});
			})
			.catch((error) => {
				setResult({ message: error.message, color: 'red' });
			});
	};

	const testLogin = (e) => {
		e.preventDefault();
		attemptLogin({ user: 'MORENO', email: emailValue });
	};
	const testLogout = (e) => {
		e.preventDefault();
		attemptLogout();
	};

	return (
		<form className="signin">
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
				{result.message}
			</div>

			<div className="test">
				<button onClick={testLogin} className="test__btn">
					LOGIN
				</button>
				<button onClick={testLogout} className="test__btn">
					LOGOUT
				</button>

				<p>
					<label htmlFor="">user::: : {user}</label>
					<br />
					<label htmlFor="">loggedin::: : {loggedIn.toString()}</label>
					<br />
					<label htmlFor="">email::: : {email}</label>
					<br />
					<label htmlFor="">
						administrator::: : {administrator.toString()}
					</label>
					<br />
				</p>
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
		attemptLogin: ({ user, email }) => dispatch(login({ user, email })),
		attemptLogout: () => dispatch(logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
