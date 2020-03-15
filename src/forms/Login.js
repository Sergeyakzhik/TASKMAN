import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { loginValidation } from './validations';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},	
	button: {
		width: '200px',
		margin: '10px auto'
	}
});

const LoginForm = props => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{
				username: '',
				password: ''
			}}
			validationSchema={loginValidation}
			onSubmit={props.onSubmit}
		>
			{({ values, submitForm }) => (
				<Form className={classes.container}>
					<Field 
						label='Username'
						type='text' 
						name='username' 
						variant='outlined'
						fullWidth
						component={TextField} 
					/>
					<Field 
						label='Password'
						type='password' 
						name='password' 
						variant='outlined'
						fullWidth
						component={TextField} 
					/>
					<Button className={classes.button} onClick={() => submitForm(values)}>
						Log In
					</Button>
				</Form>
			)}
		</Formik>
	);	
};

export default LoginForm;
