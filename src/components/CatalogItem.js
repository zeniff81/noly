import React from 'react';
import '../css/CatalogItem.css';

//TODO: we already have redux; now send item objecto to cartReducer.items;

function CatalogItem(props) {
	const { id, url } = props.doc;
	const { setSelected } = props;
	return (
		<div
			className="catalogItem"
			onClick={() => {
				setSelected(props.doc);
				console.log(props);
			}}
		>
			<div className="imageContainer">
				<img src={url} alt="" className="catalogItem__img" />
				<img
					src="https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/assets%2Ficon-new.png?alt=media&token=8b96a83b-278f-4dae-94c5-f6db420c0871"
					alt=""
					className="catalogItem__newIcon"
				/>
			</div>
		</div>
	);
}

export default CatalogItem;
