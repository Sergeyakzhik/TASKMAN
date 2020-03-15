import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userOperations } from '../app/auth/duck';

const withAuthCheck = WrappedComponent => (
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(({ user, getUser }) => {
		useEffect(() => {
			getUser();
		}, [getUser]);

		return user ? (
			<WrappedComponent user={user} />
		) : (
			<Redirect to='/login' />
		);
	})
);

const mapStateToProps = state => ({
	user: state.user.user
});

const mapDispatchToProps = {
	getUser: userOperations.getUser
};

export default withAuthCheck;
