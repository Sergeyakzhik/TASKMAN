import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	requestSignUp: null,
	receiveSignUpSuccess: ['data'],
	receiveSignUpError: ['error'],
	requestUser: null,
	receiveUser: ['data']
});

export { Types, Creators };