import React from 'react';
import { useState } from 'react';
import './TwoStepsButton.css';
import { withRouter } from 'react-router-dom';

//TODO continue with buttons

function TwoStepsButton({ details }) {
	const [flipped, setFlipped] = useState(true);

	const { arrButtonA, arrButtonB, message } = details;
	return (
		<div className="tsb">
			{message && flipped && <div className="tsb__message">{message}</div>}

			{!flipped && (
				<div className="tsb__type-a">
					{arrButtonA.map((button) => {
						return (
							<button className="tsb__button" onClick={() => setFlipped(true)}>
								{button.caption}
							</button>
						);
					})}
				</div>
			)}

			{flipped && (
				<div className="tsb__type-B">
					{arrButtonB.map((button) => {
						return (
							<button
								className={`tsb__button ${
									button.special && 'tsb__button--special'
								}`}
								onClick={() => setFlipped(true)}
							>
								{button.caption}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default TwoStepsButton;
