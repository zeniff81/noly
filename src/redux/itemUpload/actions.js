export const setCurrentDoc = (doc) => {
	return {
		type: 'SET_CURRENT_DOC',
		payload: doc,
	};
};

export const updateCurrentDoc = (doc) => {
	return {
		type: 'UPDATE_CURRENT_DOC',
		payload: doc,
	};
};
