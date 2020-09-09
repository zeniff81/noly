import React, { useState } from 'react';
import './css/ItemCardEdit.css';
import Button from '../common/Button';
import SizeSelector from './SizeSelector';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function ItemCardEdit({ setShowEdit, currentDoc }) {
	const [state, setState] = useState({
		title: 'newtitle',
		description: 'newDesc',
		price: 'newPrice',
		size: 'newSize',
	});

	useEffect(() => {
		setState({
			title: currentDoc.title,
			description: currentDoc.description,
			price: currentDoc.price,
			size: currentDoc.size,
		});
	}, []);

	const setSize = (newSize) => {
		setState({ ...state, size: newSize });
	};

	const hideItemCardEdit = (e) => {
		const allowToHide = ['itemCardEditCancel', 'itemCardEditCover'];

		if (allowToHide.includes(e.target.id)) setShowEdit(false);
	};

	const onOkClick = () => {
		//onOkClick
	};

	return (
		<div className="cover" id="itemCardEditCover" onClick={hideItemCardEdit}>
			<div className="itemCardEdit">
				<div className="itemCardEdit__row rowHeader">
					<img
						src={require('../../resources/campo.png')}
						alt=""
						className="itemCardEdit__image"
					/>
					<div className="itemCardEdit__row itemCardEdit__actions">
						<Button onClick={onOkClick} caption="Aceptar" />
						<Button
							onClick={hideItemCardEdit}
							caption="Cancelar"
							id="itemCardEditCancel"
						/>
					</div>
				</div>

				<div className="itemCardEdit__row">
					<div>Título</div>
					<input type="text" value={state.title} />
				</div>

				<div className="itemCardEdit__row">
					<div>Descripción</div>
					<input type="text" value={state.description} />
				</div>

				<div className="itemCardEdit__row">
					<div>Precio</div>
					<input type="text" value={state.price} />
				</div>

				<div className="itemCardEdit__row">
					<SizeSelector setSize={setSize} />
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		currentDoc: state.itemUpload.currentDoc,
	};
};

export default connect(mapStateToProps)(ItemCardEdit);
