import './css/ItemUpload.css';
import { useRef } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemCard from './ItemCard';
import ProgressBar from '../ProgressBar';
import React from 'react';
import useFirestore from '../../firebase/useFirestore';
import useStorageMultiple from './useStorageMultiple';

function ItemUploader() {
	const [items, setItems] = useState(null);
	const { progress } = useStorageMultiple(items);
	const { docs } = useFirestore('unpublished');
	const inputRef = useRef()

	const onChangeHandler = (e) => {
		const files = e.target.files;
		setItems(files);
	};

	return (
		<div className="itemUpload">
			<div className="itemUpload__row">
			<input type="file" ref={inputRef} style={{display: 'none'}} multiple onChange={onChangeHandler} />
			<button className="inputFile" onClick={()=> inputRef.current.click()}>Subir artículos</button>
			</div>
			{items && <ProgressBar progress={progress} />}

			<div className="itemUploader__itemList">
				{docs && docs.map((doc) => <ItemCard key={uuidv4()} item={doc} />)}
			</div>
		</div>
	);
}

export default ItemUploader;
