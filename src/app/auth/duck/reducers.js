import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
	user: null,
	error: null,
	dataFetched: false,
	isFetching: false
};

const requestSignUp = (state = INITIAL_STATE) => ({
	...state,
	dataFetched: false,
	isFetching: true
});

const receiveSignUpSuccess = (state = INITIAL_STATE, action) => ({
	...state, 
	isFetching: false,
	dataFetched: true,
	user: action.data
});

const receiveSignUpError = (state = INITIAL_STATE, action) => ({
	...state, 
	isFetching: false,
	dataFetched: true,
	error: action.error ? { signUp: action.error } : { signUp: 'Something went wrong' }
});

const requestUser = (state = INITIAL_STATE) => ({
	...state,
	user: null,
	dataFetched: false,
	isFetching: true
});

const receiveUser = (state = INITIAL_STATE, action) => ({
	...state, 
	isFetching: false,
	dataFetched: true,
	user: action.data
});

const HANDLERS = {
	[Types.REQUEST_SIGN_UP]: requestSignUp,
	[Types.RECEIVE_SIGN_UP_SUCCESS]: receiveSignUpSuccess,
	[Types.RECEIVE_SIGN_UP_ERROR]: receiveSignUpError,
	[Types.REQUEST_USER]: requestUser,
	[Types.RECEIVE_USER]: receiveUser
};

export default createReducer(INITIAL_STATE, HANDLERS);