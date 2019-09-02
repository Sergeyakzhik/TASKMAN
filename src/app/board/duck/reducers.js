import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = {
	listNames: ['sprint', 'inProgress', 'testing', 'complete'],
	lists: {
		sprint: {
			title: 'Sprint',
			tickets: [
				{
					title: 'Add new column to table'
				}
			] 
		},
		inProgress: {
			title: 'In Progress',
			tickets: [
				{
					title: 'Add new column to table'
				}
			]
		},
		testing: {
			title: 'Testing',
			tickets: [
				{
					title: 'Add new column to table'
				}
			]
		},
		complete: {
			title: 'Complete',
			tickets: [
				{
					title: 'Add new column to table'
				}
			]
		}
	}
};

const addTicket = (state = INITIAL_STATE, action) => ({ 
	...state, 
	lists: {
		...state.lists, 
		[action.listName]: {
			...state.lists[action.listName], 
			tickets: [
				...state.lists[action.listName].tickets,
				action.ticket
			]
		}
	}
});

const HANDLERS = {
	[Types.ADD_TICKET]: addTicket
};

export default createReducer(INITIAL_STATE, HANDLERS);