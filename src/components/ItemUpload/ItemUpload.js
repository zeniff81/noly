import './css/ItemUpload.css';
import { useRef } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemCard from './ItemCard';
import ItemCardEdit from './ItemCardEdit';
import ProgressBar from '../ProgressBar';
import React from 'react';
import useFirestore from '../../firebase/useFirestore';
import useStorage from '../../firebase/useStorage';

function ItemUploader() {
	const [items, setItems] = useState(null);
	const [alertNewUpload, setAlertNewUpload] = useState(null);
	const [showEdit, setShowEdit] = useState(false);
	const { docs } = useFirestore('unpublished');
	const { progress } = useStorage([alertNewUpload, items]);
	const inputRef = useRef();

	const onChangeHandler = (e) => {
		const files = e.target.files;
		if (!files) return;

		setAlertNewUpload(Date.now());
		setItems(files);
	};

	return (
		<div className="itemUpload">
			<div className="itemUpload__row">
				<input
					type="file"
					ref={inputRef}
					style={{ display: 'none' }}
					multiple
					onChange={onChangeHandler}
				/>
				<button className="inputFile" onClick={() => inputRef.current.click()}>
					Subir artículos
				</button>
			</div>
			{/* ProgressBar */}
			{items && <ProgressBar progress={progress} />}
			{/* ItemList */}
			<div className="itemUploader__itemList">
				{docs &&
					docs.map((doc) => (
						<ItemCard key={uuidv4()} doc={doc} setShowEdit={setShowEdit} />
					))}
			</div>
			{/* ItemCardEdit */}
			{showEdit && <ItemCardEdit setShowEdit={setShowEdit} />}
		</div>
	);
}

export default ItemUploader;
