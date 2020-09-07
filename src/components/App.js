import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import Home from './Home.js';
import Catalog from './Catalog.js';
import ContactUs from './ContactUs.js';
import Content from './Content';
import '../css/App.css';
import '../css/Footer.css';
import Purchase from './Purchase.js';
import ThankYouPurchase from './ThankYouPurchase.js';
import ItemUpload from './ItemUpload.js';
import Test from './Test.js';
import Cart from './Cart.js';
import CartEmpty from './CartEmpty.js';

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
						<Route path="/cart" component={Cart} />
						<Route path="/cartempty" component={CartEmpty} />
						<Route path="/test" component={Test} />
					</Switch>
				</Content>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
