import React from 'react';
import '../css/CatalogModal.css';
import TwoStepsButton from './TwoStepsButton/TwoStepsButton';
import { connect } from 'react-redux';
import { addToCart } from '../redux/cart/actions';
import { v4 as uuidv4 } from 'uuid';

function CatalogModal(props) {
	const { title, description, size, imageUrl, price } = props.doc;
	const { setSelected } = props;

	const hideModal = () => {
		setSelected(null);
	};

	const imageClick = (e) => {
		e.stopPropagation();
	};

	const TwoStepsButton__methods = {
		addTocart: {
			actions: () =>
				props.addTocart({
					id: uuidv4(),
					title: title,
					description: description,
					price: price,
					imageUrl: imageUrl,
				}),
			route: null,
		},
		continueBrowsing: {
			route: null,
		},
		goToCart: {
			route: '/cart',
		},
	};

	return (
		<div className="catalogModal" onClick={hideModal}>
			<div className="catalogModal__content">
				<div className="catalogModal__row">
					<div className="catalogModal__info catalogModal__title">{title}</div>
				</div>
				<div className="catalogModal__row">
					<img
						className="catalogModal__img"
						onClick={imageClick}
						src={imageUrl}
						alt=""
					/>
				</div>
				<div className="catalogModal__row">
					<div className="catalogModal__info catalogModal__description">
						{description}
					</div>
					<div className="catalogModal__info catalogModal__size">{size}</div>
					<div className="catalogModal__info catalogModal__price">{price}</div>
				</div>
				<div className="catalogModal__row">
					<TwoStepsButton
						details={{
							arrButtonA: [
								{
									caption: 'Añadir al carrito',
									actionsAndRoute: TwoStepsButton__methods.addTocart,
								},
							],
							arrButtonB: [
								{
									caption: 'Seguir mirando',
									actionsAndRoute: TwoStepsButton__methods.continueBrowsing,
								},
								{
									caption: 'Ir al carrito',
									actionsAndRoute: TwoStepsButton__methods.goToCart,
								},
							],
							message: 'Este artículo se agregó al carrito de compras',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTocart: (item) => dispatch(addToCart(item)),
	};
};

export default connect(null, mapDispatchToProps)(CatalogModal);
