import { useEffect, useState } from 'react';
import { projectStorage } from '../firestore/config';

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(0);
	const [url, setUrl] = useState(0);

	useEffect(() => {
		const storageRef = projectStorage.ref(file.name);

		storageRef.put(file).on(
			'state_changed',
			(snap) => {
				const per = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(per);
			},
			(error) => setError(error),

			async () => {
				const url = await storageRef.getDownloadURL();
				setUrl(url);
				console.log(url);
			}
		);
	}, [file]);

	return { progress, error, url };
};

export default useStorage;
