import React from 'react';
import { useState } from 'react';
import ItemCard from './ItemCard';
import ProgressBar from '../ProgressBar';
import './css/ItemUploader.css';
import { projectStorage } from '../../firebase/config';
import useStorageMultiple from './useStorageMultiple';
import useFirestore from '../../firebase/useFirestore';
import { v4 as uuidv4 } from 'uuid';

const uploadFile = (newFiles) => {
	if (newFiles === null) return;

	const file = newFiles;
	const storageRef = projectStorage.ref();
	const fileRef = storageRef.child(file.name);

	fileRef.put(file).then(() => console.log('file uploaded...'));
};

function ItemUploader() {
	const [items, setItems] = useState(null);
	const { progress } = useStorageMultiple(items);
	const { docs } = useFirestore('unpublished');

	const onChangeHandler = (e) => {
		const files = e.target.files;
		setItems(files);
	};

	return (
		<div className="itemUploader">
			<input type="file" id="files" multiple onChange={onChangeHandler} />
			{items && <ProgressBar progress={progress} />}

			<div className="itemUploader__itemList">
				{docs && docs.map((doc) => <ItemCard key={uuidv4()} item={doc} />)}
			</div>
		</div>
	);
}

export default ItemUploader;
