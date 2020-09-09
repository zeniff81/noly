import { createStore, combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import itemUploadReducer from './itemUpload/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	cart: cartReducer,
	itemUpload: itemUploadReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
