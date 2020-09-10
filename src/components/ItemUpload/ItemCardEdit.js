import './css/ItemCardEdit.css';
import { connect } from 'react-redux';
import { updateCurrentDoc } from '../../redux/itemUpload/actions';
import { useEffect } from 'react';
import Button from '../common/Button';
import React, { useState } from 'react';
import SizeSelector from './SizeSelector';
import { projectFirestore } from '../../firebase/config';

function ItemCardEdit({ setShowEdit, updateCurrentDoc, currentDocId }) {
	const [state, setState] = useState({
		title: 'title - initial',
		description: 'description - initial',
		price: 'price - initial',
		size: 'L',
	});

	useEffect(() => {
		projectFirestore
			.doc('unpublished/' + currentDocId)
			.get()
			.then((doc) => {
				const data = doc.data();
				setState({
					title: data.title,
					description: data.description,
					price: data.price,
					size: data.size,
				});
			});
	}, [currentDocId]);

	const updateValue = (e) => {
		const property = e.target.name;
		const value = e.target.value;

		setState({
			...state,
			[property]: value,
		});
	};

	const setSize = (newSize) => {
		//setState({ ...state, size: newSize });
	};

	const hideItemCardEdit = (e) => {
		const allowToHide = [
			'itemCardEditCancel',
			'itemCardEditCover',
			'itemCardEditSave',
		];

		if (allowToHide.includes(e.target.id)) setShowEdit(false);
	};

	const saveChanges = (e) => {
		e.persist();
		const event = e;

		console.log(event.target.id);
		projectFirestore
			.doc('unpublished/' + currentDocId)
			.get()
			.then((doc) => {
				const data = doc.data();

				projectFirestore.doc('unpublished/' + currentDocId).set({
					...data,
					...state,
				});
			})
			.then(() => hideItemCardEdit(event));
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
						<Button
							onClick={saveChanges}
							id="itemCardEditSave"
							caption="Aceptar"
						/>
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
