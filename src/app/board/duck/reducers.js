import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
	tickets: []
};

const addTicket = (state = INITIAL_STATE, action) => (
	{ ...state, tickets:  [ ...state.tickets, action.ticket ] }  
);

const HANDLERS = {
	[Types.ADD_TICKET]: addTicket
};

export default createReducer(INITIAL_STATE, HANDLERS);