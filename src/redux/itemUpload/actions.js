import useFirestore from '../../firebase/useFirestore';

export const setCurrentDoc = (doc) => {
	return {
		type: 'SET_CURRENT_DOC',
		payload: doc,
	};
};

export const updateCurrentDoc = (doc) => {
	return function (dispatch) {};
};
