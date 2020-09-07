import React from 'react';
import './css/ItemCard.css';
import '../../css/global.css';
import { useState } from 'react';

function ItemCard({ item }) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="itemCard hover " onClick={() => setShowMenu(!showMenu)}>
			<div className="itemCard__imageContainer">
				<img src={item.imageUrl} alt="" className="itemCard__image" />
			</div>
			<div className="itemCard__info">
				<div className="itemCard__title">Colcha Roja</div>
				<div className="itemCard__desc">
					Adornada con encajes y botones dorados
				</div>
				<div className="itemCard__price">$234</div>
				<div className="itemCard__size">small</div>
			</div>
			{showMenu && <ItemCardMenu setShowMenu={setShowMenu} />}
		</div>
	);
}

const ItemCardMenu = ({ setShowMenu }) => {
	const deselectClick = (e) => {
		e.stopPropagation();
		setShowMenu(false);
	};
	const editClick = (e) => {
		e.stopPropagation();
	};
	return (
		<div className="itemCardMenu">
			<div className="itemCardMenu__buttons">
				<button
					onClick={deselectClick}
					className="itemCardmenu__deselect hover active"
				>
					Deseleccionar
				</button>
				<button onClick={editClick} className="itemCardmenu__edit hover active">
					Editar
				</button>
			</div>
		</div>
	);
};

export default ItemCard;
