import React from 'react';
import '../css/Purchase.css';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

function Purchase({ match }) {
	const [submitted, setSubmitted] = useState(false);

	console.log('match', match);

	const [inputState, setinputState] = useState({
		name: 'new name',
		phone: 'phone number',
		qty: '0',
	});

	const onChangeHandler = (e) => {
		const property = e.target.id;
		const value = e.target.value;

		setinputState({
			[property]: value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className="purchase">
			{submitted ? (
				<Redirect to="/thankyoupurchase" />
			) : (
				<form onSubmit={onSubmit}>
					<div className="purchase__info">
						<label htmlFor="name">NOMBRE</label>
						<input
							value={inputState.name}
							onChange={onChangeHandler}
							type="text"
							id="name"
						/>

						<label htmlFor="phone">TELEFONO</label>
						<input
							value={inputState.phone}
							onChange={onChangeHandler}
							type="text"
							id="phone"
						/>

						<label htmlFor="qty">CANTIDAD</label>
						<input
							value={inputState.qty}
							onChange={onChangeHandler}
							type="text"
							id="qty"
						/>
					</div>

					<button className="purchase__submit" type="submit">
						ACEPTAR
					</button>
				</form>
			)}
		</div>
	);
}

export default Purchase;
