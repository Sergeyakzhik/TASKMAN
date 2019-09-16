import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ColorLensOutlined from '@material-ui/icons/ColorLensOutlined';

const useStyles = makeStyles({
	menu: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100px'
	},
	menuItem: {
		padding: 0
	},
	colorBox: {
		width: '50px',
		height: '20px',
		padding: '5px'
	},
	red: {
		backgroundColor: 'red'
	},
	orange: {
		backgroundColor: 'orange'
	},
	yellow: {

	},
	green: {

	},
	blue: {

	},
	purple: {
        
	}
});

const ColorBox = props => (
	<div { ...props }>
	</div>
);

const Label = () => {
	const [anchorEl, setOpen] = useState(false);
	const classes = useStyles();
    
	const showMenu = e => {
		setOpen(e.currentTarget);
	};
    
	const hideMenu = () => {
		setOpen(null);
	};

	return (
        <>
            <Fab className={classes.fab} aria-describedby='colors-menu' onClick={showMenu} disableRipple>
            	<ColorLensOutlined />
            </Fab>
            <Popper className={classes.menu} id='colors-menu' open={!!anchorEl} anchorEl={anchorEl} transition>
            	<Paper>
            		<div className={classes.colorBox}>
                        
            		</div>
            		<div className={classes.colorBox}>
                        
            		</div>
            	</Paper>
            </Popper>
        </>
	);	
};

export default Label;
