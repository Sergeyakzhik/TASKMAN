import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

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

const TicketForm = () => {
	const classes = useStyles();

	return (
		<Formik
			onSubmit={(values, actions) => {

			}}
			render={({ errors, status, touched, isSubmitting }) => (
				<Form className={classes.container}>
					<Field 
						label="Title"
						type='text' 
						name='title' 
						variant="outlined" 
						component={TextField} 
					/>
					<Field 
						label="Description"
						type='text' 
						name='description' 
						variant="outlined"
						component={TextField} 
					/>
					<Button className={classes.button} type='submit'>
						Add Card
					</Button>
				</Form>
			)}
		/>
	);	
};

export default TicketForm;
