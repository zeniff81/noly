import React from 'react';
import '../css/Cart.css';
import DeleteIcon from '@material-ui/icons/Delete';

function Cart() {
	return (
		<div className="cart">
			<h1>CARRITO</h1>
			<div className="cart__ItemsQty">4 artículos</div>
			<div className="cart__items">
				<div className="cart__row">
					<DeleteIcon className="deleteIcon" />
					<CartLabelValue label="cant" value="1" widthAuto center />
					<CartItem
						title="Cortina primaveral"
						description="Hermosa cortina de colores para la sala o habitación"
					/>
					<CartLabelValue label="subtotal" value="300" />
					<CartLabelValue label="precio" value="10,800" />
				</div>
				<div className="cart__row">
					<DeleteIcon className="deleteIcon" />
					<CartLabelValue label="cant" value="2" widthAuto center />
					<CartItem
						title="Colcha delux"
						description="Para la habitación de hoy"
					/>
					<CartLabelValue label="subtotal" value="300" />
					<CartLabelValue label="precio" value="600" />
				</div>
				<div className="cart__row">
					<DeleteIcon className="deleteIcon" />
					<CartLabelValue label="cant" value="1" widthAuto center />
					<CartItem
						title="Colcha infantil"
						description="Con dibujos estampados y temas de niños"
					/>
					<CartLabelValue label="subtotal" value="300" />
					<CartLabelValue label="precio" value="10,800" />
				</div>
			</div>

			<div className="cart__totals">
				<div className="cart__partialTotal">
					<span>Total parcial $</span>
					<span className="partialTotal__value">2,000</span>
				</div>
				<div className="cart__shipping">
					<span>Envío $</span> <span className="partialTotal__value">85</span>
				</div>
				<div className="cart__divider"></div>
				<div className="cart__total">
					<span>TOTAL $</span>{' '}
					<span className="partialTotal__value">2,405</span>
				</div>
			</div>

			<CartCustInfo />
			<div className="cart__actions">
				<button>COMPRAR</button>
			</div>
		</div>
	);
}

const CartItem = ({ title, description }) => {
	return (
		<div className="cartItem">
			<img
				src={require('../assets/img/test.png')}
				alt=""
				className="cartItem__image"
			/>
			<div className="cartItem__row">
				<div className="cartItem__title">{title}</div>
				<div className="cartItem__description">{description}</div>
			</div>
		</div>
	);
};

const CartLabelValue = ({ label, value, widthAuto, center }) => {
	return (
		<div
			className="cartLabelValue"
			style={{ width: widthAuto && 'auto', alignItems: center && 'center' }}
		>
			<div className="clv-l">{label}</div>
			<div className="clv-v">{value}</div>
		</div>
	);
};

const CartCustInfo = (props) => {
	return (
		<div className="cart__custInfo">
			<label htmlFor="cart__name">Nombre</label>
			<input type="text" id="cart__name" />
			<label htmlFor="cart__phone">Teléfono</label>
			<input type="text" id="cart__phone" />
			<label htmlFor="cart__address">Dirección</label>
			<textarea name="" id="cart__address" cols="30" rows="10"></textarea>
		</div>
	);
};

export default Cart;
