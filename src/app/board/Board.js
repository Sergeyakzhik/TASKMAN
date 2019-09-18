import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
 
import List from './List';
import { TicketForm } from '../../forms';

import Box from '@material-ui/core/Box';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

const useStyles = makeStyles({

});

const Board = props => {
	const classes = useStyles();

	return (
		<>
			<DragDropContext onDragEnd={props.onDragEnd}>
				<div style={{ width: '100%' }}>
					<Box
						display="flex"
						flexWrap="nowrap"
						m={20}
					>
						{props.listNames.map(name => (
							<Box key={name} m={2}>
								<List
									title={props.lists[name].title}
									name={name}
									tickets={props.lists[name].tickets}
									openDialog={props.setOpen}
									onDragEnd={props.onDragEnd}
								/>
							</Box>
						))}
					</Box>
				</div>
			</DragDropContext>
			<Dialog open={!!props.openedDialog} onClose={() => props.setOpen(null)}>
				<DialogTitle disableTypography>New Card</DialogTitle>
				<DialogContent>
					<TicketForm handleSubmit={props.handleSubmit} />
				</DialogContent>
			</Dialog>
		</>
	);
	
};

export default Board;