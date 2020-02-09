import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { Users } from '../../api';

const LoginContainer = props => {
    
	const handleSubmit = async values => {
		try {
			const response = await Users.login(values);
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
			onSubmit={handleSubmit}
		/>
	);
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(LoginContainer);