import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
 
import List from './List';
import { TicketForm, NewListForm } from '../../forms';

import { Dialog, DialogTitle, DialogContent, Button, Box } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
	box: {
		minHeight: '300px' 
	},	
	addListButton: {
		width: '50px',
		minWidth: '50px',
		opacity: '0.6'
	}
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
						className={classes.box}
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
						<Button className={classes.addListButton} onClick={props.openListDialog}>
							<AddIcon />
						</Button>
					</Box>
				</div>
			</DragDropContext>
			<Dialog open={!!props.openedDialog} onClose={() => props.closeDialog()}>
				<DialogTitle disableTypography>{props.initialValues ? 'Edit Card' : 'New Card'}</DialogTitle>
				<DialogContent>
					<TicketForm initialValues={props.initialValues} handleSubmit={props.handleSubmit} />
				</DialogContent>
			</Dialog>
			<Dialog open={props.listDialog} onClose={props.closeListDialog}>
				<DialogTitle disableTypography>New List</DialogTitle>
				<DialogContent>
					<NewListForm initialValues={{ name: '' }} handleSubmit={props.handleNewList} />
				</DialogContent>
			</Dialog>
		</>
	);
	
};

export default Board;