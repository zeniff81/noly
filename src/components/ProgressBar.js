import React from 'react';
import useStorage from '../firestore/useStorage';
import '../css/ProgressBar.css';

function ProgressBar({ file, setFile }) {
	const { progress, url } = useStorage(file);
	return (
		<div className="progressbar">
			<div className="progressbar__text">{progress}%</div>
		</div>
	);
}

export default ProgressBar;
