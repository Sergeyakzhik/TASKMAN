import React from 'react';
import { Route } from 'react-router-dom';

import { withAuthCheck } from '../../HOCs';

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route 
		{...rest} 
		component={withAuthCheck(Component)}
	/>
);

export default ProtectedRoute;
