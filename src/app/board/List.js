import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Ticket from './Ticket';

import { Card, CardHeader, CardContent, Button } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#10679E',
		width: '385px' 
	},
	cardHeader: {
		height: '25px',
		backgroundColor: '#103F65'
	},
	title: {
		color: '#FFF',
		textAlign: 'center',
		fontSize: '25px'
	},
	button: {
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	}
});

const List = ({ title, name, tickets, openDialog }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>  
			<CardHeader title={title} className={classes.cardHeader} classes={{title: classes.title}} />
			<CardContent>
				{tickets.map(ticket => (
					<Ticket title={ticket.title} />
				))}
			</CardContent>
			<Button className={classes.button} onClick={() => openDialog(name)}>
				Add Ticket
			</Button>
		</Card>
	);
};

export default List;