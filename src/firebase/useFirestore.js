import { projectFirestore } from './config';
const { useEffect } = require('react');
const { useState } = require('react');

const useFirestore = (collection = 'ropa') => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const cleanup = projectFirestore
			.collection(collection)
			.onSnapshot((snap) => {
				let documents = [];
				snap.docs.forEach((doc) =>
					documents.push({ ...doc.data(), id: doc.id })
				);
				setDocs(documents);
			});

		return () => {
			cleanup();
		};
	}, [collection]);

	return { docs };
};

export default useFirestore;
