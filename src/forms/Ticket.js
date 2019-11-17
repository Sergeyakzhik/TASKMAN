import React, { useState, useEffect } from 'react';
import { Formik, Field, FieldArray, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import { LabelField, CheckList } from './fields';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import ColorLensOutlined from '@material-ui/icons/ColorLensOutlined';
import CheckBoxOutlined from '@material-ui/icons/CheckBoxOutlined';
import ScheduleOutlined from '@material-ui/icons/ScheduleOutlined';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexDirection: 'column'
	},	
	button: {
		width: '200px',
		margin: '10px auto'
	},
	fab: {
		width: '36px',
		height: '36px',
		backgroundColor: 'transparent',
		color: '#10679E',
		marginBottom: '10px',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: 'transparent'
		},
		'&:active': {
			boxShadow: 'none'
		}
	}
});

const TicketForm = props => {
	const [anchorEl, openLabelMenu] = useState(null);
	const [withChecklist, showChecklist] = useState(false);
	const classes = useStyles();
    
	const showLabelMenu = e => {
		openLabelMenu(e.currentTarget);
	};
    
	const hideLabelMenu = () => {
		openLabelMenu(null);
	};

	const addCheckList = () => {
		showChecklist(true);
	};

	return (
		<Formik
			initialValues={{ title: '', description: '', color: '', checkList: [{ title: '', checked: false, focused: true }] }}
			onSubmit={props.handleSubmit}
			render={({ errors, status, touched, isSubmitting, values, setFieldValue }) => (
				<Form className={classes.container}>
					<Grid container>
						{console.log(values)}
						<Grid item xs={11}>
							<Field 
								label='Title'
								type='text' 
								name='title' 
								variant='outlined'
								fullWidth
								component={TextField} 
							/>
							<Field 
								label='Description'
								type='text' 
								name='description' 
								variant='outlined'
								fullWidth
								component={TextField} 
							/>
							<Field 
								name='color' 
								component={props => <LabelField anchorEl={anchorEl} hideMenu={hideLabelMenu} { ...props } />} 
							/>
							<FieldArray 
								name='checkList' 
								render={arrayHelpers => <CheckList arrayHelpers={arrayHelpers} setFieldValue={setFieldValue} value={values.checkList} />} 
							/>
						</Grid>
						<Grid item xs={1}>
							<Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
								<Fab className={classes.fab} aria-describedby='color-popper' onClick={showLabelMenu} disableRipple>
									<ColorLensOutlined />
								</Fab>
								<Fab className={classes.fab} onClick={addCheckList} disableRipple>
									<CheckBoxOutlined />
								</Fab>
								<Fab className={classes.fab} disableRipple>
									<ScheduleOutlined />
								</Fab>
							</Grid>	
						</Grid>
					</Grid>
					<Button className={classes.button} type='submit'>
						Add Card
					</Button>
				</Form>
			)}
		/>
	);	
};

export default TicketForm;
