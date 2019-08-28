import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#E6F7FF',
		width: '385px' 
	},
	cardHeader: {
		height: '51px',
		backgroundColor: '#103F65'
	}
});

const List = ({ title }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>  
			<CardHeader title={title} className={classes.cardHeader} />
			<CardContent />
		</Card>
	);
};

export default List;