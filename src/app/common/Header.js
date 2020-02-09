import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';

const useStyles = makeStyles({
	header: {
		width: '100%',
		padding: '10px 0',
		backgroundColor: '#E6F7FF',
		marginBottom: '70px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	buttonsBox: {
		position: 'relative',
		right: 0,
		display: 'inline-block'
	},
	button: {
		width: '142px',
		height: '40px',
		margin: '0 10px'
	},
	addListButton: {
		width: '50px',
		minWidth: '50px',
		opacity: '0.6'
	}
});

const Header = props => {
	const classes = useStyles();

	return (
		<header className={classes.header}>
			<Box></Box>
			<Box
				display="flex"
				flexWrap="nowrap"
				className={classes.buttonsBox}
			>
				<Link to="/login">
					<Button className={`${classes.button} ${classes.loginButton}`}>
                    	Log In
					</Button>
				</Link>
				<Link to="/signup">
					<Button variant="outlined" className={`${classes.button} ${classes.signupButton}`}>
                    	Sign Up
					</Button>
				</Link>
			</Box>
		</header>
	);	
};

export default Header;