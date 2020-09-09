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

		default:
			return state;
	}
};

export default itemUploadReducer;
