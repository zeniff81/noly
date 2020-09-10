import React from 'react';
import './css/ItemCardMenu.css';
import '../../css/global.css';

const ItemCardMenu = ({ setShowMenu, setShowEdit, setCurrentDoc, doc }) => {
	const deselectClick = (e) => {
		e.stopPropagation();
		setShowMenu(false);
	};
	const editClick = (e) => {
		e.stopPropagation();
		setShowEdit(true);
	};

	const publishItem = (doc) => {
		// something
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
			<button onClick={publishItem} className="itemCardmenu__edit hover active">
				Publicar
			</button>
		</div>
	);
};

export default ItemCardMenu;
