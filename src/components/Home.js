import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Catalog from './Catalog';

function Home() {
	return (
		<div className="home">
			<div className="home__linksContainer">
				{/* hogar */}
				<Link to="/catalog/hogar" className="Link">
					<div className="home__link">
						<div className="home__title">Hogares</div>
						<div className="home__subtitle">
							colchas, sábanas, almohadas, cortinas
						</div>
					</div>
				</Link>

				{/* colchas */}
				<Link to="/catalog/ropa" className="Link">
					<div className="home__link">
						<div className="home__title">Ropa</div>
						<div className="home__subtitle">Blusas, vestidos</div>
					</div>
				</Link>

				{/* colchas */}
				<Link to="/catalog/cortinas" className="Link">
					<div className="home__link">
						<div className="home__title">cortinas</div>
						<div className="home__subtitle">dobles, triples, etc</div>
					</div>
				</Link>
			</div>

			<Catalog />
		</div>
	);
}

export default Home;
