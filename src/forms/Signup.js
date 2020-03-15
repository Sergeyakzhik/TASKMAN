import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { signupValidation } from './validations';

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

const SignupForm = props => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{
				username: '',
				email: '',
				password: '',
				password2: ''
			}}
			validationSchema={signupValidation}
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
						label='Email'
						type='text' 
						name='email' 
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
					<Field 
						label='Repeat Password'
						type='password' 
						name='password2' 
						variant='outlined'
						fullWidth
						component={TextField} 
					/>
					<Button className={classes.button} onClick={() => submitForm(values)}>
						Sign Up
					</Button>
				</Form>
			)}
		</Formik>
	);	
};

export default SignupForm;
