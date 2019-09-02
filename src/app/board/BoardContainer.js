import React, { useState } from 'react';
import { connect } from 'react-redux';
import Board from './Board';

import { boardOperations } from './duck';

const BoardContainer = props => {
	const [openedDialog, setOpen] = useState(null);

	const handleSubmit = value => {
		const { addTicket } = props;

		addTicket(openedDialog, value);
		setOpen(null);
	};
 
	return (
		<Board 
			listNames={props.listNames} 
			lists={props.lists} 
			openedDialog={openedDialog}
			setOpen={setOpen}
			handleSubmit={handleSubmit} 
		/>
	);
};

const mapStateToProps = state => ({
	listNames: state.board.listNames,
	lists: state.board.lists
});

const mapDispatchToProps = {
	addTicket: boardOperations.addTicket
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(BoardContainer);