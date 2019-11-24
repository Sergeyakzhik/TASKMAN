import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Board from './Board';

import { boardOperations } from './duck';

const BoardContainer = props => {
	const [openedDialog, setOpen] = useState(null);
	const [initialValues, setInitialValues] = useState(null);

	useEffect(() => {
		props.getLists();
	}, []);

	const openDialog = (listInd, ticketInd) => {
		setOpen({ list: listInd, ticket: ticketInd });
		ticketInd && setInitialValues(props.lists[listInd].tickets[ticketInd]);
	};

	const closeDialog = () => {
		setOpen(null);
		setInitialValues(null);
	};

	const handleSubmit = value => {
		const { addTicket, editTicket } = props;

		initialValues ? editTicket(openedDialog.list, openedDialog.ticket, value) : addTicket(openedDialog.list, value);

		setOpen(null);
		setInitialValues(null);
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
			lists={props.lists}
			openedDialog={openedDialog}
			initialValues={initialValues}
			openDialog={openDialog}
			closeDialog={closeDialog}
			handleSubmit={handleSubmit} 
			onDragEnd={handleDragEnd}
		/>
	);
};

const mapStateToProps = state => ({
	lists: state.board.lists
});

const mapDispatchToProps = {
	getLists: boardOperations.getLists,
	addTicket: boardOperations.addTicket,
	editTicket: boardOperations.editTicket,
	moveTicket: boardOperations.moveTicket
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(BoardContainer);