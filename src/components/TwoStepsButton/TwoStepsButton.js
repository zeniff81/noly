import React from 'react';
import { useState } from 'react';
import './TwoStepsButton.css';
import { withRouter, Redirect } from 'react-router-dom';

function TwoStepsButton({ details }) {
	const [flipped, setFlipped] = useState(false);
	const [redirectTo, setRedirectTo] = useState(null);

	const { arrButtonA, arrButtonB, message } = details;

	const actionsAndRoute = (args) => {
		setFlipped(true);

		const { actions, route } = args;

		if (actions) actions();
		route && setRedirectTo(route);
	};

	return (
		<div className="tsb">
			{redirectTo && <Redirect to={redirectTo} />}
			{message && flipped && <div className="tsb__message">{message}</div>}

			{!flipped && (
				<div className="tsb__type-a">
					{arrButtonA.map((button) => {
						return (
							<button
								className="tsb__button"
								onClick={(e) => {
									e.stopPropagation();
									actionsAndRoute(button.actionsAndRoute);
								}}
							>
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
								onClick={(e) => {
									e.stopPropagation();
									actionsAndRoute(button.actionsAndRoute);
								}}
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

export default withRouter(TwoStepsButton);
