import React from 'react';
import './css/ItemCardMenu.css';
import '../../css/global.css';
import { projectFirestore } from '../../firebase/config';

const ItemCardMenu = ({ setShowMenu, setShowEdit, setCurrentDoc, doc }) => {
	const deselectClick = (e) => {
		e.stopPropagation();
		setShowMenu(false);
	};
	const editClick = (e) => {
		e.stopPropagation();
		setShowEdit(true);
	};

	const publishItem = (e) => {
		e.stopPropagation();
		console.log(doc.category);

		if (doc.category === 'unpublished') {
			alert('Por favor EDITAR y elegir categoría');
			return;
		}

		projectFirestore
			.collection(doc.category)
			.add({
				...doc,
			})
			.then(() => {
				projectFirestore
					.doc(`unpublished/${doc.id}`)
					.delete()
					.then(() => console.log('deleted'))
					.catch((error) => console.log(error));
			});
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
