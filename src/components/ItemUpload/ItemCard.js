import React from 'react';
import './css/ItemCard.css';
import '../../css/global.css';
import { useState } from 'react';
import ItemCardMenu from './ItemCardMenu';

function ItemCard({ item }) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className={`itemCard ${(showMenu ? 'itemCard__selected'  : '')} hover`} onClick={() => setShowMenu(!showMenu)}>
			<div className="itemCard__row">
				<div className="itemCard__imageContainer">
					<img src={item.imageUrl} alt="" className="itemCard__image" />
				</div>
				<div className="itemCard__info">
					<div className="itemCard__title">Colcha Roja</div>
					<div className="itemCard__desc">
						Adornada con encajes y botones dorados
					</div>
					<div className="itemCard__two-in-a-row">
					<div className="itemCard__price">$234</div>
					<div className="itemCard__size">small</div>
					</div>
				</div>
			</div>
			<div className="itemCard__row">
				<div className="itemCard__menu">
					{showMenu ? <ItemCardMenu setShowMenu={setShowMenu} /> :
					<div style={{color: 'gray', fontStyle: 'italic'}}>Seleccionar para ver opciones</div>
					}
				</div>
			</div>
		</div>
	);
}

export default ItemCard;
