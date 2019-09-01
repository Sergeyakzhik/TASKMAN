import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
import List from './List';
import { TicketForm } from '../../forms';

import Box from '@material-ui/core/Box';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import data from '../dataSample';

const useStyles = makeStyles({

});

const Board = props => {
	const [isDialogOpen, openDialog] = useState(false);
	const classes = useStyles();

	return (
		<>
			<div style={{ width: '100%' }}>
				<Box
					display="flex"
					flexWrap="nowrap"
					m={20}
				>
					{data.board.lists.map(({ title }) => (
						<Box key={title} m={2}>
							<List
								title={title}
								openDialog={openDialog}
							/>
						</Box>
					))}
				</Box>
			</div>
			<Dialog open={isDialogOpen}>
				<DialogTitle disableTypography>New Card</DialogTitle>
				<DialogContent>
					<TicketForm handleSubmit={props.handleSubmit} />
				</DialogContent>
			</Dialog>
		</>
	);
	
};

export default Board;