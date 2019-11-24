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
						{props.lists.map((list, ind) => (
							<Box key={list.title} m={2}>
								<List
									title={list.title}
									listInd={ind.toString()}
									tickets={list.tickets}
									openDialog={props.openDialog}
									onDragEnd={props.onDragEnd}
								/>
							</Box>
						))}
					</Box>
				</div>
			</DragDropContext>
			<Dialog open={!!props.openedDialog} onClose={() => props.closeDialog()}>
				<DialogTitle disableTypography>{props.initialValues ? 'Edit Card' : 'New Card'}</DialogTitle>
				<DialogContent>
					<TicketForm initialValues={props.initialValues} handleSubmit={props.handleSubmit} />
				</DialogContent>
			</Dialog>
		</>
	);
	
};

export default Board;