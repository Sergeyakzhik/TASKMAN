import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#E6F7FF',
		width: '100%' 
	},
	title: {
		color: '#58758C',
		fontSize: '21px'
	}
});

const Ticket = ({ title }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>  
			<CardHeader title={title} classes={{title: classes.title}} />
			<CardContent />
		</Card>
	);
};

export default Ticket;