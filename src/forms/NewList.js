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

const NewListForm = ({ initialValues, ...props }) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={initialValues || { title: '', description: '', color: '', checkList: [] }}
			onSubmit={props.handleSubmit}
			render={({ handleSubmit }) => (
				<Form className={classes.container}>
					<Field 
						label='Name'
						type='text' 
						name='name' 
						variant='outlined'
						fullWidth
						component={TextField} 
					/>
					<Button className={classes.button} onClick={handleSubmit}>
						Add
					</Button>
				</Form>
			)}
		/>
	);	
};

export default NewListForm;
