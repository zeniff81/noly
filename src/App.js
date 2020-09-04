import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Catalog from './components/Catalog.js';
import ContactUs from './components/ContactUs.js';
import Content from './components/Content';
import './css/App.css';
import './css/Footer.css';
import Purchase from './components/Purchase.js';
import ThankYouPurchase from './components/ThankYouPurchase.js';
import ItemUpload from './components/ItemUpload.js';
import Test from './components/Test.js';

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Content>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/catalog/:id" component={Catalog} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/purchase/:selectedImage" component={Purchase} />
						<Route path="/thankyoupurchase" component={ThankYouPurchase} />
						<Route path="/itemupload" component={ItemUpload} />
						<Route path="/test" component={Test} />
					</Switch>
				</Content>
			</Router>
		</div>
	);
}

export default App;
