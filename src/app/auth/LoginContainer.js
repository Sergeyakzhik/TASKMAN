import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Login from './Login';
import { Users } from '../../api';

const LoginContainer = ({ history }) => {
	const [loginChecked, setLoginChecked] = useState(false);

	useEffect(() => {
		(async function() {
			const token = localStorage.getItem('token');

			if (token) {
				try {
					const response = await Users.getUser(token);
					const loggedIn = response.status === 200;

					if (loggedIn) {
						history.push('/board');
					} else {
						localStorage.removeItem('token');
					}
				} catch (e) {
					console.log(e);
				}
			}

			setLoginChecked(true);
		})();
	}, [history]);
    
	const handleSubmit = async values => {
		try {
			const response = await Users.logIn(values);
			const result = await response.json();

			if (result.token) {
				localStorage.setItem('token', result.token);
			}
		} catch(e) {
			console.log(e);
		} 
	};
 
	return (
		<Login
			loginChecked={loginChecked}
			onSubmit={handleSubmit}
		/>
	);
};

export default withRouter(LoginContainer);