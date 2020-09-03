import React, { useEffect, useState } from 'react';
import '../css/Catalog.css';
import CatalogItem from './CatalogItem';
import CatalogModal from './CatalogModal';

function Catalog() {
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		console.log('selected image: ', selected);
	}, [selected]);

	return (
		<div className="catalog">
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/campo.png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(1).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(2).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/campo.png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(1).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(2).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/campo.png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(1).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(2).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/campo.png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(1).png'
				}
				setSelected={setSelected}
			/>
			<CatalogItem
				img={
					'https://raw.githubusercontent.com/zeniff81/images-repo/master/colchas%20(2).png'
				}
				setSelected={setSelected}
			/>

			{selected && (
				<CatalogModal selected={selected} setSelected={setSelected} />
			)}
		</div>
	);
}

export default Catalog;
