import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput } from '@material-ui/core';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},	
	textField: {
		// width: '400px',
		// border: 'none',
		// "&:hover": {
		// 	border: 'none',
		// },
		// "& fieldset": {
		// 	// borderColor: '#13659C',
		// 	"&:hover": {
		// 		border: 'none',
		// 	}	
		// }
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
						placeholder="Title"
						className={classes.textField} 
						type='text' 
						name='title' 
						variant="outlined" 
						component={OutlinedInput} 
					/>
					<Field 
						placeholder="Description"
						className={classes.textField} 
						type='text' 
						name='description' 
						variant="outlined"
						component={OutlinedInput} 
					/>
					<Button type='submit'>
						Add Card
					</Button>
				</Form>
			)}
		/>
	);	
};

export default TicketForm;
