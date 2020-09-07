import React, { useState } from 'react';
import '../css/Catalog.css';
import CatalogItem from './CatalogItem';
import CatalogModal from './CatalogModal';
import useFirestore from '../firebase/useFirestore';
import { useParams } from 'react-router-dom';

function Catalog() {
	const [selected, setSelected] = useState(null);
	const { id } = useParams();
	const { docs } = useFirestore(id);

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
