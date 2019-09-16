import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ColorLensOutlined from '@material-ui/icons/ColorLensOutlined';

const colors = [
	{ name: 'red', color: 'red' }, 
	{ name: 'orange', color: 'orange' }, 
	{ name: 'yellow', color: 'yellow' }, 
	{ name: 'green', color: 'green' }, 
	{ name: 'blue', color: 'blue' }, 
	{ name: 'purple', color: 'purple' }, 
];

const styleObject = {
	menu: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '120px', 
		backgroundColor: '#E6F7FF',
		borderRadius: '5%',
		padding: '2px'
	},
	menuItem: {
		padding: 0
	},
	colorBox: {
		width: '13px',
		height: '13px',
		padding: '5px',
		borderRadius: '50%',
		margin: '2px',
		cursor: 'pointer'
	}
};

colors.forEach(item => {
	styleObject[item.name] = { backgroundColor: item.color };
});

const useStyles = makeStyles(styleObject);

const ColorBox = props => (
	<div { ...props }>
	</div>
);

const Label = ({ field, ...props }) => {
	const [anchorEl, setOpen] = useState(null);
	const classes = useStyles();
    
	const showMenu = e => {
		setOpen(e.currentTarget);
	};
    
	const hideMenu = () => {
		setOpen(null);
	};

	const selectColor = color => {
		field.onChange(color);
		setOpen(null);
	};

	const open = Boolean(anchorEl);
  	const id = open ? 'simple-popper' : undefined;

	return (
        <>
            <Fab className={classes.fab} aria-describedby={id} onClick={showMenu} disableRipple>
            	<ColorLensOutlined />
            </Fab>
            <Popover id={id} open={open} anchorEl={anchorEl} transition>
            	<Paper className={classes.menu}>
            		{colors.map(item => (
            			<ColorBox 
            				key={item.name} 
            				className={`${classes.colorBox} ${classes[item.name]}`} 
            				onClick={() => selectColor(item.name)} 
            				{...field} 
            				{...props}
            			/>
            		))}
            	</Paper>
            </Popover>
        </>
	);	
};

export default Label;
