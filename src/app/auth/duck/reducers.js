import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
	user: null,
	dataFetched: false,
	isFetching: false
};

const requestUser = (state = INITIAL_STATE) => ({
	...state, 
	isFetching: true
});

const receiveUser = (state = INITIAL_STATE, action) => ({
	...state, 
	isFetching: false,
	dataFetched: true,
	user: action.data
});

const HANDLERS = {
	[Types.REQUEST_USER]: requestUser,
	[Types.RECEIVE_USER]: receiveUser
};

export default createReducer(INITIAL_STATE, HANDLERS);