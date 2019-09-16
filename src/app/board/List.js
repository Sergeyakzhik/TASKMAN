import React, { useEffect } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';

import Ticket from './Ticket';

import { Card, CardHeader, CardContent, Button } from '@material-ui/core';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#10679E',
		width: '385px' 
	},
	cardHeader: {
		height: '25px',
		backgroundColor: '#103F65'
	},
	title: {
		color: '#FFF',
		textAlign: 'center',
		fontSize: '25px'
	},
	button: {
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	}
});

const List = ({ title, name, tickets, openDialog }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>  
			<CardHeader title={title} className={classes.cardHeader} classes={{title: classes.title}} />
			<Droppable droppableId={name}>
				{provided => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<CardContent>
							{tickets.map((ticket, ind) => (
								<Draggable key={ind + title} draggableId={ticket.title + ind + title} index={ind}> 
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps} 
										>
											<Ticket title={ticket.title} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</CardContent>
					</div>
				)}
			</Droppable>
			<Button className={classes.button} onClick={() => openDialog(name)}>
				Add Ticket
			</Button>
		</Card>
	);
};

export default List;