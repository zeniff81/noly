import * as ACTIONS from './types';

const initialState = {
	cartItems: [
		{
			id: '810c5bbd-081a-4d20-85d3-83c7231e0436',
			title: 'new title',
			description: 'new description',
			price: 0,
			imageUrl:
				'https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/ropa%20(4).png?alt=media&token=7ae771ec-c89d-44d6-a621-3396f9d13ba4',
		},
		{
			id: '4396ddfe-5eb1-4fd3-beff-6832a4cb1a9e',
			title: 'new title',
			description: 'new description',
			price: 0,
			imageUrl:
				'https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/ropa%20(2).png?alt=media&token=bf823da5-dcb5-4e4a-8cc4-13964fbf7a44',
		},
		{
			id: '9bc3b643-6eb0-4158-99e3-6ef4c4d31e69',
			title: 'new title',
			description: 'new description',
			price: 0,
			imageUrl:
				'https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/colchas%20(1).png?alt=media&token=e259be05-e192-485d-84de-efc4e9e8cc33',
		},
	],
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
