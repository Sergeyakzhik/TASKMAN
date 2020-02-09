import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
import { LoginForm } from '../../forms';

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

const Login = ({ onSubmit }) => {
	const classes = useStyles();

	return (
		<Container>
			<Card raised className={classes.card}>
				<CardHeader title="Log In" className={classes.cardHeader} />
				<CardContent className={classes.cardContent}>
					<LoginForm onSubmit={onSubmit} />
				</CardContent>
			</Card>
		</Container>
	);
};

export default Login;