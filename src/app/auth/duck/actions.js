import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	requestUser: null,
	receiveUser: ['data']
});

export { Types, Creators };