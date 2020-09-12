import { auth } from '../../firebase/config';

const initialState = {
	user: 'invitado',
	email: '',
	loggedIn: false,
	administrator: false,
};

const ADMINISTRATORS = [
	'noeliard801234@gmail.com',
	'zeniff81android@gmail.com',
];

export const login = (userInfo) => {
	return {
		type: 'LOGIN',
		payload: userInfo,
	};
};

export const logout = () => {
	return (dispatch) => {
		auth
			.signOut()
			.then(() => {
				const newUserInfo = {
					user: 'Invitado',
					email: '',
					loggedIn: false,
				};
				dispatch(login(newUserInfo));
			})
			.catch((error) => alert(error.message));
	};
};

export const requestLogin = (userInfo) => {
	return function (dispatch) {
		auth
			.signInWithEmailAndPassword(userInfo.email, userInfo.password)
			.then(() => {
				const newUserInfo = {
					user: 'MORENO',
					email: userInfo.email,
					loggedIn: true,
				};
				dispatch(login(newUserInfo));
			})
			.catch((error) => {
				const newUserInfo = {
					user: 'Invitado',
					email: '',
					loggedIn: false,
				};
				dispatch(login(newUserInfo));
			});
	};
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			const isAdmin = ADMINISTRATORS.includes(action.payload.email);
			return {
				...state,
				user: action.payload.user,
				email: action.payload.email,
				loggedIn: action.payload.loggedIn,
				administrator: isAdmin,
			};

		case 'LOGOUT':
			return {
				...state,
				user: 'cliente',
				email: '',
				loggedIn: false,
				administrator: false,
			};

		default:
			return state;
	}
};

export default authReducer;
