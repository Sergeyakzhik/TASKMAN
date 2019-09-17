import React, { useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';

import { makeStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
	checkList: {
		height: 'auto',         //calculate dynamically based on tasks number
	}
});

const CheckList = () => { 
	const [tasks, handleUpdate] = useState({
		task1: false,
		task2: false,
		task3: false
	});  
	const [taskNames, changeOrder] = useState(['task1', 'task2', 'task3']);
	const classes = useStyles();
    
	const handleChange = e => {
		const taskValue = e.target.value;
		const isChecked = tasks[taskValue];
        
		handleUpdate({ ...tasks, [taskValue]: !isChecked });
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
													<Checkbox checked={tasks[item]} onChange={handleChange} value={item} />
												}
												label={item}
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
