import React from 'react';
import Home from './Home';
import '../css/CartEmpty.css';

const imageUrl =
	'https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/assets%2Fwoman_thinking.png?alt=media&token=6a59319d-27c9-42d3-a8a1-bf7ce29e3d08';

function CartEmpty() {
	return (
		<div className="cartEmpty">
			<h1 className="cartEmpty__h1">¡El carrito está vacío!</h1>
			<img src={imageUrl} alt="" className="cartEmpty__image" />
			<p className="cartEmpty__subtitle">
				Más abajo hay cosas que te podrían interesar
			</p>
			<Home />
		</div>
	);
}

export default CartEmpty;
