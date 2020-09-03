import React from 'react';
import '../css/Content.css';

function Content(props) {
	return <div className="content">{props.children}</div>;
}

export default Content;
