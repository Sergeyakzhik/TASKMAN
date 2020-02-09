import React from 'react';
import { connect } from 'react-redux';

import Signup from './Signup';
import { Users } from '../../api';

const SignupContainer = () => {
    
	const handleSubmit = async ({ password2, ...values }) => {
		try {
			let result = await Users.signup(values);
			result = await result.json();

			console.log(result);
		} catch(e) {
			console.log(e);
		} 
	};
 
	return (
		<Signup 
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
)(SignupContainer);