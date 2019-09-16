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

	const handleDragEnd = ({ source, destination }) => { //divide actions by Droppable type
		const { moveTicket } = props;

		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId && source.index === destination.index) {
			return;
		}

		moveTicket(source, destination);
	};
 
	return (
		<Board 
			listNames={props.listNames}
			lists={props.lists}
			openedDialog={openedDialog}
			setOpen={setOpen}
			handleSubmit={handleSubmit} 
			onDragEnd={handleDragEnd}
		/>
	);
};

const mapStateToProps = state => ({
	listNames: state.board.listNames,
	lists: state.board.lists
});

const mapDispatchToProps = {
	addTicket: boardOperations.addTicket,
	moveTicket: boardOperations.moveTicket
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(BoardContainer);