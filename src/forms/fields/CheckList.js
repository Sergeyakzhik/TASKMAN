import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	checkList: {
		paddingLeft: '15px',
		display: 'flex',
		flexDirection: 'column'
	},
	label: {
		display: 'inline-block',
		minWidth: '200px',
		height: '24px',
		'&.hidden': {
			display: 'none'
		}
	},
	inputField: {
		'&.hidden': {
			display: 'none'
		}
	},
	button: {
		backgroundColor: 'transparent',
		color: '#10679e',
		fontSize: '12px',
		marginLeft: '15px',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	}
});

const CheckList = ({ value, setFieldValue, arrayHelpers }) => { 
	const [focused, changeFocus] = useState(0);	

	const refsCollection = {};

	const classes = useStyles();

	useEffect(() => {
		refsCollection[focused] && refsCollection[focused].focus();
	}, [focused]);

	const moveTask = (source, destination) => {
		arrayHelpers.swap(source.index, destination.index);
	};

	const handleBlur = () => {
		changeFocus(null);
	};

	const handleCheck = ind => {
		const wasChecked = value[ind].checked;

		setFieldValue(`checkList[${ind}].checked`, !wasChecked);

		!wasChecked && arrayHelpers.swap(ind, value.length - 1);
	};

	const handleDragEnd = ({ source, destination }) => {
		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId && source.index === destination.index) {
			return;
		}

		moveTask(source, destination);
	};

	const handleNewTaskClick = () => {
		arrayHelpers.push({ title: '', checked: false });
		setTimeout(() => {
			changeFocus(value.length);
		}, 0);
	};
	
	const handleLabelClick = (e, ind) => {
		e.preventDefault();
		changeFocus(ind);
	};
    
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId='checkList'>
				{provided => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<FormGroup className={classes.checkList}>
							{value.map((item, ind) => (
								<Draggable key={ind} draggableId={item.title + ind} index={ind}> 
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps} 
										>
											<Field
												name={`checkList[${ind}].checked`}
											>
												{({ field }) => (
													<FormControlLabel
														control={
															<Checkbox checked={field.value} onChange={() => handleCheck(ind)} />
														}
														label={
															<span 
																className={`${classes.label} ${focused === ind ? 'hidden' : ''}`} 
																onClick={e => handleLabelClick(e, ind)}
															>
																{item.title}
															</span>
														}
													/>
												)}
											</Field>
											<Field
												name={`checkList[${ind}].title`}
											>
												{({ field }) => (
													<ClickAwayListener onClickAway={handleBlur}>
														<Input 
															className={`${classes.inputField} ${focused !== ind ? 'hidden' : ''}`}
															inputRef={ref => refsCollection[ind] = ref} 
															{ ...field } 
														/>
													</ClickAwayListener>
												)}
											</Field>
										</div>
									)}
								</Draggable>
							))}
						</FormGroup>
						{provided.placeholder}
					</div> 
				)}
			</Droppable>
			<Button className={classes.button} onClick={handleNewTaskClick}>
				Add Task
			</Button>
		</DragDropContext>
	);	
};

export default CheckList;
