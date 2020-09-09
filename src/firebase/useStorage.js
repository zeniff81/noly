import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore } from './config';

const useStorageMultiple = ([alert, files]) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		if (!files) return;
		// alert('use Storage Multiple');

		for (let f of files) {
			const storageRef = projectStorage.ref(f.name);
			const firestoreRef = projectFirestore.collection('unpublished');
			storageRef.put(f).on(
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
						createdAt: Date.now(),
					});
					setImageUrl(currentUrl);
				}
			);
		}
	}, [alert, files]);

	return { progress, error, imageUrl };
};

export default useStorageMultiple;
