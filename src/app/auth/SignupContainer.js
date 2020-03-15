import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Signup from './Signup';
import { userOperations } from './duck';

const SignupContainer = ({ history, user, signUp }) => {

	useEffect(() => {
		user && history.push('/board');
	}, user);
    
	const handleSubmit = async ({ password2, ...values }) => {
		signUp(values);
	};
 
	return (
		<Signup 
			onSubmit={handleSubmit}
		/>
	);
};

const mapStateToProps = state => ({
	user: state.user.user
});

const mapDispatchToProps = {
	signUp: userOperations.signUp
};

export default compose(
	withRouter,
	connect(
		mapStateToProps, 
		mapDispatchToProps
	)
)(SignupContainer);