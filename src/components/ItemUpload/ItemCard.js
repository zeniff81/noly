import React from 'react';
import './css/ItemCard.css';
import '../../css/global.css';
import { useState } from 'react';
import ItemCardMenu from './ItemCardMenu';
import ItemCardEdit from './ItemCardEdit';

function ItemCard({ setShowEdit, doc }) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div
			className={`itemCard ${showMenu ? 'itemCard__selected' : ''} hover`}
			onClick={() => setShowMenu(!showMenu)}
		>
			<div className="itemCard__row">
				<div className="itemCard__imageContainer">
					<img src={doc.imageUrl} alt="" className="itemCard__image" />
				</div>
				<div className="itemCard__info">
					<div className="itemCard__title">{doc.title}</div>
					<div className="itemCard__desc">{doc.description}</div>
					<div className="itemCard__two-in-a-row">
						<div className="itemCard__price">{doc.price}</div>
						<div className="itemCard__size">{doc.size}</div>
					</div>
				</div>
			</div>

			{/* ItemCardMenu */}
			<div className="itemCard__row">
				<div className="itemCard__menu">
					{showMenu ? (
						<ItemCardMenu setShowMenu={setShowMenu} setShowEdit={setShowEdit} />
					) : (
						<div style={{ color: 'gray', fontStyle: 'italic' }}>
							Seleccionar para ver opciones
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ItemCard;
