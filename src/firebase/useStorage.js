import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore } from './/config';

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(0);
	const [url, setUrl] = useState(0);

	useEffect(() => {
		if (!file) return;
		const storageRef = projectStorage.ref(file.name);
		const firestoreRef = projectFirestore.collection('ropa');

		storageRef.put(file).on(
			'state_changed',
			(snap) => {
				const per = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(per);
			},
			(error) => setError(error),

			async () => {
				const url = await storageRef.getDownloadURL();
				await firestoreRef.add({
					description: 'new description',
					isNew: 'new isNew',
					size: 'new size',
					title: 'new title',
					url: url,
				});
				setUrl(url);
				console.log(url);
			}
		);
	}, [file]);

	return { progress, error, url };
};

export default useStorage;