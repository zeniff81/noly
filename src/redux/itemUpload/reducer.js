const initialState = {
	currentDoc: null,
};

const itemUploadReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_DOC':
			return {
				...state,
				currentDoc: action.payload,
			};

		case 'UPDATE_CURRENT_DOC':
			return {
				return: state,
			};

		default:
			return state;
	}
};

export default itemUploadReducer;
