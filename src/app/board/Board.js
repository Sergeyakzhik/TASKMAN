import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
import List from './List';
import { TicketForm } from '../../forms';

import Box from '@material-ui/core/Box';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import data from '../dataSample';

const useStyles = makeStyles({

});

const Board = () => {
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
							/>
						</Box>
					))}
				</Box>
			</div>
			<Dialog open={true}>
				<DialogTitle disableTypography>New Card</DialogTitle>
				<DialogContent>
					<TicketForm />
				</DialogContent>
			</Dialog>
		</>
	);
	
};

export default Board;