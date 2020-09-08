import React from 'react';
import './css/ItemCardMenu.css';
import '../../css/global.css';


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
			<button
					onClick={deselectClick}
					className="itemCardmenu__deselect hover active"
				>
					Deseleccionar
				</button>
				<button onClick={editClick} className="itemCardmenu__edit hover active">
					Editar
				</button>
				<button onClick={editClick} className="itemCardmenu__edit hover active">
					Publicar
				</button>
		</div>
	);
};

export default ItemCardMenu;