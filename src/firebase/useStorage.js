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
						category: 'unpublished',
						createdAt: Date.now(),
						description: 'new description',
						imageUrl: currentUrl,
						isNew: 'new isNew',
						price: 0,
						size: 'new size',
						title: 'new title',
					});
					setImageUrl(currentUrl);
				}
			);
		}
	}, [alert, files]);

	return { progress, error, imageUrl };
};

export default useStorageMultiple;
