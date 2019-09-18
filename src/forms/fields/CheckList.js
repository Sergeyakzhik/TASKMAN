import React, { useState, useEffect } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
	checkList: {
		height: 'auto',         //calculate dynamically based on tasks number
	}
});

const CheckList = ({ field, form, anchorEl, hideMenu, ...props }) => { 
	const [tasks, handleUpdate] = useState({
		task1: {
			title: '',
			label: '',
			checked: false
		}
	});  
	const [taskNames, changeOrder] = useState(['task1']);
	const classes = useStyles();
	
	const checkInput = React.createRef();

	useEffect(() => {
		checkInput.current.focus();
	}, []);
    
	const handleChange = e => {										//add function for new tasks
		const taskValue = e.target.value;
		const isChecked = tasks[taskValue].checked;
        
		handleUpdate({ ...tasks, [taskValue]: { ...tasks[taskValue], checked: !isChecked } });
	};

	const handleTaskTitleChange = e => {
		const taskValue = e.target.name;
		const taskTitle = e.target.value;

		handleUpdate({ ...tasks, [taskValue]: { ...tasks[taskValue], title: taskTitle } });
	};

	const handleBlur = e => {
		const taskValue = e.target.name;
		const taskTitle = e.target.value;

		handleUpdate({ ...tasks, [taskValue]: { ...tasks[taskValue], label: taskTitle } });
	};
    
	const moveTask = (source, destination) => {
		const result = [ ...taskNames ];
		const [removed] = result.splice(source.index, 1);
		result.splice(destination.index, 0, removed);

		changeOrder(result);
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
    
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId='checkList'>
				{provided => (
					<div className={classes.checkList} ref={provided.innerRef} {...provided.droppableProps}>
						<FormGroup>
							{taskNames.map((item, ind) => (
								<Draggable key={item} draggableId={item + ind} index={ind}> 
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps} 
										>
											<FormControlLabel
												control={
													<Checkbox checked={tasks[item].checked} onChange={handleChange} value={item} />
												}
												label={tasks[item].label}
												{...field}
												{...props}
											/>
											<Input 
												name={item} 
												value={tasks[item].title} 
												inputRef={checkInput} 
												onChange={handleTaskTitleChange} 
												onBlur={handleBlur}
											/>
										</div>
									)}
								</Draggable>
							))}
						</FormGroup>
					</div> 
				)}
			</Droppable>
		</DragDropContext>
	);	
};

export default CheckList;
