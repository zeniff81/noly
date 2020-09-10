import React from 'react';
import '../css/Test.css';
import { projectFirestore } from '../firebase/config';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemCardEdit from './ItemUpload/ItemCardEdit';

function Test() {
	const [currentDoc, setCurrentDoc] = useState(null);
	const [arrId, setArrId] = useState([]);
	const [currentId, updateCurrentId] = useState('initial');

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
			.doc('unpublished/33M1k7FhMHQs5SBrA0Kk')
			.get()
			.then((doc) => {
				const data = doc.data();
				setCurrentDoc({ ...data });
			})
			.catch((err) => console.log(err));
	}, []);

	const setCurrentId = (e) => {
		updateCurrentId(e.target.innerText);
	};

	return (
		<div>
			<label htmlFor="">Array IDs</label>
			<div>
				{arrId.map((id) => (
					<li onClick={setCurrentId}>{id}</li>
				))}
				<hr />
				<div>Current id: {currentId}</div>
			</div>
			{currentDoc && <ItemCardEdit showEdit={null} currentDocId={currentId} />};
		</div>
	);
}

export default Test;

// TODO almost know how to handle firestore
