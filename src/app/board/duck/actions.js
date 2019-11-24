import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	getLists: null,
	addTicket: ['listInd', 'ticket'],
	editTicket: ['listInd', 'ticketInd', 'ticket'],
	moveTicket: ['source', 'destination']
});

export { Types, Creators };