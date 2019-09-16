import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	addTicket: ['listName', 'ticket'],
	moveTicket: ['source', 'destination']
});

export { Types, Creators };