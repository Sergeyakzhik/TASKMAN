import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';

import logo from '../../resources/images/logo_transparent.png';

const useStyles = makeStyles({
	box: {
		height: '100vh' 
	},
	logoWrapper: {
		width: '300px',
		marginBottom: '50px'
	},
	logo: {
		width: '100%'
	}
});

const Home = () => {
	const classes = useStyles();

	return (
		<Container>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="flex-start"
				className={classes.box}
			>
				<Box className={classes.logoWrapper}>
					<img className={classes.logo} src={logo} alt="logo" />
				</Box>
				<Typography variant="h3" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar magna ac velit suscipit luctus. Morbi iaculis ante orci, vitae luctus erat tempus non. Sed tempus, mi in molestie tempus, sem erat venenatis nibh, sit amet pretium ante lacus ut erat. Aenean blandit aliquet fringilla. Vivamus vestibulum a odio ut sodales. Curabitur pretium elit in odio vestibulum lacinia. Aliquam porta ipsum nec tellus pulvinar, quis aliquet orci condimentum.
				</Typography>
			</Box>
		</Container>
	);
};

export default Home;