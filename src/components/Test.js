import React from 'react';
import '../css/Test.css';
import useFirestore from '../firebase/useFirestore';
import { useEffect } from 'react';

function Test() {
	const { docs } = useFirestore('unpublished');
	console.clear();

	useEffect(() => {
		docs.map((doc) => console.log(doc.id));
	}, [docs]);

	return (
		<div>
			<h1>test</h1>
		</div>
	);
}

export default Test;

// TODO almost know how to handle firestore r
