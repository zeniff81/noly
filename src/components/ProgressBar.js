import React from 'react';
import '../css/ProgressBar.css';

function ProgressBar({ progress }) {
	return (
		<div className="progressbar" style={{ width: `${progress}%` }}>
			<div className="progressbar__text">{progress}%</div>
		</div>
	);
}

export default ProgressBar;
