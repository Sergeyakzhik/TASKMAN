import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
	}
});

const List = ({ title, openDialog }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>  
			<CardHeader title={title} className={classes.cardHeader} classes={{title: classes.title}} />
			<CardContent />
			<Button onClick={() => openDialog(true)}>
				Add Ticket
			</Button>
		</Card>
	);
};

export default List;