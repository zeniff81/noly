import React from 'react';
import '../css/CatalogModal.css';
import { Link } from 'react-router-dom';

function CatalogModal({ selected, setSelected }) {
	const hideModal = () => {
		setSelected(null);
	};

	const imageClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div className="catalogModal" onClick={hideModal}>
			<img
				className="catalogModal__img"
				onClick={imageClick}
				src={selected}
				alt=""
			/>

			<Link to={`/purchase/${selected}`}>
				<button className="catalogModal__purchase">Me interesa</button>
			</Link>
		</div>
	);
}

export default CatalogModal;
