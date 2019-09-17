import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
		width: '13px',
		height: '13px',
		padding: '5px',
		borderRadius: '50%',
		margin: '2px',
		cursor: 'pointer'
	}
};

for (let key in colors) {
	styleObject[key] = { backgroundColor: colors[key] };
}

const useStyles = makeStyles(styleObject);

const ColorBox = props => (
	<div { ...props }>
	</div>
);

const Label = ({ field, form, anchorEl, hideMenu, ...props }) => {
	const classes = useStyles();
    
	const selectColor = color => {
		form.setFieldValue(field.name, color);
		hideMenu(null);
	};

	return (
		<Popover id='color-popper' open={!!anchorEl} anchorEl={anchorEl} transition>
			<Paper className={classes.menu}>
				{Object.keys(colors).map(color => (
					<ColorBox 
						key={color} 
						className={`${classes.colorBox} ${classes[color]}`} 
						onClick={e => selectColor(color, e)} 
						{...field} 
						{...props}
					/>
				))}
			</Paper>
		</Popover>
	);	
};

export default Label;
