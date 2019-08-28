import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import WebFont from 'webfontloader';

import { Board } from '../app/board';

WebFont.load({
	google: {
		families: ['Ubuntu: 300, 400, 500, 700']
	}
});

const App = () => (
	<Router>
		<div>
			<Route exact path='/' component={Board} /> 
		</div> 
	</Router>
);

export default App;
