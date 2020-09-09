import React from 'react';
import './Button.css';

function Button({ caption, secondary, ...props }) {
	const secondaryClass = secondary && ' secondaryClass';
	return (
		<>
			<button
				className={'hablaConNolyBtn ' + props.className + secondaryClass}
				onClick={props.onClick}
				id={props.id}
			>
				{caption}
			</button>
		</>
	);
}

export default Button;
