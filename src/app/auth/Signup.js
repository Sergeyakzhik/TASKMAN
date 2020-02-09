import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
import { SignupForm } from '../../forms';

import { Card, CardHeader, CardContent, Container } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#E6F7FF',
		width: '485px',
		position: 'relative',
		margin: 'auto',
		'&:hover .close-icon': {
			display: 'inline'
		}
	},
	cardHeader: {
		fontSize: '25px',
		textAlign: 'center',
		color: '#10679E',
		fontWeight: '900'
	},
	cardContent: {
		padding: '8px 10px'
	}
});

const Signup = ({ onSubmit }) => {
	const classes = useStyles();

	return (
		<Container>
			<Card raised className={classes.card}>
				<CardHeader title="Sign Up" className={classes.cardHeader} />
				<CardContent className={classes.cardContent}>
					<SignupForm onSubmit={onSubmit} />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Signup;