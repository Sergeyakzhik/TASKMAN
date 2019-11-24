import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CheckIcon from '@material-ui/icons/Check';

const colors = {
	RED: 'red',
	ORANGE: 'orange',
	YELLOW: 'yellow',
	GREEN: 'green',
	BLUE: 'blue',
	PURPLE: 'purple'
};

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
		width: '23px',
		height: '23px',
		padding: '5px',
		borderRadius: '50%',
		margin: '2px',
		cursor: 'pointer'
	},
	checkIcon: {
		color: '#FFF'
	}
};

for (let key in colors) {
	styleObject[key] = { backgroundColor: colors[key] };
}

const useStyles = makeStyles(styleObject);

const ColorBox = ({ selected, classes, ...props }) => (
	<div { ...props }>
		{selected && <CheckIcon className={classes.checkIcon} />}
	</div>
);

const Label = ({ field, form, anchorEl, hideMenu }) => {
	const classes = useStyles();
    
	const selectColor = color => {
		form.setFieldValue(field.name, color);
		hideMenu(null);
	};

	return (
		<Popover id='color-popper' open={!!anchorEl} anchorEl={anchorEl}>
			<ClickAwayListener onClickAway={hideMenu}>
				<Paper className={classes.menu}>
					{Object.keys(colors).map(color => (
						<ColorBox 
							key={color} 
							className={`${classes.colorBox} ${classes[color]}`} 
							selected={field.value === color}
							classes={classes}
							onClick={e => selectColor(color, e)} 
							{...field} 
						/>
					))}
				</Paper>
			</ClickAwayListener>
		</Popover>
	);	
};

export default Label;
