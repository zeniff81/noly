import { createStore, combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
