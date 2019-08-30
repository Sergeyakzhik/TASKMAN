import React from 'react';
import { connect } from 'react-redux';
import Board from './Board';

import { boardOperations } from './duck';

const BoardContainer = props => {

	const handleSubmit = value => {
		const { addTicket } = props;

		addTicket(value);
	};
 
	return (
		<Board handleSubmit={handleSubmit} />
	);
};

const mapStateToProps = state => ({
	tickets: state.tickets
});

const mapDispatchToProps = {
	addTicket: boardOperations.addTicket
};

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(BoardContainer);