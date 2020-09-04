import React, { useEffect, useState } from 'react';
import '../css/Catalog.css';
import CatalogItem from './CatalogItem';
import CatalogModal from './CatalogModal';
import useFirestore from '../firebase/useFirestore';

function Catalog() {
	const [selected, setSelected] = useState(null);
	const { docs } = useFirestore('ropa');
	console.log(docs);

	useEffect(() => {
		console.log('selected image: ', selected);
	}, [selected]);

	return (
		<div className="catalog">
			{docs.map((doc) => {
				return <CatalogItem key={doc.id} doc={doc} setSelected={setSelected} />;
			})}

			{selected && <CatalogModal doc={selected} setSelected={setSelected} />}
		</div>
	);
}

export default Catalog;
