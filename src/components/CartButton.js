import React from 'react';
import { useState } from 'react';
import '../css/CartButton.css';

function CartButton({ addToCart, continueBrowsing, goToCart }) {
	const [state1, setState1] = useState(true);
	const [state2, setState2] = useState(false);

	const addToCartClick = (e) => {
		e.stopPropagation();
		setState1(false);
		setState2(true);
		addToCart();
	};
	const continueBrowsingClick = () => {
		continueBrowsing();
	};
	const goToCartClick = () => {
		goToCart();
	};

	return (
		<div className="cartbutton">
			{state1 && (
				<button
					className="cartbutton__btn cartButton__addToCart"
					onClick={addToCartClick}
				>
					Añadir al carrito
				</button>
			)}

			{state2 && (
				<div className="btn-state2">
					<div className="state2__message">
						Este artículo se agregó al carrito de compras
					</div>
					<button
						className="cartbutton__btn cartbutton__continueBrowsing"
						onClick={continueBrowsingClick}
					>
						Seguir mirando
					</button>
					<button
						className="cartbutton__btn cartbutton__goToCart"
						onClick={goToCartClick}
					>
						Ir al carrito
					</button>
				</div>
			)}
		</div>
	);
}

export default CartButton;
