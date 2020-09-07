import React from 'react';
import '../css/CatalogItem.css';

function CatalogItem(props) {
	const { imageUrl } = props.doc;
	const { setSelected } = props;
	return (
		<div
			className="catalogItem"
			onClick={() => {
				setSelected(props.doc);
			}}
		>
			<div className="imageContainer">
				<img src={imageUrl} alt="" className="catalogItem__img" />
				<IconNew />
			</div>
		</div>
	);
}

function IconNew() {
	return (
		<img
			src="https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/assets%2Ficon-new.png?alt=media&token=8b96a83b-278f-4dae-94c5-f6db420c0871"
			alt=""
			className="catalogItem__newIcon"
		/>
	);
}

export default CatalogItem;
