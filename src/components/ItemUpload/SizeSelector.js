import './css/SizeSelector.css';
import React from 'react';
import { useState } from 'react';

function SizeSelector({ setSize }) {
	const [selected, setSelected] = useState('S');
	const buttonClick = (e) => {
		setSize(e.target.innerText);
		setSelected(e.target.innerText);
	};

	const getSelected = (innerText) => {
		return innerText === selected && 'sizeSelector__selected';
	};

	return (
		<div className="sizeSelector">
			<div className="sizeSelector__title">Elija el tamaño</div>{' '}
			<div className="sizeSelector__sizes">
				<button
					className={`sizeSelector__btn ${getSelected('S')}`}
					onClick={buttonClick}
				>
					S
				</button>
				<button
					className={`sizeSelector__btn ${getSelected('M')}`}
					onClick={buttonClick}
				>
					M
				</button>
				<button
					className={`sizeSelector__btn ${getSelected('L')}`}
					onClick={buttonClick}
				>
					L
				</button>
				<button
					className={`sizeSelector__btn ${getSelected('XL')}`}
					onClick={buttonClick}
				>
					XL
				</button>
			</div>
		</div>
	);
}

export default SizeSelector;

// TODO ItemCard is re-rendering when setCurrentDoc is used
// to let ItemCardEdit what doc to work with
