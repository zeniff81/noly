import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PublishIcon from '@material-ui/icons/Publish';
const logo =
	'https://firebasestorage.googleapis.com/v0/b/habla-con-noly.appspot.com/o/assets%2Flogo.png?alt=media&token=88efa2d4-655e-4c67-ac8e-eeaead9628d3';

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__logoContainer">
				<Link to="/" className="Link">
					<img src={logo} alt="" className="navbar__logo" />
				</Link>
			</div>

			<div className="navbar__search">
				<input type="text" className="navbar__input" placeholder="buscar..." />
			</div>

			<div className="navbar__links ">
				<Link to="/" className="Link">
					<HomeIcon className="materialIcon" />
				</Link>

				<Link to="/contactus" className="Link">
					<WhatsAppIcon className="materialIcon" />
				</Link>

				<Link to="/itemupload" className="Link">
					<PublishIcon className="materialIcon" />
				</Link>

				<Link to="/cart" className="Link">
					<ShoppingCartIcon className="materialIcon" />
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
