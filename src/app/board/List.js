import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';

import Ticket from './Ticket';

import { Card, CardHeader, CardContent, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#10679E',
		width: '385px',
		position: 'relative',
		'&:hover .close-icon': {
			display: 'inline'
		}
	},
	cardHeader: {
		height: '25px',
		backgroundColor: '#103F65'
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column'
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
	},
	closeIcon: {
		position: 'absolute',
		right: 0,
		padding: '5px',
		display: 'none'
	}
});

const List = ({ title, listInd, tickets, openDialog }) => {
	const classes = useStyles(); 
    
	return (
		<Card raised className={classes.card}>
			<IconButton className={`${classes.closeIcon} close-icon`}>
				<CloseIcon />
			</IconButton>
			<CardHeader title={title} className={classes.cardHeader} classes={{title: classes.title}} />
			<Droppable droppableId={listInd}>
				{provided => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						<CardContent className={classes.cardContent}>
							{tickets.map((ticket, ind) => (
								<Draggable key={ind + title} draggableId={ticket.title + ind + title} index={ind}> 
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps} 
										>
											<Ticket 
												title={ticket.title} 
												listInd={listInd} 
												ticketInd={ind}
												openDialog={openDialog} 
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</CardContent>
					</div>
				)}
			</Droppable>
			<Button className={classes.button} onClick={() => openDialog(listInd)}>
				Add Ticket
			</Button>
		</Card>
	);
};

export default List;