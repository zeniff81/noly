import React, { useState } from 'react';
import '../css/Test.css';
import ItemCardEdit from './ItemUpload/ItemCardEdit';

function Test() {
	const [testState, setTestState] = useState({
		title: 'my title',
		description: 'very beautiful',
		price: '$2966',
	});

	const onInputChange = (e) => {
		const property = e.target.id;
		const value = e.target.value;

		setTestState({
			...testState,
			[property]: value,
		});
	};

	return (
		<div>
			<div>title</div>
			<input
				id="title"
				onChange={onInputChange}
				value={testState.title}
				type="text"
			/>

			<div>description</div>
			<input
				id="description"
				onChange={onInputChange}
				value={testState.description}
				type="text"
			/>

			<div>price</div>
			<input
				id="price"
				onChange={onInputChange}
				value={testState.price}
				type="text"
			/>
		</div>
	);
}

export default Test;
