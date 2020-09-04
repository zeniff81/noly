import React, { useEffect, useState } from 'react';
import '../css/Catalog.css';
import CatalogItem from './CatalogItem';
import CatalogModal from './CatalogModal';
import useFirestore from '../firebase/useFirestore';

function Catalog() {
	const [selected, setSelected] = useState(null);
	const { docs } = useFirestore('image');
	console.log(docs);

	useEffect(() => {
		console.log('selected image: ', selected);
	}, [selected]);

	return (
		<div className="catalog">
			{/* <CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/campo.png'
				}
				setSelected={setSelected}
			/> */}

			{docs.map((doc) => {
				return <CatalogItem img={doc.url} selected={selected} />;
			})}

			{selected && (
				<CatalogModal selected={selected} setSelected={setSelected} />
			)}
		</div>
	);
}

export default Catalog;
