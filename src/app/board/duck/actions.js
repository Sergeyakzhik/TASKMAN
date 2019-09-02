import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	addTicket: ['listName', 'ticket']
});

export { Types, Creators };