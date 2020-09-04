import '../css/ItemUpload.css';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import React from 'react';
import useStorage from '../firebase/useStorage';
import Catalog from './Catalog';

//TODO: create grid to show current items

function ItemUpload() {
	const [file, setFile] = useState(null);
	const fileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [size, setSize] = useState('');
	const { progress, url } = useStorage(file);

	const onChangeHandler = (e) => {
		const selected = e.target.files[0];

		if (selected && fileTypes.includes(selected.type)) {
			console.log(selected);
			setFile(selected);
		}
	};

	const textInputChange = (e) => {
		//
	};

	return (
		<div className="itemupload">
			<h3>Subir artículo</h3>
			<div className="itemupload__input">
				<label htmlFor="title">Título</label>
				<input
					type="text"
					id="title"
					value={title}
					onChange={textInputChange}
				/>

				<label htmlFor="description">Descripción</label>
				<input
					type="text"
					id="description"
					value={description}
					onChange={textInputChange}
				/>

				<label htmlFor="size">Size</label>
				<input type="text" id="size" value={size} onChange={textInputChange} />

				<label htmlFor="isnew">Nuevo</label>
				<input type="checkbox" name="" id="isnew" />

				<label htmlFor="file"></label>
				<input type="file" name="" id="file" onChange={onChangeHandler} />

				{file && <ProgressBar progress={progress} />}
			</div>
			<Catalog />
		</div>
	);
}

export default ItemUpload;
