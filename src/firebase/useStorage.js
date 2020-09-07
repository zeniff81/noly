import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore } from './config';

const useStorage = (files) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(0);
	const [imageUrl, setUrl] = useState(0);

	useEffect(() => {
		if (!files) return;
		const storageRef = projectStorage.ref(files.name);
		const firestoreRef = projectFirestore.collection('ropa');

		storageRef.put(files).on(
			'state_changed',
			(snap) => {
				const per = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(per);
			},

			(error) => setError(error),

			async () => {
				const currentUrl = await storageRef.getDownloadURL();
				await firestoreRef.add({
					description: 'new description',
					isNew: 'new isNew',
					size: 'new size',
					title: 'new title',
					price: 0,
					imageUrl: currentUrl,
				});
				setUrl(currentUrl);
			}
		);
	}, [files]);

	return { progress, error, imageUrl };
};

export default useStorage;
