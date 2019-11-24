import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
	lists: []
};

const getLists = (state = INITIAL_STATE) => {
	const lists = JSON.parse(localStorage.getItem('lists'));

	return {
		...state, 
		lists
	};
};

const addTicket = (state = INITIAL_STATE, action) => {
	const result = [ ...state.lists ];

	result[action.listInd].tickets.push(action.ticket);

	return {
		...state, 
		lists: result
	};
};

const editTicket = (state = INITIAL_STATE, action) => {
	const result = [ ...state.lists ];

	result[action.listInd].tickets[action.ticketInd] = action.ticket;

	return {
		...state, 
		lists: result
	};
}; 

const moveTicket = (state = INITIAL_STATE, action) => {
	const lists = [ ...state.lists ];

	if (action.source.droppableId === action.destination.droppableId) {
		const result = [ ...state.lists[action.source.droppableId].tickets ];
		const [removed] = result.splice(action.source.index, 1);

		result.splice(action.destination.index, 0, removed);
		lists[action.source.droppableId].tickets = result;

		return {
			...state,
			lists
		};
	} else {
		const sourceClone = [ ...state.lists[action.source.droppableId].tickets ];
		const destinationClone = [ ...state.lists[action.destination.droppableId].tickets ];
		const [removed] = sourceClone.splice(action.source.index, 1);

		destinationClone.splice(action.destination.index, 0, removed);
		lists[action.source.droppableId].tickets = sourceClone;
		lists[action.destination.droppableId].tickets = destinationClone;

		return {
			...state,
			lists
		};
	}
};

const HANDLERS = {
	[Types.ADD_TICKET]: addTicket,
	[Types.EDIT_TICKET]: editTicket,
	[Types.MOVE_TICKET]: moveTicket,
	[Types.GET_LISTS]: getLists
};

export default createReducer(INITIAL_STATE, HANDLERS);