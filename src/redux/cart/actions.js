import * as ACTIONS from './types';

export const addToCart = (item) => {
	return {
		type: ACTIONS.ADD_TO_CARD,
		payload: item,
	};
};
export const removeFromCart = (id) => {
	return {
		type: ACTIONS.REMOVE_FROM_CARD,
		payload: id,
	};
};

export const setShipping = (fee = 0) => {
	return {
		type: ACTIONS.SET_SHIPPING,
		payload: fee,
	};
};
