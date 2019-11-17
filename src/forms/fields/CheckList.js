import React, { useState, useEffect } from 'react';
import { Field } from 'formik';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';

import { TextField } from 'formik-material-ui';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	checkList: {
		height: 'auto',         //calculate dynamically based on tasks number
		paddingLeft: '15px'
	},
	label: {
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

const CheckList = ({ value, anchorEl, hideMenu, setFieldValue }) => { 
	const [focused, changeFocus] = useState(0);	

	const refsCollection = {};

	const classes = useStyles();

	// useEffect(() => {
	// 	document.onkeydown = e => {
	// 		const event = e || window.event;

	// 		if (event.keyCode === 13 && focused) {
	// 			e.preventDefault();
	// 			handleNewTaskClick();
	// 		}
	// 	};
	// }, []);

	// useEffect(() => {
	// 	console.log(focused);
	// });

	// useEffect(() => {
	// 	const focused = value.findIndex(item => item.focused);

	// 	changeFocus(focused);
	// }, []);

	useEffect(() => {
		console.log(refsCollection, focused);
		setTimeout(() => {
			refsCollection[focused] && refsCollection[focused].focus();
		}, 0);
	}, [focused]);
    
	const handleChange = (e, ind) => {			
		// const taskValue = e.target.value;
		// const isChecked = taskValue.checked;
		// const result = [ ...value.list ];

		// result[ind].checked = !isChecked;
        
		// setFieldValue('checkList', result);
		
		// !isChecked && moveToTheEnd(ind);
	};

	const handleTaskTitleChange = (e, ind) => {
		const title = e.target.value;

		setFieldValue(`checkList.${ind}`, { ...value[ind], title });
	};

	const handleBlur = () => {
		console.log('BLUR');
		const result = [ ...value ];

		result[focused].focused = false;

		// setFieldValue('checkList', result);
	};
    
	const moveTask = (source, destination) => {
		// const result = [ ...taskNames ];
		// const [ removed ] = result.splice(source.index, 1);
		
		// result.splice(destination.index, 0, removed);

		// setFieldValue('checkList', {
		// 	taskNames: result,
		// 	tasks
		// });
	};

	const moveToTheEnd = ind => {
		// const result = [ ...field.value ];
		// const [ removed ] = result.splice(ind, 1);
		
		// result.splice(field.value.length - 1, 0, removed);

		// setFieldValue('checkList', result);
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

	const handleNewTaskClick = () => {  // finish using array helpers
		// const newTaskInd = field.value.length;
		// const result = [ ...field.value, { title: '', checked: false, focused: true } ];

		// setFieldValue('checkList', result);
	};
	
	const handleLabelClick = (e, ind) => {
		// const result = [ ...field.value ];

		// result[focused].focused = false;
		// result[ind].focused = true;

		// setFieldValue('checkList', result);
	};
    
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId='checkList'>
				{provided => (
					<div className={classes.checkList} ref={provided.innerRef} {...provided.droppableProps}>
						<FormGroup>
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
												component={() => (
													<FormControlLabel
														control={
															<Checkbox checked={item.checked} onChange={e => handleChange(e, ind)} value={item} />
														}
														label={
															<span 
																className={`${classes.label} ${item.focused ? 'hidden' : ''}`} 
																onClick={e => handleLabelClick(e, ind)}
															>
																{item.title}
															</span>
														}
													/>
												)}
											/>
											<Field
												name={`checkList[${ind}].title`}
												className={`${classes.inputField} ${!item.focused ? 'hidden' : ''}`}
												inputRef={ref => refsCollection[ind] = ref} 
												component={TextField}
											/>
										</div>
									)}
								</Draggable>
							))}
						</FormGroup>
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
