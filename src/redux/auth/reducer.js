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
	return {
		type: 'LOGOUT',
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
				loggedIn: true,
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
