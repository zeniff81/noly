import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/" className="Link">
				<div className="logo">
					<div className="habla">HABLA</div>
					<div className="con">CON</div>
					<div className="noly">NOLY</div>
				</div>
			</Link>

			<div className="navbar__search">
				<input type="text" className="navbar__input" placeholder="buscar..." />
			</div>

			<div className="navbar__links">
				<Link to="/" className="Link">
					<button>Inicio</button>
				</Link>

				<Link to="/contactus" className="Link">
					<button>Contáctanos</button>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
