import React from 'react';
import './css/ItemCard.css';
import '../../css/global.css';
import { useState } from 'react';
import ItemCardMenu from './ItemCardMenu';
import { connect } from 'react-redux';
import { setCurrentDoc } from '../../redux/itemUpload/actions';
import { useEffect } from 'react';

function ItemCard({ setShowEdit, setCurrentDoc, doc }) {
	const [showMenu, setShowMenu] = useState(false);
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		setSelected(doc.category);
	}, [doc]);

	const itemCardClick = () => {
		setCurrentDoc(doc);
		setShowMenu(!showMenu);
	};

	const getSelected = (value) => {
		return value === selected;
	};

	return (
		<div
			className={`itemCard ${showMenu ? 'itemCard__selected' : ''} hover`}
			onClick={itemCardClick}
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
						<div className="itemCard__category">{doc.category}</div>
					</div>
				</div>
			</div>

			{/* ItemCardMenu */}
			<div className="itemCard__row">
				<div className="itemCard__menu">
					{showMenu ? (
						<ItemCardMenu
							setShowMenu={setShowMenu}
							setShowEdit={() => setShowEdit(doc.id)}
							doc={doc}
						/>
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

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentDoc: (doc) => dispatch(setCurrentDoc(doc)),
	};
};

export default connect(null, mapDispatchToProps)(ItemCard);
