import React from 'react';
 
import List from './List';
import { TicketForm } from '../../forms';

import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';

import data from '../dataSample';

const Board = () => (
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
			<TicketForm />
		</Dialog>
	</>
);

export default Board;