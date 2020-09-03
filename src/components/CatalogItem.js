import React from 'react';
import '../css/CatalogItem.css';
import { Link } from 'react-router-dom';

function CatalogItem({ img, setSelected }) {
	const thisImage = img;
	return (
		<div
			className="catalogItem"
			onClick={() => {
				setSelected(img);
			}}
		>
			<img src={img} alt="" className="catalogItem__img" />
		</div>
	);
}

export default CatalogItem;
