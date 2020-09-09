import React, { useState } from 'react';
import './css/ItemCardEdit.css';
import Button from '../common/Button';
import SizeSelector from './SizeSelector';

function ItemCardEdit({ setShowEdit }) {
	const [state, setState] = useState({
		title: 'newtitle',
		description: 'newDesc',
		price: 'newPrice',
		size: 'newSize',
	});

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

				<div className="itemCardEdit__row" value={state.title}>
					<div>Título</div>
					<input type="text" />
				</div>

				<div className="itemCardEdit__row" value={state.description}>
					<div>Descripción</div>
					<input type="text" />
				</div>

				<div className="itemCardEdit__row" value={state.price}>
					<div>Precio</div>
					<input type="text" />
				</div>

				<div className="itemCardEdit__row">
					<SizeSelector setSize={setSize} />
				</div>
			</div>
		</div>
	);
}

export default ItemCardEdit;
