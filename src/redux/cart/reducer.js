import * as ACTIONS from './types';

const initialState = {
	cartItems: [],
	totals: {
		partialTotal: 0,
		shipping: 100,
		grandTotal: 0,
	},
};

const calculateItems = (arrItems) => {
	return arrItems.reduce((previousValue, currentValue) => {
		return previousValue + currentValue['price'];
	}, 0);
};

const cartReducer = (state = initialState, action) => {
	let newPartialTotal = 0;
	let newGrandTotal = 0;

	switch (action.type) {
		case ACTIONS.ADD_TO_CARD:
			newPartialTotal = state.totals.partialTotal + action.payload.price;
			newGrandTotal =
				calculateItems(state.cartItems) +
				state.totals.shipping +
				action.payload.price;

			// return
			return {
				...state,
				cartItems: [
					...state.cartItems,
					{
						id: action.payload.id,
						title: action.payload.title,
						description: action.payload.description,
						price: action.payload.price,
						imageUrl: action.payload.imageUrl,
					},
				],
				totals: {
					...state.totals,
					partialTotal: newPartialTotal,
					grandTotal: newGrandTotal,
				},
			};

		case ACTIONS.REMOVE_FROM_CARD:
			const filtered = state.cartItems.filter((item, idx) => {
				return item.id !== action.payload;
			});

			newPartialTotal = calculateItems(filtered);
			newGrandTotal = calculateItems(filtered) + state.totals.shipping;

			// return
			return {
				...state,
				cartItems: filtered,
				totals: {
					...state.totals,
					grandTotal: newGrandTotal,
					partialTotal: newPartialTotal,
				},
			};

		case ACTIONS.SET_SHIPPING:
			newGrandTotal = calculateItems(state.cartItems) + action.payload;

			// return
			return {
				...state,
				totals: {
					...state.totals,
					shipping: action.payload,
					grandTotal: newGrandTotal,
				},
			};

		default:
			return state;
	}
};

export default cartReducer;
