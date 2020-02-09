import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import WebFont from 'webfontloader';
import { userOperations } from './auth/duck';

import { Home } from './home';
import { Login, Signup } from './auth';
import { Board } from './board';
import { Header } from './common';

WebFont.load({
	google: {
		families: ['Ubuntu: 300, 400, 500, 700', 'Montserrat: 300, 400, 500'],
	}
});

const App = ({ getUser }) => {	
	useEffect(() => {
		getUser();
	}, []);

	return (
		<Router>
			<Header />
			<main>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/board' component={Board} />
			</main> 
		</Router>
	);
};

const mapStateToProps = state => ({
	user: state.user.user,
	isFetching: state.user.isFetching,
	userDataFetched: state.user.userDataFetched
});

const mapDispatchToProps = {
	getUser: userOperations.getUser
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
