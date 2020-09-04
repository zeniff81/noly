import React from 'react';
import '../css/CatalogModal.css';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function CatalogModal(props) {
	const { title, description, size, url, id } = props.doc;
	const { setSelected } = props;

	const hideModal = () => {
		setSelected(null);
	};

	const imageClick = (e) => {
		e.stopPropagation();
	};

	console.log('id', id);

	return (
		<div className="catalogModal" onClick={hideModal}>
			<div className="catalogModal__content">
				<h1 className="catalogModal__info catalogModal__title">{title}</h1>
				<img
					className="catalogModal__img"
					onClick={imageClick}
					src={url}
					alt=""
				/>

				<h3 className="catalogModal__info catalogModal__description">
					{description}
				</h3>
				<div className="catalogModal__info catalogModal__size">{size}</div>

				{/* <Link to={`/purchase/${id}`}> */}
				<CartButton
					addToCart={dummyMethods.addTocart}
					continueBrowsing={dummyMethods.continueBrowsing}
					goToCart={dummyMethods.goToCart}
				/>
				{/* </Link> */}
			</div>
		</div>
	);
}

const dummyMethods = {
	addTocart: () => console.log('adding to cart'),
	continueBrowsing: () => console.log('more browsing'),
	goToCart: () => console.log('take me to the cart'),
};

export default CatalogModal;
