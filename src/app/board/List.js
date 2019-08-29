import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

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

const List = ({ title }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>  
			<CardHeader title={title} className={classes.cardHeader} classes={{title: classes.title}} />
			<CardContent />
		</Card>
	);
};

export default List;