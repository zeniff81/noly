import React from 'react';
import TwoStepsButton from './TwoStepsButton/TwoStepsButton';

function Test() {
	return (
		<div>
			<TwoStepsButton details={testDetails} />
		</div>
	);
}

export default Test;

const testDetails = {
	arrButtonA: [
		{
			caption: 'Comprar',
		},
	],
	arrButtonB: [
		{
			caption: 'Seguir mirando',
			special: false,
		},
		{
			caption: 'Whatsapp',
			special: false,
		},
		{
			caption: 'Seguir mirando',
			special: false,
		},
		{
			caption: 'Whatsapp',
			special: true,
		},
	],

	message: 'GRACIAS POR SU COMPRA! Le contataremos en breve.',
};
