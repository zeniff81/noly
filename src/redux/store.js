import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './cart/reducer';
import itemUploadReducer from './itemUpload/reducer';
import authReducer from './auth/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const thunk = require('redux-thunk').default;

const rootReducer = combineReducers({
	cart: cartReducer,
	itemUpload: itemUploadReducer,
	auth: authReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
