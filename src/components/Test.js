import React from 'react';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { addToCart } from '../redux/cart/actions';
import { useState } from 'react';

function Test(props) {
	const [item, setItem] = useState('');

	const onClickHandler = (e) => {
		props.addToCart(item);
	};

	return (
		<div className="test">
			<h1>Test</h1>
			<input
				type="text"
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			<button onClick={onClickHandler}>Add to cart</button>
			<ul>
				{props.items.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>
			<p>current item: {item}</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		items: state.cart.items,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) => dispatch(addToCart(item)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
