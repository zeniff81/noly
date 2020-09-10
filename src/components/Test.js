import React from 'react';
import '../css/Test.css';
import { projectFirestore } from '../firebase/config';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemCardEdit from './ItemUpload/ItemCardEdit';
import { v4 as uuidv4 } from 'uuid';

function Test() {
	const [currentDoc, setCurrentDoc] = useState(null);
	const [arrId, setArrId] = useState([]);
	const [currenDocId, updateCurrentId] = useState('33M1k7FhMHQs5SBrA0Kk');

	useEffect(() => {
		projectFirestore
			.collection('unpublished')
			.get()
			.then((query) => {
				const queries = query.docs;
				const arrId = [];
				console.log('queries:', query.docs.length);
				queries.map((doc) => arrId.push(doc.id));
				setArrId(arrId);
			});

		projectFirestore
			.doc('unpublished/' + currenDocId)
			.get()
			.then((doc) => {
				const data = doc.data();
				console.log(data);
				setCurrentDoc({ ...data });
			})
			.catch((err) => console.log(err));
	}, [currenDocId]);

	const setCurrentId = (e) => {
		updateCurrentId(e.target.innerText);
	};

	return (
		<div>
			<label htmlFor="">Array IDs</label>
			<div>
				{arrId.map((id) => (
					<li key={uuidv4()} onClick={setCurrentId}>
						{id}
					</li>
				))}
				<hr />
				<div>Current id: {currenDocId}</div>
			</div>
			{currentDoc && (
				<ItemCardEdit showEdit={null} currentDocId={currenDocId} />
			)}
		</div>
	);
}

export default Test;

// TODO almost know how to handle firestore r
