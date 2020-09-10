import './css/ItemCardEdit.css';
import { connect } from 'react-redux';
import { updateCurrentDoc } from '../../redux/itemUpload/actions';
import { useEffect } from 'react';
import Button from '../common/Button';
import React, { useState } from 'react';
import SizeSelector from './SizeSelector';

function ItemCardEdit({ setShowEdit, updateCurrentDoc, currentDoc }) {
	const [state, setState] = useState({
		title: null,
		description: null,
		price: null,
		size: null,
	});

	const [title, setTitle] = useState('initial title');

	useEffect(() => {
		setState({
			title: currentDoc.title,
			description: currentDoc.description,
			price: currentDoc.price,
			size: currentDoc.size,
		});
	}, []);

	const updateValue = (e) => {
		const property = e.target.name;
		const value = e.target.value;

		setState({
			...state,
			[property]: value,
		});
	};

	const setSize = (newSize) => {
		setState({ ...state, size: newSize });
	};

	const hideItemCardEdit = (e) => {
		const allowToHide = ['itemCardEditCancel', 'itemCardEditCover'];

		if (allowToHide.includes(e.target.id)) setShowEdit(false);
	};

	const saveChanges = () => {
		updateCurrentDoc(currentDoc);
	};

	return (
		<div className="cover" id="itemCardEditCover" onClick={hideItemCardEdit}>
			{/* itemCardEditWrow */}
			<div className="itemCardEdit">
				<div className="itemCardEdit__row rowHeader">
					<img
						src={require('../../resources/campo.png')}
						alt=""
						className="itemCardEdit__image"
					/>

					{/* itemCardEditWrow */}
					<div className="itemCardEdit__row itemCardEdit__actions">
						<Button onClick={saveChanges} caption="Aceptar" />
						<Button
							onClick={hideItemCardEdit}
							caption="Cancelar"
							id="itemCardEditCancel"
						/>
					</div>
				</div>

				{/* itemCardEditWrow */}
				<div className="itemCardEdit__row">
					<label>Título</label>
					<input
						type="text"
						value={state.title}
						name="title"
						onChange={updateValue}
					/>
				</div>

				<div className="itemCardEdit__row">
					<label>Descripción</label>
					<input
						type="text"
						value={state.description}
						name="description"
						onChange={updateValue}
					/>
				</div>

				<div className="itemCardEdit__row">
					<label>Precio</label>
					<input
						type="text"
						value={state.price}
						name="price"
						onChange={updateValue}
					/>
				</div>

				<div className="itemCardEdit__row">
					<SizeSelector setSize={setSize} size={state.size} />
				</div>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateCurrentDoc: (doc) => dispatch(updateCurrentDoc(doc)),
	};
};

const mapStateToProps = (state) => {
	return {
		//		currentDoc: state.itemUpload.currentDoc,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCardEdit);
