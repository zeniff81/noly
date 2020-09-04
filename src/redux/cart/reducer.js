import * as ACTIONS from './types';

const initialState = {
	items: ['item1', 'item2'],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				items: [...state.items, action.payload],
			};
			break;

		default:
			return state;
	}
};

export default cartReducer;
