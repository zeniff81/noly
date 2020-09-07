import React, { useState } from 'react';
import '../css/Cart.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { setShipping, removeFromCart } from '../redux/cart/actions';
import { Redirect } from 'react-router-dom';

function Cart({ cartItems, totals, setShipping, removeFromCart }) {
	const [includeShipping, setIncludeShipping] = useState(true);

	return (
		<div>
			{cartItems.length === 0 ? (
				<Redirect to="/cartempty" />
			) : (
				<div className="cart">
					<div className="cart__header">
						<h1>CARRITO</h1>
						<div className="cart__ItemsQty">{cartItems.length} artículos</div>
					</div>
					<div className="cart__items">
						{cartItems.map((item) => {
							return (
								<div className="cart__row">
									<DeleteIcon
										className="deleteIcon"
										onClick={() => {
											removeFromCart(item.id);
										}}
									/>
									<CartLabelValue label="cant" value="1" widthAuto center />
									<CartItem
										title={item.title}
										description={item.description}
										imageUrl={item.imageUrl}
									/>
									<CartLabelValue label="subtotal" value="300" />
									<CartLabelValue label="precio" value={item.price} />
								</div>
							);
						})}
					</div>

					<div className="cart__totals">
						<div className="cart__partialTotal">
							<span>Total parcial $</span>
							<span className="partialTotal__value">{totals.partialTotal}</span>
						</div>
						<div className="cart__shipping">
							<input
								type="checkbox"
								checked={includeShipping}
								onChange={(e) => {
									setIncludeShipping(!includeShipping);
									const newShippingState = !includeShipping;
									newShippingState === true ? setShipping(100) : setShipping(0);
								}}
							/>
							{'  '}
							<span>Envío $</span>{' '}
							<span className="partialTotal__value">{totals.shipping}</span>
						</div>
						<div className="cart__divider"></div>
						<div className="cart__total">
							<span>TOTAL $</span>{' '}
							<span className="partialTotal__value">{totals.grandTotal}</span>
						</div>
						<div>shipping is: {totals.shipping}</div>
					</div>

					<CartCustInfo />
					<div className="cart__actions">
						<button>COMPRAR</button>
					</div>
				</div>
			)}
		</div>
	);
}

const CartItem = ({ title, description, imageUrl }) => {
	return (
		<div className="cartItem">
			<img src={imageUrl} alt="" className="cartItem__image" />
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

const mapDispatchToProps = (dispatch) => {
	return {
		setShipping: (fee) => dispatch(setShipping(fee)),
		removeFromCart: (id) => dispatch(removeFromCart(id)),
	};
};

const mapStateToProp = (state) => {
	return {
		cartItems: state.cart.cartItems,
		totals: state.cart.totals,
	};
};

export default connect(mapStateToProp, mapDispatchToProps)(Cart);
