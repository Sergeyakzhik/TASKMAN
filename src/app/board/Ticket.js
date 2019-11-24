import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#E6F7FF',
		width: '100%',
		marginBottom: '10px'
	},
	title: {
		color: '#58758C',
		fontSize: '21px'
	}
});

const Ticket = ({ title, listInd, ticketInd, openDialog }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card} onClick={() => openDialog(listInd, ticketInd)}>  
			<CardHeader title={title} classes={{title: classes.title}} />
			<CardContent />
		</Card>
	);
};

export default Ticket;