import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#E6F7FF',
		width: '100%',
		marginBottom: '10px',
		position: 'relative'
	},
	title: {
		color: '#58758C',
		fontSize: '21px'
	},
	closeIcon: {
		position: 'absolute',
		right: 0,
		padding: '5px'
	}
});

const Ticket = ({ title, listInd, ticketInd, openDialog }) => {
	const classes = useStyles(); 

	return (
		<Card raised className={classes.card} onClick={() => openDialog(listInd, ticketInd)}>
			<IconButton className={classes.closeIcon}>
				<CloseIcon />
			</IconButton>
			<CardHeader title={title} classes={{title: classes.title}} />
			<CardContent />
		</Card>
	);
};

export default Ticket;