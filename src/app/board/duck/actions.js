import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	addTicket: ['ticket']
});

export { Types, Creators };